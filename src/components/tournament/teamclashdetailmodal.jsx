import React from 'react'
import Modal from '../ui/modal'
import MatchRow from './matchrow'
import { getConvertedBP } from '../../utils/teamscoring'

function formatScore(value) {
  if (value === '' || value === null || value === undefined) return '–'
  return value
}

export default function TeamClashDetailModal({ isOpen, onClose, clash, detailMatches = [], abandonedPlayers = [] }) {
  const matches = Array.isArray(detailMatches) ? detailMatches : []
  const playedCount = matches.filter((m) => !(m.score1 === '' && m.score2 === '')).length
  const title = clash
    ? `${clash.player1} ${formatScore(clash.score1)} – ${formatScore(clash.score2)} ${clash.player2}`
    : ''
  const subtitle = `${playedCount} de 4 partidas jugadas`

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} subtitle={subtitle}>
      <div className="border border-[#3a2d10] bg-[#161209]">
        <div className="overflow-x-auto">
          <div className="min-w-[360px]">
            {matches.map((match, i) => {
              const bp = getConvertedBP(match.score1, match.score2)
              return (
                <MatchRow
                  key={i}
                  match={match}
                  isLast={i === matches.length - 1}
                  abandonedPlayers={abandonedPlayers}
                  bp1={bp ? bp.bp1 : null}
                  bp2={bp ? bp.bp2 : null}
                />
              )
            })}
          </div>
        </div>
      </div>
    </Modal>
  )
}
