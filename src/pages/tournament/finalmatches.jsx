import React from 'react'
import { Layers, Layers2, Trophy, Medal } from 'lucide-react'
import MatchRow from '../../components/tournament/matchrow'

const ROUND_ICONS = {
  'Cuartos de Final': Layers,
  'Semifinales':      Layers2,
  'Final':            Trophy,
  '3er y 4º Puesto':  Medal,
}

export default function FinalMatches({ matches }) {
  if (!matches?.length) return (
    <div className="text-center py-16">
      <p className="font-heading text-[11px] tracking-[0.3em] uppercase text-[#5a4920]">
        La fase final aún no ha comenzado
      </p>
    </div>
  )

  return (
    <div>
      <div className="space-y-5">
        {matches.map((round) => {
          const Icon = ROUND_ICONS[round.round]

          return (
            <div key={round.round} className="w-full lg:w-[60%] lg:mx-auto border border-[#3a2d10] bg-[#161209]">

              {/* Round header */}
              <div
                className={`px-5 py-3 border-b flex items-center gap-3 ${
                  round.round === 'Final'
                    ? 'border-[#6b5420] bg-[#1e1a0d]'
                    : 'border-[#2a2210]'
                }`}
              >
                {Icon && (
                  <Icon
                    size={15}
                    strokeWidth={1.5}
                    className={round.round === 'Final' ? 'text-[#e8c96a]' : 'text-[#c9a84c]'}
                  />
                )}
                <h3
                  className={`font-heading text-sm tracking-[0.15em] uppercase ${
                    round.round === 'Final' ? 'text-[#e8c96a]' : 'text-[#c9a84c]'
                  }`}
                >
                  {round.round}
                </h3>
              </div>

              {/* Matches — horizontal scroll on mobile */}
              <div className="overflow-x-auto">
                <div className="min-w-[360px]">
                  {round.matches?.map((match, i) => (
                    <MatchRow
                      key={i}
                      match={match}
                      isFinal={round.round === 'Final'}
                      isLast={i === round.matches.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
