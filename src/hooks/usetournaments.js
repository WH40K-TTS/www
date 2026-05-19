import { useMemo } from 'react'
import { useJsonData } from './useJsonData'

/**
 * Carga el listado general de torneos.
 * @returns {{ tournaments: array|null, loading: boolean, error: string|null }}
 */
export function useTournaments() {
  const loaderFn = useMemo(() => async () => {
    return await import('../data/tournaments/index.json')
  }, [])

  const { data, loading, error } = useJsonData(loaderFn)
  
  // Transformamos el resultado para devolver directamente el array de torneos invertido
  const tournaments = data ? [...(data.tournaments ?? [])].reverse() : null

  return { tournaments, loading, error }
}

export default useTournaments