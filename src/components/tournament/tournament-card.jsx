import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Users, Route, Split } from 'lucide-react'

const STATUS_LABELS = {
  upcoming: 'Próximamente',
  ongoing: 'En curso',
  finished: 'Finalizado',
}

export function TournamentCard({ tournament }) {
  return (
    <Link
      to={`/tournament/${tournament.id}`}
      className="group border border-[#3a2d10] bg-[#161209] p-5 hover:border-[#6b5420] transition-colors duration-200"
    >
      <h2 className="font-heading text-sm tracking-[0.15em] uppercase text-[#c9a84c] mb-2 group-hover:text-[#e8c96a]">
        {tournament.name}
      </h2>
      <div className="space-y-2 font-body text-sm text-[#7a6848]">
        <p className="flex items-center gap-2">
          <Calendar size={14} className="text-[#8a6f2e]" />
          Inscripciones: {tournament.date} / {tournament.dateEnd}
        </p>
        <p className="flex items-center gap-2">
          <Split size={14} className="text-[#8a6f2e]" />
          {tournament.format}
        </p>
        <p className="flex items-center gap-2">
          <Users size={14} className="text-[#8a6f2e]" />
          {tournament.players ?? '-'} jugadores
        </p>
        <p className="flex items-center gap-2">
          <Route size={14} className="text-[#8a6f2e]" />
          {STATUS_LABELS[tournament.status] ?? 'Sin estado'}
        </p>
      </div>
    </Link>
  )
}