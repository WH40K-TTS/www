import React from 'react'

/**
 * Componente de navegación por pestañas.
 * @param {Array} tabs - Lista de pestañas { id, label, icon }.
 * @param {string} activeTab - ID de la pestaña activa.
 * @param {Function} onChange - Callback al cambiar de pestaña.
 */
export function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex justify-start md:justify-center overflow-x-auto border-b border-[#3a2d10] mb-8 scrollbar-hide">
      {tabs.map(({ id: tabId, label, icon: Icon }) => (
        <button
          key={tabId}
          onClick={() => onChange(tabId)}
          className={[
            'flex items-center gap-2 px-5 py-3 shrink-0',
            'font-heading text-xs tracking-[0.2em] uppercase',
            'transition-all duration-200 relative',
            activeTab === tabId
              ? 'text-[#c9a84c]'
              : 'text-[#5a4920] hover:text-[#8a6f2e]',
          ].join(' ')}
        >
          <Icon size={14} strokeWidth={2} aria-hidden />
          <span className="hidden sm:inline">{label}</span>
          {activeTab === tabId && (
            <span
              className="absolute bottom-0 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
            />
          )}
        </button>
      ))}
    </div>
  )
}