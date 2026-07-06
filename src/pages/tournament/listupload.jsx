import React from 'react'
import { ExternalLink, Skull, X, Sword, Shrink, Eye } from 'lucide-react'

const fuerzaIcons = {
  "Take and Hold": <Skull size={20} />,
  "Disruption": <X size={20} />,
  "Purge the Foe": <Sword size={20} style={{ transform: 'rotate(225deg)' }} />,
  "Priority Assets": <Shrink size={20} />,
  "Reconnaissance": <Eye size={20} />,
};

export default function ListUpload({ tournament }) {
  if (tournament?.status === 'upcoming') {
    return (
      <div className="max-w-2xl mx-auto text-center py-12 font-body text-[#7a6848]">
        La inscripción al torneo se abrirá próximamente.
      </div>
    )
  }

  const config = tournament?.listUploadConfig

  if (!config) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12 font-body text-[#7a6848]">
        No hay configuración de listas disponible para este torneo.
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Render Form State */}
      {(config.state === 'form_individual' || config.state === 'form_teams') && (
        <div className="mb-8">
          <p className="font-body text-[#7a6848] text-base leading-relaxed mb-6">
            {config.form?.text}
          </p>
          <div className="relative border border-[#3a2d10] bg-[#161209]">
            <span aria-hidden className="pointer-events-none absolute top-0 left-0 w-3 h-3 border-t border-l border-[#c9a84c]/50" />
            <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#c9a84c]/50" />
            <iframe
              src={
                config.state === 'form_individual' 
                  ? config.form?.tallyUrlIndividual 
                  : config.state === 'form_teams' 
                    ? config.form?.tallyUrlTeams 
                    : undefined
              }
              width="100%"
              height="550"
              title={config.form?.title}
              className="block"
              style={{ border: 'none', background: 'transparent' }}
            />
          </div>
        </div>
      )}

      {/* Render Individual Lists State */}
{config.state === 'lists_individual' && (
  <div className="mt-12 overflow-x-auto border border-[#3a2d10] bg-[#161209]">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-[#3a2d10] bg-[#1e1a0d]">
          <th className="px-4 py-3 font-heading text-xs tracking-[0.1em] uppercase text-[#c9a84c]">
            Jugador
          </th>
          <th className="px-4 py-3 font-heading text-xs tracking-[0.1em] uppercase text-[#c9a84c] text-center">
            Fuerza
          </th>
          <th className="px-4 py-3 font-heading text-xs tracking-[0.1em] uppercase text-[#c9a84c] text-center">
            Lista
          </th>
        </tr>
      </thead>
      <tbody className="font-body uppercase text-sm text-[#7a6848]">
        {(config.lists?.individual || []).map((player, idx) => (
          <tr key={idx} className="border-b border-[#3a2d10]/50 last:border-none hover:bg-[#1e1a0d]/50 transition-colors">
            <td className="px-4 py-3">{player.name}</td>
            <td className="px-4 py-3 text-center">
              <span title={player.fuerza} className="inline-flex items-center justify-center">
                {fuerzaIcons[player.fuerza] || player.fuerza}
              </span>
            </td>
            <td className="px-4 py-3 text-center">
              <a 
                href={player.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center p-2 text-[#c9a84c] hover:text-white transition-colors"
                title="Ver lista de ejército"
              >
                <ExternalLink size={16} />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

      {/* Render Team Lists State */}
      {config.state === 'lists_teams' && (
        <div className="mt-12 space-y-6">
          {(config.lists?.teams || []).map((team, teamIdx) => (
            <div key={teamIdx} className="overflow-x-auto border border-[#3a2d10] bg-[#161209]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#2a2414] border-b border-[#3a2d10]">
                    <th colSpan="2" className="px-4 py-2 font-heading text-center text-xs tracking-[0.2em] uppercase text-[#c9a84c]">
                      {team.teamName}
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm text-[#7a6848]">
                  {(team.players || []).map((player, playerIdx) => (
                    <tr key={`t${teamIdx}-p${playerIdx}`} className="border-b border-[#3a2d10]/50 last:border-none hover:bg-[#1e1a0d]/50 transition-colors">
                      <td className="px-4 py-3 uppercase">{player.name}</td>
                      <td className="px-4 py-3 text-center">
                        <a href={player.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-2 text-[#c9a84c] hover:text-white transition-colors">
                          <ExternalLink size={16} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
