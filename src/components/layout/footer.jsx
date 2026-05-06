import React from 'react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-[#3a2d10]">
      {/* Top separator line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

      <div className="bg-[#0d0b08] px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">

          {/* Main footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

            {/* Brand */}
            <div>
              <p className="font-heading text-[10px] tracking-[0.35em] uppercase text-[#5a4920] mb-3">
                ✦ La Comunidad ✦
              </p>
              <h2 className="font-heading text-base tracking-[0.2em] uppercase text-[#c9a84c] mb-3">
                WH40K-TTS
              </h2>
              <p className="font-body text-sm text-[#7a6848] leading-relaxed">
                Torneos de Warhammer 40.000 en Tabletop Simulator.<br />
                Comunidad competitiva digital en español.
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-[#7a6848] hover:text-[#c9a84c] transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.003.022.015.043.033.055a19.814 19.814 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.995a.076.076 0 0 0-.042-.106 13.077 13.077 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.994a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
                Únete al servidor
              </a>
            </div>

            {/* Navigation */}
            <div>
              <p className="font-heading text-[10px] tracking-[0.35em] uppercase text-[#5a4920] mb-3">
                ✦ Navegación ✦
              </p>
              <ul className="space-y-2">
                {[
                  ['/','Inicio'],
                  ['/tournaments','Torneos'],
                  ['/ranking','Clasificación'],
                  ['/rules','Reglamento'],
                ].map(([to, label]) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="font-body text-sm text-[#7a6848] hover:text-[#c9a84c] transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            {/*
            <div>
              <p className="font-heading text-[10px] tracking-[0.35em] uppercase text-[#5a4920] mb-3">
                ✦ Comunidad ✦
              </p>
              
            </div>
            */}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#3a2d10] to-transparent my-6" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            {/*
            <p className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#3a2d10]">
              ✦ In the grim darkness of the far future, there is only war ✦
            </p>
            */}
            <p className="font-body text-xs text-[#3a2d10]">
              WH40K-TTS © {new Date().getFullYear()}
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
