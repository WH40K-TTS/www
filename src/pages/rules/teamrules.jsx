import { useEffect, useState } from 'react'
import RuleSection from './rulesection'

export default function TeamRules() {
  const [data, setData]       = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    import('../../data/rules/teams.json').then(m => {
      setData(m.default)
      setLoading(false)
    })
  }, [])

  if (loading) return null
  if (!data)   return <p className="text-slate-500 font-body">Error cargando las reglas.</p>

  return (
    <div className="animate-fade-in">
      <div className="space-y-6">
        {data.sections.map((section, idx) => (
          <RuleSection key={idx} section={section} index={idx} />
        ))}
      </div>
    </div>
  )
}