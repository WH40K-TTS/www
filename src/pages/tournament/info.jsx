import React from 'react'
import ReactMarkdown from 'react-markdown'

// ─── Markdown content ────────────────────────────────────────────────────────
// Edita este texto para personalizar la información de cada torneo.
// Admite: **negrita**, *cursiva*, [enlace](url), ## encabezados, listas, etc.
const TORNEO_INFO = `
## Descripción
**26 - I2** es el último torneo individual de 10ª edición. Partidas competitivas a **2.000 puntos** utilizando las misiones
del [Chapter Approved Tournament Companion](https://assets.warhammer-community.com/eng_07-01_warhammer_40000_core_rules_chapter_approved_tournament-companion-sqc1af88bj-vzxhp9xmid.pdf) y la escenografía oficial de Games Workshop.

## Fechas y recursos
- **Inscripciones**: 13/04/2026 - 19/04/2026  
- **Rondas clasificatorias**: 20/04/2026 - 18/05/2026  
- **Fase final**: 19/05/2026 - 07/06/2026

Cada jugador dispone de **una semana por ronda** para acordar y disputar su partida con el rival asignado.

### Recursos
- 📋 **Listas de ejército** — publicadas al inicio de la fase clasificatoria en la pestaña *Subir Lista*.
- 🎲 **Mesa para las partidas** - [*aquí*](https://steamcommunity.com/sharedfiles/filedetails/?id=3398190636)

## Estructura del torneo
El torneo se divide en **dos fases**:

### Fase clasificatoria — 4 rondas
- Los **20 jugadores** se reparten en **4 grupos de 5**.
- Cada jugador se enfrenta a todos los rivales de su grupo *(sistema todos contra todos)*.
- Puntuación: **3 pts** victoria, **1 pts** por empate y **0 pts** por derrota.
- Clasifican los **2 primeros de cada grupo** para la fase final (*8 jugadores clasificados*).

### Fase final — eliminación directa
- Cuartos de final → Semifinales → 3.º y 4.º puesto → Final.

---

### Rondas clasificatorias
- Ronda 1: Take and Hold / Tipping Point \[A\]
- Ronda 2: Linchpin / Search and Destroy \[J\]  
- Ronda 3: Purge the Foe / Crucible of Battle \[M\]  
- Ronda 4: Take and Hold / Search and Destroy \[L\]  
- Ronda 5: Linchpin / Tipping Point \[C\]  

### Fase final
* Cuartos: Take and Hold / Hammer and Anvil \[E\]  
* Semifinales: Scorched Earth / Tipping Point \[D\]  
* Final: Hidden Supplies / Crucible of Battle \[N\]  

`

// ─── Markdown component map ───────────────────────────────────────────────────
const mdComponents = {
  // Párrafos
  p: ({ children }) => (
    <p className="font-body text-base text-[#c4b48c] leading-relaxed mb-4">{children}</p>
  ),
  // Encabezados
  h2: ({ children }) => (
    <h2 className="font-heading text-sm tracking-[0.2em] uppercase text-[#c9a84c] mt-8 mb-3 pb-2 border-b border-[#2a2210]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-heading text-xs tracking-[0.15em] uppercase text-[#8a6f2e] mt-5 mb-2">
      {children}
    </h3>
  ),
  // Negrita / cursiva
  strong: ({ children }) => (
    <strong className="font-semibold text-[#e8c96a]">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-[#c4b48c]">{children}</em>
  ),
  // Enlace
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#c9a84c] underline underline-offset-2 hover:text-[#e8c96a] transition-colors duration-150"
    >
      {children}
    </a>
  ),
  // Listas
  ul: ({ children }) => (
    <ul className="space-y-1.5 mb-4 ml-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="space-y-1.5 mb-4 ml-1 list-decimal list-inside">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="flex gap-2 font-body text-base text-[#c4b48c] leading-relaxed">
      <span aria-hidden className="font-heading text-[10px] text-[#5a4920] mt-1 shrink-0">✦</span>
      <span>{children}</span>
    </li>
  ),
  // Separador horizontal
  hr: () => (
    <div
      className="my-6"
      style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #3a2d10, transparent)' }}
    />
  ),
  // Tabla
  table: ({ children }) => (
    <div className="overflow-x-auto mb-4 -mx-1">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b border-[#3a2d10]">{children}</thead>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr className="border-b border-[#1e1a0d] hover:bg-[#1a1610] transition-colors">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="px-3 py-2 font-heading text-[10px] tracking-[0.2em] uppercase text-[#8a6f2e] font-normal text-left whitespace-nowrap">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-3 py-2 font-body text-sm text-[#c4b48c]">{children}</td>
  ),
  // Bloque de código (por si acaso)
  code: ({ children }) => (
    <code className="font-mono text-xs bg-[#1e1a0d] text-[#c9a84c] px-1.5 py-0.5 rounded border border-[#3a2d10]">
      {children}
    </code>
  ),
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function TournamentInfo({ tournament }) {
  return (
    <div className="w-full flex justify-center px-0 sm:px-4">
      <div className="w-full max-w-2xl">

        {/* Card container */}
        <div className="relative border border-[#3a2d10] bg-[#161209] shadow-[0_8px_32px_rgba(0,0,0,0.6)]">

          {/* Markdown body */}
          <div className="px-6 py-6">
            <ReactMarkdown components={mdComponents}>
              {(tournament?.infoMd ?? TORNEO_INFO).trim()}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}
