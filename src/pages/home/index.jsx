import React from 'react'
import { Link } from 'react-router-dom'
import { Trophy, BookOpen, Users, ListOrdered } from 'lucide-react'

const DISCORD_URL = 'https://discord.gg/4uHrQp2ckW'

const features = [
  {
    icon: Trophy,
    title: 'Torneos',
    desc: 'Compite en torneos regulares con sistema de grupos y fase eliminatoria. Cada victoria te acerca al trono.',
    to: '/tournaments',
    cta: 'Ver Torneos',
  },
  {
    icon: ListOrdered,
    title: 'Clasificación',
    desc: 'Alcanza lo más alto en la clasficación general. El balance de todas las competiciones llevadas a cabo a lo largo de la temporada.',
    to: '/ranking',
    cta: 'Ver Clasificación',
  },
  {
    icon: BookOpen,
    title: 'Reglamento',
    desc: 'Reglas claras para torneos individuales y por equipos. Formato oficial de la comunidad sobre TTS.',
    to: '/rules',
    cta: 'Leer reglamento',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* --- Hero --- */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse 100% 80% at 50% 30%, #1e1508 0%, #0d0b08 55%), #0d0b08',
        }}
      >
        {/* Subtle vignette rings */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(139,26,26,0.07) 0%, transparent 60%)',
          }}
        />

        {/* Horizontal scan line decoration */}
        {/*
        <div
          aria-hidden
          className="absolute top-1/2 left-0 right-0 h-px -translate-y-32 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.08), transparent)' }}
        />
        */}

        {/* Eyebrow */}
        <p
          className="font-heading text-xs tracking-[0.45em] uppercase text-[#8a6f2e] mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          En el lejano futuro, solo hay guerra
        </p>

        {/* Main title */}
        {/*
        <h1
          className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl text-[#c9a84c] leading-none mb-4 opacity-0 animate-fade-in-up"
          style={{
            animationDelay: '0.25s',
            animationFillMode: 'forwards',
            textShadow: '0 0 40px rgba(201,168,76,0.35), 0 0 80px rgba(201,168,76,0.15)',
          }}
        >
          WH40K-TTS
        </h1>
        */}
        <h1
          className="font-display font-bold leading-[1.05] mb-4 opacity-0 animate-fade-in-up"
          style={{
            animationDelay: '0.25s',
            animationFillMode: 'forwards',
          }}
        >
          {/* Line 1 */}
          <span
            className="block text-2xl sm:text-3xl lg:text-4xl tracking-[0.04em] text-[#c9a84c]"
            style={{ textShadow: '0 0 40px rgba(201,168,76,0.55), 0 0 80px rgba(201,168,76,0.25)' }}>
            Forja tu
          </span>
          <span
              className="text-2xl sm:text-3xl lg:text-4xl tracking-[0.04em] text-[#8b1a1a]"
              style={{ textShadow: '0 0 40px rgba(139,26,26,0.5' }}>
              {' '}legado
          </span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl tracking-[0.04em]">
            {/* Line 2 */}
            <span
              className="text-[#c9a84c]"
              style={{ textShadow: '0 0 40px rgba(201,168,76,0.55), 0 0 80px rgba(201,168,76,0.25)' }}>
              {' '}en el tablero
            </span>
          </span>
        </h1>

        {/* Gold horizontal rule */}
        <div
          className="w-1/2 mx-auto sm:w-80 h-px mb-5 opacity-0 animate-fade-in"
          style={{
            animationDelay: '0.4s',
            animationFillMode: 'forwards',
            background: 'linear-gradient(90deg, transparent, #8a6f2e, #c9a84c, #8a6f2e, transparent)',
          }}
        />

        {/* Subtitle */}
        <p
          className="font-heading text-xs sm:text-sm tracking-[0.35em] uppercase text-[#8b1a1a] mb-3 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.45s', animationFillMode: 'forwards', textShadow: '0 0 12px rgba(139,26,26,0.5)' }}
        >
          Torneos de Warhammer 40.000 · Tabletop Simulator
        </p>

        {/* Tagline */}
        <p
          className="font-heading text-[11px] tracking-[0.3em] uppercase text-[#5a4920] mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          ✦ Comunidad Competitiva Digital ✦
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.75s', animationFillMode: 'forwards' }}
        >
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-md inline-flex items-center gap-3 px-8 py-3.5
              bg-[#2d3571] border border-[#4a5299]/70 text-[#c8cfff]
              font-heading text-xs tracking-[0.25em] uppercase
              hover:bg-[#363f85] hover:border-[#6a74cc] hover:shadow-[0_0_20px_rgba(70,82,180,0.4)]
              transition-all duration-300
            "
          >
            <svg viewBox="4 4 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M23.6361 9.33998C22.212 8.71399 20.6892 8.25903 19.0973 8C18.9018 8.33209 18.6734 8.77875 18.5159 9.13408C16.8236 8.89498 15.1469 8.89498 13.4857 9.13408C13.3283 8.77875 13.0946 8.33209 12.8974 8C11.3037 8.25903 9.77927 8.71565 8.35518 9.3433C5.48276 13.4213 4.70409 17.3981 5.09342 21.3184C6.99856 22.6551 8.84487 23.467 10.66 23.9983C11.1082 23.4189 11.5079 22.8029 11.8523 22.1536C11.1964 21.9195 10.5683 21.6306 9.9748 21.2951C10.1323 21.1856 10.2863 21.071 10.4351 20.9531C14.0551 22.5438 17.9881 22.5438 21.5649 20.9531C21.7154 21.071 21.8694 21.1856 22.0251 21.2951C21.4299 21.6322 20.8 21.9211 20.1442 22.1553C20.4885 22.8029 20.8865 23.4205 21.3364 24C23.1533 23.4687 25.0013 22.6567 26.9065 21.3184C27.3633 16.7738 26.1261 12.8335 23.6361 9.33998ZM12.3454 18.9075C11.2587 18.9075 10.3676 17.9543 10.3676 16.7937C10.3676 15.6331 11.2397 14.6783 12.3454 14.6783C13.4511 14.6783 14.3422 15.6314 14.3232 16.7937C14.325 17.9543 13.4511 18.9075 12.3454 18.9075ZM19.6545 18.9075C18.5678 18.9075 17.6767 17.9543 17.6767 16.7937C17.6767 15.6331 18.5488 14.6783 19.6545 14.6783C20.7602 14.6783 21.6514 15.6314 21.6323 16.7937C21.6323 17.9543 20.7602 18.9075 19.6545 18.9075Z"/>
              {/*
              "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.003.022.015.043.033.055a19.814 19.814 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.995a.076.076 0 0 0-.042-.106 13.077 13.077 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.994a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"*/} 
            </svg>
            Únete
          </a>
          {/*
          <Link
            to="/ranking"
            className="
              inline-flex items-center gap-3 px-8 py-3.5
              bg-transparent border border-[#8a6f2e] text-[#c9a84c]
              font-heading text-xs tracking-[0.25em] uppercase
              hover:border-[#c9a84c] hover:bg-[#1e1a0d] hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]
              transition-all duration-300
            "
          >
            Ver Clasificación
          </Link>
          */}
        </div>

        {/* Bottom decoration */}
        <div
          className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
        >
          {/*
          <div className="flex flex-col items-center gap-1">
            <span className="font-heading text-[9px] tracking-[0.4em] uppercase text-[#3a2d10]">
              Desplaza
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-[#3a2d10] to-transparent" />
          </div>
          */}
        </div>
      </section>

      {/* --- Features --- */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            {/*
            <p className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#5a4920] mb-3">
              ✦ La Liga ✦
            </p>
            */}
            <h2 className="font-heading text-2xl sm:text-3xl tracking-[0.15em] uppercase text-[#c9a84c] mb-4">
              La Arena de Batalla
            </h2>
            <div
              className="mx-auto w-48 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, #8a6f2e, transparent)' }}
            />
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc, to, href, cta }, i) => {
              return (
                <article
                  key={title}
                  className="
                    group relative border border-[#3a2d10] bg-[#161209]
                    p-6 hover:border-[#6b5420]
                    hover:shadow-[0_0_24px_rgba(201,168,76,0.12)]
                    hover:-translate-y-1 transition-all duration-300
                    opacity-0 animate-fade-in-up
                  "
                  style={{ animationDelay: `${0.1 + i * 0.15}s`, animationFillMode: 'forwards' }}
                >
                  {/* Corner ornaments */}
                  <span aria-hidden className="pointer-events-none absolute top-0 left-0 w-3 h-3 border-t border-l border-[#c9a84c]/40 group-hover:border-[#c9a84c]/70 transition-colors" />
                  <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#c9a84c]/40 group-hover:border-[#c9a84c]/70 transition-colors" />

                  <div className="text-[#8a6f2e] group-hover:text-[#c9a84c] transition-colors duration-300 mb-4">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-sm tracking-[0.2em] uppercase text-[#c9a84c] mb-3">
                    {title}
                  </h3>
                  <p className="font-body text-[#7a6848] text-base leading-relaxed mb-5">
                    {desc}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-[11px] tracking-[0.2em] uppercase text-[#5a4920] hover:text-[#c9a84c] transition-colors duration-200 inline-flex items-center gap-1 after:absolute after:inset-0"
                    >
                      {cta} →
                    </a>
                  ) : (
                    <Link
                      to={to}
                      className="font-heading text-[11px] tracking-[0.2em] uppercase text-[#5a4920] hover:text-[#c9a84c] transition-colors duration-200 inline-flex items-center gap-1 after:absolute after:inset-0"
                    >
                      {cta} →
                    </Link>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- Lore Banner --- */}
      {/*
      <section
        className="py-20 px-4 sm:px-6 text-center border-y border-[#3a2d10]"
        style={{ background: 'linear-gradient(180deg, #0d0b08 0%, #161209 50%, #0d0b08 100%)' }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="h-px mb-8" style={{ background: 'linear-gradient(90deg, transparent, #6b5420, transparent)' }} />
          <p
            className="font-display text-xl sm:text-2xl text-[#c9a84c]/70 leading-relaxed italic"
            style={{ textShadow: '0 0 20px rgba(201,168,76,0.15)' }}
          >
            "Para ser un guerrero del Imperium es vivir con la muerte, conocer que cada nuevo amanecer puede ser el último."
          </p>
          <p className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#5a4920] mt-4">
            — Codex Astartes
          </p>
          <div className="h-px mt-8" style={{ background: 'linear-gradient(90deg, transparent, #6b5420, transparent)' }} />
        </div>
      </section>
      */}
    </main>
  )
}
