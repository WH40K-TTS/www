import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { Info, FileUp, Group, Swords, Crown } from 'lucide-react'
import { useTournament } from '../../hooks/usetournament'
import { Tabs } from '../../components/ui/tabs'
import { LoadingState } from '../../components/ui/loading-state'
import { ErrorState } from '../../components/ui/error-state'
import TournamentInfo from './info'
import ListUpload from './listupload'
import Groups from './groups'
import QualificationMatches from './qualificationmatches'
import FinalMatches from './finalmatches'
import { Badge } from '../../components/ui/badge'

const TABS = [
  { id: 'info',          label: 'Info',        icon: Info   },
  { id: 'lists',         label: 'Listas',      icon: FileUp },
  { id: 'groups',        label: 'Grupos',      icon: Group  },
  { id: 'qualification', label: 'Partidas',    icon: Swords },
  { id: 'finals',        label: 'Finales',     icon: Crown  },
]

const STATUS_LABELS = {
  upcoming: { label: 'Próximamente',    variant: 'ghost'  },
  ongoing:  { label: 'En curso',   variant: 'active' },
  finished: { label: 'Finalizado', variant: 'dark'   },
}

export default function Tournament() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const { tournament, loading, error } = useTournament(id)
  
  // Read tab from URL query parameters (?tab=...)
  const tabParam = searchParams.get('tab')
  const activeTab = tabParam || 'info'

  // Validate tab: if the parameter exists but is not a valid tab, reset to 'info'
  useEffect(() => {
    if (tabParam && !TABS.some(t => t.id === tabParam)) {
      setSearchParams({}, { replace: true })
    }
  }, [tabParam, setSearchParams])

  const handleTabChange = (newTab) => {
    setSearchParams({ tab: newTab })
  }

  if (loading) return (
    <main className="min-h-screen pt-20">
      <LoadingState message="Cargando expediente de torneo…" />
    </main>
  )

  if (error || !tournament) return (
    <main className="min-h-screen pt-20">
      <ErrorState 
        title="Expediente no encontrado" 
        message={`El torneo con ID "${id}" no existe en los archivos.`} 
      />
    </main>
  )

  const statusInfo = STATUS_LABELS[tournament.status] ?? STATUS_LABELS.upcoming

  return (
    <main className="min-h-screen pt-20 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Tournament header */}
        <div className="text-center mb-10 pt-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <h1
              className="font-heading text-2xl sm:text-3xl tracking-[0.15em] uppercase text-[#c9a84c]"
              style={{ textShadow: '0 0 24px rgba(201,168,76,0.25)' }}
            >
              {tournament.name}
            </h1>
            <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
          </div>
          <div
            className="mx-auto w-48 h-px mt-4"
            style={{ background: 'linear-gradient(90deg, transparent, #8a6f2e, transparent)' }}
          />
        </div>

        <Tabs tabs={TABS} activeTab={activeTab} onChange={handleTabChange} />

        {/* Tab content */}
        <div className="animate-fade-in">
          {activeTab === 'info'          && <TournamentInfo tournament={tournament} />}
          {activeTab === 'lists'         && <ListUpload tournament={tournament} />}
          {activeTab === 'groups'        && <Groups groups={tournament.groups} />}
          {activeTab === 'qualification' && <QualificationMatches matches={tournament.qualificationMatches} />}
          {activeTab === 'finals'        && <FinalMatches matches={tournament.finalMatches} />}
        </div>

      </div>
    </main>
  )
}
