import React from 'react'

/**
 * Componente de estado de carga con estilo consistente.
 * @param {string} message - Mensaje a mostrar durante la carga.
 */
export function LoadingState({ message = 'Cargando...' }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="font-heading text-[11px] tracking-[0.3em] uppercase text-[#5a4920] animate-pulse text-center">
        {message}
      </p>
    </div>
  )
}