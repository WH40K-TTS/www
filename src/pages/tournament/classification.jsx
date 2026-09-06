import React from 'react'
import { Trophy } from 'lucide-react'
import GroupCard from '../../components/tournament/groupcard'

export default function Classification({ groups }) {
  if (!groups?.length) return (
    <div className="text-center py-16">
      <p className="font-heading text-[11px] tracking-[0.3em] uppercase text-[#5a4920]">
        La clasificación aún no está disponible
      </p>
    </div>
  )

  return (
    <>
      <div className="mb-8 mx-auto max-w-2xl text-center">
        <p className="font-body text-[#7a6848] text-sm md:text-base leading-relaxed">
          <span style={{ color: '#4a9a4a' }}>Victorias</span> (3 Pts), <span style={{ color: '#c9a84c' }}>Empates</span> (1 Pt, diferencia de 4 pts o menos), <span style={{ color: '#cc4444' }}>Derrotas</span> (0 Pts), <span style={{ color: '#a855f7' }}>Abandonos</span> (0 Pts) y <strong>puntos totales</strong>.
        </p>
      </div>

      {/* Tabla única centrada para formato por equipos */}
      <div className="max-w-2xl mx-auto pb-10 space-y-6">
        {groups.map((group, i) => (
          <div
            key={group.name ?? i}
            className="relative border border-[#c9a84c]/60 shadow-[0_0_24px_rgba(201,168,76,0.15)]"
          >
            <div className="flex items-center justify-center gap-2 px-4 py-2 border-b border-[#c9a84c]/30 bg-[#1a1508]">
              <Trophy size={14} strokeWidth={2} className="text-[#c9a84c]" aria-hidden />
              <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#c9a84c]">
                Clasificación
              </span>
            </div>
            <GroupCard group={group} leaderMark="1º" />
          </div>
        ))}
      </div>
    </>
  )
}
