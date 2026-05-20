import RuleSection from './rulesection'
import { useRules } from '../../hooks/userules'

export default function IndividualRules() {
  const { sections, loading, error } = useRules('individual')

  if (loading) {
    return (
      <div className="font-heading text-[11px] tracking-[0.3em] uppercase text-[#5a4920] animate-pulse py-8 text-center">
        Cargando reglamento...
      </div>
    )
  }

  if (error) {
    return (
      <div className="border border-[#5c1010] bg-[#1a0c0c] px-5 py-4 text-[#cc4444] font-body text-sm">
        Error al cargar las reglas individuales.
      </div>
    )
  }

  return (
    <div>
      {sections.map((section, i) => (
        <RuleSection key={i} section={section} index={i} />
      ))}
    </div>
  )
}
