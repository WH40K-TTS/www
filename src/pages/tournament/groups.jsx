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
    <>
       <div className="mb-8 mx-auto lg:w-[60%] text-center">
         <p className="font-body text-[#7a6848] text-sm md:text-base leading-relaxed">
           <span style={{ color: '#4a9a4a' }}>Victorias</span> (3 Pts), <span style={{ color: '#cc4444' }}>Derrotas</span> (0 Pts), <span style={{ color: '#c9a84c' }}>Empates</span> (1 Pts), <span style={{ color: '#a855f7' }}>Abandonos</span> (0 Pts) y <strong>puntos totales</strong>.
         </p>
         <p className="font-body text-[#7a6848] text-sm md:text-base leading-relaxed mt-1">
           Se señala con un triángulo amarillo <span style={{ color: '#c9a84c' }}>▲</span> los jugadores que pasan a la siguiente fase.
         </p>
       </div>

       {/* Grid Responsivo: 1 col en móvil, 2 en tablet, 3 en desktop */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
         {groups.map((group, i) => (
           <div key={i} className="w-full">
             <GroupCard group={group} />
           </div>
         ))}
       </div>
    </>
  )
}