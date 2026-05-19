import { useMemo } from 'react'
import { useJsonData } from './useJsonData'

const TOURNAMENT_LOADERS = import.meta.glob('../data/tournaments/[0-9]*.json')

/**
 * Carga los datos de un torneo por su ID desde /src/data/tournaments/{id}.json.
 * @param {string} id - ID del torneo (ej. "001")
 * @returns {{ tournament: object|null, loading: boolean, error: string|null }}
 */
export function useTournament(id) {
  const loaderFn = useMemo(() => async () => {
    if (!id) throw new Error('ID de torneo no proporcionado')
    
    const key = `../data/tournaments/${id}.json`
    const loader = TOURNAMENT_LOADERS[key]

    if (!loader) {
      throw new Error(`Torneo "${id}" no encontrado en src/data/tournaments`)
    }

    return await loader()
  }, [id])

  const { data: tournament, loading, error } = useJsonData(loaderFn)

  return { tournament, loading, error }
}

export default useTournament
