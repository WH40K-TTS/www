import React from 'react'
import { useRanking } from '../../hooks/useranking'

export default function Ranking() {
  const { players, loading, error } = useRanking()

  const medalColor = (pos) => {
    if (pos === 1) return '#FFD700'
    if (pos === 2) return '#C0C0C0'
    if (pos === 3) return '#CD7F32'
    return null
  }

  return (
    <main className="min-h-screen pt-20 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Page header */}
        <div className="text-center mb-12 pt-8">
          <p className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#5a4920] mb-3">
            ✦ Tabla de Honor ✦
          </p>
          <h1
            className="font-heading text-2xl sm:text-4xl tracking-[0.08em] sm:tracking-[0.15em] uppercase text-[#c9a84c] mb-4"
            style={{ textShadow: '0 0 30px rgba(201,168,76,0.25)' }}
          >
            <span className="sm:hidden">Posiciones</span>
            <span className="hidden sm:inline">Clasificación General</span>
          </h1>
          <div
            className="mx-auto w-48 h-px mb-4"
            style={{ background: 'linear-gradient(90deg, transparent, #8a6f2e, transparent)' }}
          />
          <p className="font-body text-[#7a6848] text-base">
            Los generales más letales de la comunidad.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="border border-[#5c1010] bg-[#1a0c0c] px-5 py-4 text-[#cc4444] font-body text-sm mb-8">
            Error al cargar la clasificación. Comprueba los ficheros de datos.
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="font-heading text-[11px] tracking-[0.3em] uppercase text-[#5a4920] animate-pulse">
              Cargando registros de combate…
            </div>
          </div>
        )}

        {/* Table */}
        {!loading && !error && players && (
          <div className="relative border border-[#3a2d10] bg-[#161209] shadow-[0_8px_40px_rgba(0,0,0,0.7)]">
            {/* Corner ornaments */}
            <span aria-hidden className="pointer-events-none absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#c9a84c]/50" />
            <span aria-hidden className="pointer-events-none absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#c9a84c]/50" />
            <span aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#c9a84c]/50" />
            <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#c9a84c]/50" />

            <div className="overflow-x-auto">
              <table className="w-full">
                <caption className="sr-only">Clasificación general de jugadores</caption>
                <thead>
                  <tr className="border-b-2 border-[#3a2d10]">
                    {['#', 'General', 'Puntos'].map((h, i) => (
                      <th
                        key={h}
                        scope="col"
                        className={`
                          px-5 py-4 font-heading text-[11px] tracking-[0.25em] uppercase
                          text-[#8a6f2e] font-normal whitespace-nowrap
                          ${i === 0 || i === 1 ? 'text-left' : 'text-center'}
                        `}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {players.map((player, idx) => {
                    const pos = idx + 1
                    const mc = medalColor(pos)
                    const isTop = pos <= 3

                    return (
                      <tr
                        key={player.id}
                        className={`
                          border-b border-[#1e1a0d] transition-colors duration-150
                          ${isTop ? 'bg-[#1a1610]' : 'hover:bg-[#1a1610]'}
                        `}
                      >
                        <td className="px-5 py-4 w-12">
                          <span
                            className="font-heading text-sm"
                            style={{ color: mc ?? '#5a4920' }}
                          >
                            {pos <= 3 ? ['①', '②', '③'][pos - 1] : pos}
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <span className={`font-heading text-sm tracking-[0.1em] ${isTop ? 'text-[#f0e6c8]' : 'text-[#c4b48c]'}`}>
                            {player.name}
                          </span>
                          {pos === 1 && (
                            <span className="ml-2 font-heading text-[9px] tracking-[0.2em] uppercase text-[#8a6f2e]">
                              Campeón
                            </span>
                          )}
                        </td>

                        <td className="px-5 py-4 text-center">
                          <span className="inline-block font-heading text-sm font-semibold text-[#c9a84c] px-1">
                            {player.totalPoints}
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {/*
        <p className="font-heading text-[10px] tracking-[0.2em] uppercase text-[#3a2d10] text-center mt-6">
          ✦ Posición, General y Puntos ✦
        </p>
        */}
      </div>
    </main>
  )
}
