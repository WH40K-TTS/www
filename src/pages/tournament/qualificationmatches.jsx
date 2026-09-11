import React, { useState } from 'react'
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react'
import MatchRow from '../../components/tournament/matchrow'
import TeamClashDetailModal from '../../components/tournament/teamclashdetailmodal'

const ROUND_ICONS = {
  '1': Dice1,
  '2': Dice2,
  '3': Dice3,
  '4': Dice4,
  '5': Dice5,
  '6': Dice6,
}

function getClashDetails(finalMatches, roundNumber, clashIndex) {
  if (!Array.isArray(finalMatches)) return []
  const roundData = finalMatches.find((r) => r.round === `Ronda ${roundNumber}`)
  if (!roundData || !Array.isArray(roundData.matches)) return []
  return roundData.matches.slice(4 * clashIndex, 4 * clashIndex + 4)
}

function hasDetailData(detailMatches) {
  if (!Array.isArray(detailMatches) || detailMatches.length === 0) return false
  return detailMatches.some(
    (m) => (m.player1 && m.player1 !== '') || (m.player2 && m.player2 !== '')
  )
}

export default function QualificationMatches({ matches, groups, finalMatches, isTeams = false }) {
  const [selected, setSelected] = useState(null)
  const isTeamsMode = isTeams && Array.isArray(finalMatches)
  const abandonedPlayers = groups?.flatMap(g => g.players).filter(p => p.abandoned).map(p => p.name) || [];

  if (!matches?.length) return (
    <div className="text-center py-16">
      <p className="font-heading text-[11px] tracking-[0.3em] uppercase text-[#5a4920]">
        Los encuentros de clasificación aún no están disponibles
      </p>
    </div>
  )

  return (
    <div>
      {/*
      <div className="flex items-center gap-3 mb-8">
        <p className="font-heading text-[10px] tracking-[0.35em] uppercase text-[#5a4920] shrink-0">
          ✦ Fase de Clasificación ✦
        </p>
        <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #3a2d10, transparent)' }} />
      </div>
      */}

      {isTeamsMode && (
        <p className="text-center font-body text-sm text-[#7a6848] mb-6">
          Pulsa un enfrentamiento para ver sus 4 partidas
        </p>
      )}

      <div className="space-y-5">
        {matches.map((round) => (
          <div key={round.round} className="w-full lg:w-[60%] lg:mx-auto border border-[#3a2d10] bg-[#161209]">

            {/* Round header */}
            <div className="px-5 py-3 border-b flex items-center gap-3 border-[#2a2210]">
              {(() => {
                const Icon = ROUND_ICONS[String(round.round)];
                return Icon ? <Icon size={15} strokeWidth={1.5} className="text-[#c9a84c]" /> : null;
              })()}
              <h3 className="font-heading text-sm tracking-[0.15em] uppercase text-[#c9a84c]">
                Ronda {round.round}
              </h3>
            </div>

            {/* Matches — horizontal scroll on mobile */}
            <div className="border-t border-[#2a2210] overflow-x-auto">
              <div className="min-w-[360px]">
                {round.matches?.map((match, i) => {
                  const detailMatches = isTeamsMode ? getClashDetails(finalMatches, round.round, i) : []
                  const clickable = isTeamsMode && hasDetailData(detailMatches)
                  const playedCount = Array.isArray(detailMatches)
                    ? detailMatches.filter((m) => !(m.score1 === '' && m.score2 === '')).length
                    : 0
                  const pending = !match.winner && playedCount > 0 && playedCount < 4
                  if (!clickable) {
                    return (
                      <MatchRow
                        key={i}
                        match={match}
                        isLast={i === round.matches.length - 1}
                        abandonedPlayers={abandonedPlayers}
                        pending={pending}
                      />
                    );
                  }
                  return (
                    <div
                      key={i}
                      role="button"
                      tabIndex={0}
                      aria-label={`Ver detalle de ${match.player1} contra ${match.player2}`}
                      className="cursor-pointer"
                      onClick={() => setSelected({ clash: match, detailMatches })}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          setSelected({ clash: match, detailMatches })
                        }
                      }}
                    >
                      <MatchRow
                        match={match}
                        isLast={i === round.matches.length - 1}
                        abandonedPlayers={abandonedPlayers}
                        pending={pending}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {isTeamsMode && (
        <TeamClashDetailModal
          isOpen={!!selected}
          onClose={() => setSelected(null)}
          clash={selected?.clash}
          detailMatches={selected?.detailMatches ?? []}
          abandonedPlayers={abandonedPlayers}
        />
      )}
    </div>
  )
}
