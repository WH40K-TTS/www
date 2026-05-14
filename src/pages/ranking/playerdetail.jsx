import Modal from '../../components/ui/modal'
import Badge from '../../components/ui/badge'
import { formatPosition, formatWL } from '../../utils/formatters'
import { Trophy, TrendingUp } from 'lucide-react'

/**
 * Modal con el historial de torneos de un jugador.
 */
export default function PlayerDetailModal({ player, onClose }) {
  if (!player) return null

  const history = [...(player.tournamentHistory ?? [])].sort((a, b) => {
    if ((a.position ?? 999) !== (b.position ?? 999)) return (a.position ?? 999) - (b.position ?? 999)
    return (a.tournamentName ?? '').localeCompare(b.tournamentName ?? '', 'es')
  })

  return (
    <Modal
      isOpen={!!player}
      onClose={onClose}
      title={`${player.name} - ${player.totalPoints} pts`}
      size="md"
    >
      {/* Stats summary */}
      <div className="grid grid-cols-5 gap-1 md:gap-3 mb-6">
        <div className="rounded-lg border border-slate-700/50 bg-slate-800/40 px-1 md:px-4 py-2 md:py-3 text-center">
          <p className="font-mono font-bold text-lg md:text-2xl text-white">{player.tournamentsPlayed}</p>
          <p className="font-body text-[10px] md:text-xs text-slate-500 mt-0.5">
            <span className="md:hidden">T</span><span className="hidden md:inline">Torneos</span>
          </p>
        </div>
        <div className="rounded-lg border border-[#4a9a4a]/30 bg-[#4a9a4a]/10 px-1 md:px-4 py-2 md:py-3 text-center">
          <p className="font-mono font-bold text-lg md:text-2xl text-[#4a9a4a]">{player.wins}</p>
          <p className="font-body text-[10px] md:text-xs text-slate-500 mt-0.5">
            <span className="md:hidden">V</span><span className="hidden md:inline">Victorias</span>
          </p>
        </div>
        <div className="rounded-lg border border-[#cc4444]/30 bg-[#cc4444]/10 px-1 md:px-4 py-2 md:py-3 text-center">
          <p className="font-mono font-bold text-lg md:text-2xl text-[#cc4444]">{player.losses}</p>
          <p className="font-body text-[10px] md:text-xs text-slate-500 mt-0.5">
            <span className="md:hidden">D</span><span className="hidden md:inline">Derrotas</span>
          </p>
        </div>
        <div className="rounded-lg border border-[#c9a84c]/30 bg-[#c9a84c]/10 px-1 md:px-4 py-2 md:py-3 text-center">
          <p className="font-mono font-bold text-lg md:text-2xl text-[#c9a84c]">{player.ties ?? 0}</p>
          <p className="font-body text-[10px] md:text-xs text-slate-500 mt-0.5">
            <span className="md:hidden">E</span><span className="hidden md:inline">Empates</span>
          </p>
        </div>
        <div className="rounded-lg border border-[#a855f7]/30 bg-[#a855f7]/10 px-1 md:px-4 py-2 md:py-3 text-center">
          <p className="font-mono font-bold text-lg md:text-2xl text-[#a855f7]">{player.abandonos ?? 0}</p>
          <p className="font-body text-[10px] md:text-xs text-slate-500 mt-0.5">
            <span className="md:hidden">A</span><span className="hidden md:inline">Abandonos</span>
          </p>
        </div>
      </div>

      {/* Faction */}
      <div className="flex items-center gap-2 mb-5">
        <span className="font-body text-xs text-slate-500">Faccion principal:</span>
        <Badge variant="gold">{player.faction}</Badge>
      </div>

      {/* Tournament history */}
      <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
        <TrendingUp size={14} className="text-amber-500" />
        Historial de torneos
      </h3>

      {history.length === 0 ? (
        <p className="font-body text-slate-500 text-sm py-4 text-center border border-dashed border-slate-800 rounded-lg">
          Sin historial registrado todavia.
        </p>
      ) : (
        <div className="space-y-2">
          {history.map((entry) => (
            <div
              key={entry.tournamentId}
              className="flex flex-col md:flex-row md:items-center md:justify-between rounded-lg border border-slate-700/50 bg-slate-800/30 px-4 py-3 hover:bg-slate-800/60 transition-colors"
            >
              {/* Tournament Name */}
              <div className="mb-2 md:mb-0">
                <p className="font-display font-medium text-slate-200 text-sm">
                  {entry.tournamentName}
                </p>
                <p className="font-mono text-xs text-slate-500 mt-0.5 hidden md:block">
                  {formatWL(entry.wins, entry.losses)}
                </p>
              </div>

              {/* Stats and Points */}
              <div className="flex items-center justify-between md:justify-end gap-3">
                <div className="flex items-center gap-1.5">
                  <p className="font-mono text-xs text-slate-500 md:hidden">
                    {formatWL(entry.wins, entry.losses)}
                  </p>
                  <div className="flex items-center gap-1.5">
                    {entry.position <= 3 && (
                      <Trophy
                        size={12}
                        className={
                          entry.position === 1
                            ? 'text-amber-400'
                            : entry.position === 2
                              ? 'text-slate-400'
                              : 'text-amber-700'
                        }
                      />
                    )}
                    <span className="font-mono text-xs text-slate-400">
                      {formatPosition(entry.position)}
                    </span>
                  </div>
                </div>

                <span className="font-mono font-semibold text-amber-400 text-sm min-w-[3rem] text-right">
                  +{entry.points}
                  <span className="text-slate-600 font-normal text-xs">pts</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </Modal>
  )
}