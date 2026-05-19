import React from 'react'
import { useTournaments } from '../hooks/usetournaments'
import { TournamentCard } from '../components/tournament/tournament-card'
import { LoadingState } from '../components/ui/loading-state'
import { ErrorState } from '../components/ui/error-state'

export default function Tournaments() {
  const { tournaments, loading, error } = useTournaments()

  return (
    <main className="min-h-screen pt-20 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 pt-8">
          <h1 className="font-heading text-3xl sm:text-4xl tracking-[0.15em] uppercase text-[#c9a84c] mb-4">
            Torneos
          </h1>
          <div
            className="mx-auto w-48 h-px mb-4"
            style={{ background: 'linear-gradient(90deg, transparent, #8a6f2e, transparent)' }}
          />
          <p className="font-body text-[#7a6848] text-base">
            Historial y calendario de eventos de la comunidad.
          </p>
        </div>

        {loading && <LoadingState message="Cargando torneos..." />}

        {error && (
          <ErrorState 
            title="Error de carga" 
            message="Error al cargar el listado de torneos. Por favor, intenta recargar la página." 
          />
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tournaments?.map((tournament) => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
