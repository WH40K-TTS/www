import React from 'react'
import GroupCard from '../../components/tournament/groupcard'

export default function Groups({ groups }) {
  if (!groups?.length) return (
    <div className="text-center py-16">
      <p className="font-heading text-[11px] tracking-[0.3em] uppercase text-[#5a4920]">
        Los grupos aún no han sido asignados
      </p>
    </div>
  )

  return (
    <div>
      <div className="mb-8">
        <p className="font-body text-[#7a6848] text-base leading-relaxed">
          Leyenda: <span style={{ color: '#4a9a4a' }}>Victorias</span>, <span style={{ color: '#cc4444' }}>Derrotas</span>, <span style={{ color: '#c9a84c' }}>Empates</span>, <span style={{ color: '#a855f7' }}>Abandonos</span> y Puntos. Se señala con un triángulo amarillo los jugadores que pasan a la siguiente fase.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5 pb-4">
        {groups.map((group, i) => (
          <div key={i} className="w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.67rem)] max-w-[400px]">
            <GroupCard group={group} />
          </div>
        ))}
      </div>
    </div>
  )
}