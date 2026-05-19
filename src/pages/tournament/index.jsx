import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
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
  { id: 'lists',         label: 'Subir Lista', icon: FileUp },
  { id: 'groups',        label: 'Grupos',      icon: Group  },
  { id: 'qualification', label: 'Partidas',    icon: Swords },
  { id: 'finals',        label: 'Finales',     icon: Crown  },
]

const STATUS_LABELS = {
  upcoming: { label: 'Próximo',    variant: 'ghost'  },
  ongoing:  { label: 'En curso',   variant: 'active' },
  finished: { label: 'Finalizado', variant: 'dark'   },
}

export default function Tournament() {
  const { id } = useParams()
  const { tournament, loading, error } = useTournament(id)
  const [activeTab, setActiveTab] = useState('info')

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

        <Tabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />

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
