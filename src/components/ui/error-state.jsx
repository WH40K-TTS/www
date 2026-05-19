import React from 'react'

/**
 * Componente de estado de error con estilo consistente.
 * @param {string} title - Título del error.
 * @param {string} message - Mensaje detallado del error.
 */
export function ErrorState({ title = 'Error', message = 'Ha ocurrido un problema al cargar la información.' }) {
  return (
    <div className="flex items-center justify-center py-16 px-4">
      <div className="border border-[#5c1010] bg-[#1a0c0c] px-8 py-6 text-center max-w-md">
        <p className="font-heading text-sm tracking-[0.1em] uppercase text-[#cc4444] mb-2">
          {title}
        </p>
        <p className="font-body text-sm text-[#7a6848]">
          {message}
        </p>
      </div>
    </div>
  )
}