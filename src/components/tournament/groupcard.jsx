import React from 'react'

export function GroupCard({ group }) {
  const sorted = [...(group.players ?? [])].sort((a, b) => b.points - a.points)

  return (
    <div className="relative border border-[#3a2d10] bg-[#161209] hover:border-[#6b5420] hover:shadow-[0_0_20px_rgba(201,168,76,0.1)] transition-all duration-300 flex flex-col h-full">
      
      {/* Corner ornaments */}
      <span aria-hidden className="pointer-events-none absolute top-0 left-0 w-3 h-3 border-t border-l border-[#c9a84c]/40" />
      <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#c9a84c]/40" />

      {/* Header - Se mantiene fijo arriba */}
      <div className="px-4 py-3 border-b border-[#2a2210] flex items-center justify-between shrink-0">
        <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#c9a84c]">
          {group.name}
        </h3>
      </div>

      {/* Player list - Contenedor con scroll horizontal */}
      <div className="overflow-x-auto custom-scrollbar">
        <div className="min-w-max"> 
          {/* min-w-max asegura que las filas no se encojan y fuercen el scroll si el nombre es largo */}
            {sorted.map((player, idx) => {
              const isFirst = idx === 0
              const isLast = idx === sorted.length - 1
              const isLastThree = idx >= sorted.length - 3
              return (
               <div
                 key={player.name}
                 className={`
                   flex items-center justify-between px-4 py-2.5 gap-4
                   ${!isLast ? 'border-b border-[#1e1a0d]' : ''}
                   transition-colors hover:bg-[#1a1610]
                 `}
               >
                {/* Lado Izquierdo: Posición y Nombre */}
                <div className="flex items-center gap-2">
                  <span
                    className="font-heading text-[10px] w-5 shrink-0 text-center"
                    style={{ color: idx < 1 ? '#c9a84c' : '#3a2d10' }}
                  >
                    {/* Símbolo de pasar fase. El número hace referencia al número de filas que pasan fase. */}
                    {idx < 1 ? '▲' : idx + 1}
                  </span>
                  <span className={`font-body text-sm whitespace-nowrap uppercase ${idx < 1 ? 'text-[#e8c96a]' : (isLastThree ? 'text-[#8a6f2e]' : 'text-[#8a6f2e]')}`}>
                    {player.name}
                  </span>
                </div>

                {/* Lado Derecho: Stats alineadas */}
                <div className="flex items-center gap-1 shrink-0">
                  <div className="flex items-center font-heading text-[10px] tracking-[0.1em]">
                    <span className="text-[#4a9a4a] w-7 text-right">{player.wins}V</span>
                    <span className="text-[#cc4444] w-7 text-right">{player.losses}D</span>
                    <span className="text-[#c9a84c] w-7 text-right">{player.ties ?? 0}E</span>
                    <span className="text-[#a855f7] w-7 text-right">{player.abandonos ?? 0}A</span>
                  </div>
                  <span
                    className={`
                      font-heading text-sm ml-3 w-6 text-right
                      ${idx < 2 ? 'text-[#e8c96a]' : 'text-[#8a6f2e]'}
                    `}
                  >
                    {player.points}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default GroupCard