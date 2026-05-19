import { useState, useEffect } from 'react'

/**
 * Hook genérico para cargar datos desde archivos JSON utilizando importaciones dinámicas de Vite.
 * @param {Function} loaderFn - Función asíncrona que devuelve el módulo JSON.
 * @returns {{ data: any, loading: boolean, error: string|null }}
 */
export function useJsonData(loaderFn) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        setError(null)
        
        const module = await loaderFn()
        const json = module.default ?? module

        if (!cancelled) setData(json)
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [loaderFn])

  return { data, loading, error }
}

export default useJsonData