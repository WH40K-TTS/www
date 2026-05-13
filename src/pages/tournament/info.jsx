import React from 'react'
import ReactMarkdown from 'react-markdown'

// ─── Markdown content ────────────────────────────────────────────────────────
// Edita este texto para personalizar la información de cada torneo.
// Admite: **negrita**, *cursiva*, [enlace](url), ## encabezados, listas, etc.
const TORNEO_INFO = `
## Descripción

**26 - I2** es el segundo torneo individual de la temporada, un torneo de Warhammer 40.000 décima edición
jugado íntegramente en Tabletop Simulator. Partidas competitivas a **2.000 puntos** utilizando las misiones
del [Chapter Approved Tournament Companion](https://www.warhammer-community.com/) y la escenografía oficial de Games Workshop.

---

## Fechas relevantes

| Fase | Inicio | Fin |
|---|---|---|
| Inscripciones | 13/04/2026 | 19/04/2026 |
| Rondas clasificatorias | 20/04/2026 | 18/05/2026 |
| Fase final | 19/05/2026 | 07/06/2026 |

Cada jugador dispone de **una semana por ronda** para acordar y disputar su partida con el rival asignado.
Las partidas no jugadas dentro del plazo podrán ser declaradas como derrota doble a criterio del árbitro.

---

## Estructura del torneo

El torneo se divide en **dos fases**:

### Fase clasificatoria — 5 rondas

- Los **20 jugadores** se reparten en **4 grupos de 5**.
- Cada jugador se enfrenta a todos los rivales de su grupo *(sistema todos contra todos)*.
- Puntuación: **3 pts** victoria · **1 pt** empate · **0 pts** derrota.
- Clasifican los **2 primeros de cada grupo** para la fase final (8 jugadores en total).

### Fase final — eliminación directa

- **Cuartos de final** → **Semifinales** → **3.º y 4.º puesto** → **Gran Final**.
- En caso de empate en puntos al final de la partida se disputará una ronda de muerte súbita.

---

## Mapas y misiones

La mesa oficial del torneo está disponible en Steam Workshop:

[**→ Mesa oficial WH40K-TTS**](https://steamcommunity.com/sharedfiles/filedetails/?id=3398190636)

### Rondas clasificatorias

| Ronda | Misión principal | Despliegue |
|---|---|---|
| 1 | Take and Hold | Tipping Point \[A\] |
| 2 | Linchpin | Search and Destroy \[J\] |
| 3 | Purge the Foe | Crucible of Battle \[M\] |
| 4 | Take and Hold | Search and Destroy \[L\] |
| 5 | Linchpin | Tipping Point \[C\] |

### Fase final

| Ronda | Misión principal | Despliegue |
|---|---|---|
| Cuartos | Take and Hold | Hammer and Anvil \[E\] |
| Semifinales | Scorched Earth | Tipping Point \[D\] |
| Final | Hidden Supplies | Crucible of Battle \[N\] |

---

## Recursos útiles

- 📋 **Listas de ejército** — publicadas al inicio de la fase clasificatoria en la pestaña *Subir Lista*.
- 🎲 **Mod Yellowscribe** — necesario para etiquetar las miniaturas según tu lista.
- 💬 **Dudas y coordinación** — canal *#torneo-26-i2* en el [servidor de Discord](https://discord.gg/4uHrQp2ckW).
- 📧 **Contacto árbitro** — to@wh40k-tts.com
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

          {/* Corner ornaments */}
          <span aria-hidden className="pointer-events-none absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#c9a84c]/50" />
          <span aria-hidden className="pointer-events-none absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#c9a84c]/50" />
          <span aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#c9a84c]/50" />
          <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#c9a84c]/50" />

          {/* Header strip */}
          <div className="px-6 pt-5 pb-4 border-b border-[#2a2210]">
            <p className="font-heading text-[10px] tracking-[0.35em] uppercase text-[#5a4920] mb-0.5">
              ✦ Expediente ✦
            </p>
            <h2 className="font-heading text-base tracking-[0.15em] uppercase text-[#c9a84c]">
              {tournament?.name ?? 'Información del torneo'}
            </h2>
          </div>

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
