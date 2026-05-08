import React from 'react'
import MatchRow from '../../components/tournament/matchrow'

export default function QualificationMatches({ matches }) {
  if (!matches?.length) return (
    <div className="text-center py-16">
      <p className="font-heading text-[11px] tracking-[0.3em] uppercase text-[#5a4920]">
        Los encuentros de clasificacion aun no estan disponibles
      </p>
    </div>
  )

  return (
    <div>
      {/*
      <div className="flex items-center gap-3 mb-8">
        <p className="font-heading text-[10px] tracking-[0.35em] uppercase text-[#5a4920] shrink-0">
          Fase de Clasificacion
        </p>
        <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #3a2d10, transparent)' }} />
      </div>
      */}

      <div className="space-y-5">
        {matches.map((round) => (
          <div key={round.round} className="w-full lg:w-[60%] lg:mx-auto border border-[#3a2d10] bg-[#161209]">
            {/* Round header */}
            <div className="px-5 py-3 border-b border-[#2a2210] flex items-center gap-3">
              <h3 className="font-heading text-sm tracking-[0.15em] uppercase text-[#c9a84c]">
                Ronda {round.round}
              </h3>
              {/*
              <span className="font-body text-xs text-[#5a4920]">
                {round.matches?.length ?? 0} partidas
              </span>
              */}
            </div>

            {/* Matches */}
            <div>
              {round.matches?.map((match, i) => (
                <MatchRow
                  key={i}
                  match={match}
                  isLast={i === round.matches.length - 1}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
