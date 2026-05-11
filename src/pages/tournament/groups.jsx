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
          Presenta tu lista de ejército antes del inicio del torneo. El envío es gestionado por el formulario oficial de la comunidad.
        </p>
      </div>
      <div className="text-center mb-6">
        <p className="font-heading text-[11px] tracking-[0.3em] uppercase text-[#5a4920]">
          Victorias / Derrotas / Empates / Abandonos / Puntos
        </p>
        <p className="text-[10px] uppercase tracking-widest text-[#5a4920] mt-1">
          El triángulo amarillo señala quienes pasan a la siguiente fase
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