/**
 * teamscoring.js — Puntos de batalla (BP) convertidos para enfrentamientos por equipos.
 *
 * Tabla oficial por diferencia de puntos (valor absoluto):
 *   dif 0-5:   10-10
 *   dif 6-10:  11-9
 *   dif 11-15: 12-8
 *   dif 16-20: 13-7
 *   dif 21-25: 14-6
 *   dif 26-30: 15-5
 *   dif 31-35: 16-4
 *   dif 36-40: 17-3
 *   dif 41-45: 18-2
 *   dif 46-50: 19-1
 *   dif 51+:   20-0
 *
 * El valor mayor corresponde siempre al ganador (puntuación más alta).
 * En caso de empate se devuelve 10-10.
 */

/**
 * Devuelve los BP convertidos para un par de puntuaciones.
 * @param {number|string} score1 - Puntuación del jugador 1
 * @param {number|string} score2 - Puntuación del jugador 2
 * @returns {{ bp1: number, bp2: number } | null} BP de cada jugador, o null si alguna puntuación no es numérica
 */
export function getConvertedBP(score1, score2) {
  if (score1 === '' || score1 === null || score1 === undefined) return null
  if (score2 === '' || score2 === null || score2 === undefined) return null
  if (typeof score1 === 'boolean' || typeof score2 === 'boolean') return null

  const n1 = Number(score1)
  const n2 = Number(score2)

  if (!Number.isFinite(n1) || !Number.isFinite(n2)) return null

  const diff = Math.abs(n1 - n2)

  let winnerBP
  let loserBP

  if (diff <= 5) {
    winnerBP = 10
    loserBP = 10
  } else if (diff <= 10) {
    winnerBP = 11
    loserBP = 9
  } else if (diff <= 15) {
    winnerBP = 12
    loserBP = 8
  } else if (diff <= 20) {
    winnerBP = 13
    loserBP = 7
  } else if (diff <= 25) {
    winnerBP = 14
    loserBP = 6
  } else if (diff <= 30) {
    winnerBP = 15
    loserBP = 5
  } else if (diff <= 35) {
    winnerBP = 16
    loserBP = 4
  } else if (diff <= 40) {
    winnerBP = 17
    loserBP = 3
  } else if (diff <= 45) {
    winnerBP = 18
    loserBP = 2
  } else if (diff <= 50) {
    winnerBP = 19
    loserBP = 1
  } else {
    winnerBP = 20
    loserBP = 0
  }

  if (n1 > n2) return { bp1: winnerBP, bp2: loserBP }
  if (n2 > n1) return { bp1: loserBP, bp2: winnerBP }
  return { bp1: 10, bp2: 10 }
}

// Alias de conveniencia con el mismo comportamiento.
export const getTeamBP = getConvertedBP
export const getBP = getConvertedBP

export default getConvertedBP
