import React, { useState } from 'react'
import { Upload, ExternalLink } from 'lucide-react'

const TALLY_EMBED_URL = 'https://tally.so/embed/NpM5Ej?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'


export default function ListUpload({ tournament }) {
  const [mode, setMode] = useState('embed') // 'embed' | 'link'

  const tallyEmbed = TALLY_EMBED_URL
  const tallyLink = TALLY_LINK_URL

  return (
    <div className="max-w-2xl mx-auto">

      <div className="mb-8">
        {/*
        <p className="font-heading text-[10px] tracking-[0.35em] uppercase text-[#5a4920] mb-2">
          ✦ Registro de Lista ✦
        </p>
        */}
        {/*
        <h2 className="font-heading text-lg tracking-[0.15em] uppercase text-[#c9a84c] mb-3">
          Subir Lista de Ejército
        </h2>
        */}
        <p className="font-body text-[#7a6848] text-base leading-relaxed">
          Presenta tu lista de ejército antes del inicio del torneo. El envío es gestionado por el formulario oficial de la comunidad.
        </p>
      </div>

      {/* Toggle embed/link */}
      {/*
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setMode('embed')}
          className={[
            'px-4 py-2 font-heading text-xs tracking-[0.2em] uppercase border transition-all duration-200',
            mode === 'embed'
              ? 'border-[#c9a84c] text-[#c9a84c] bg-[#1e1a0d]'
              : 'border-[#3a2d10] text-[#5a4920] hover:border-[#6b5420]',
          ].join(' ')}
        >
          Formulario integrado
        </button>
        <button
          onClick={() => setMode('link')}
          className={[
            'px-4 py-2 font-heading text-xs tracking-[0.2em] uppercase border transition-all duration-200',
            mode === 'link'
              ? 'border-[#c9a84c] text-[#c9a84c] bg-[#1e1a0d]'
              : 'border-[#3a2d10] text-[#5a4920] hover:border-[#6b5420]',
          ].join(' ')}
        >
          Enlace externo
        </button>
      </div>
      */}

      {/* Embed mode */}
       {mode === 'embed' && (
         <div className="relative border border-[#3a2d10] bg-[#161209]">
           <span aria-hidden className="pointer-events-none absolute top-0 left-0 w-3 h-3 border-t border-l border-[#c9a84c]/50" />
           <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#c9a84c]/50" />
           <iframe
             src={tallyEmbed}
             width="100%"
             height="550"
             title={`Formulario de lista para ${tournament?.name ?? 'torneo'}`}
             className="block"
             style={{ border: 'none', background: 'transparent' }}
           />
         </div>
       )}

       {/* //////////////////////////////////////////
       Tabla con las listas del torneo individual
       ////////////////////////////////////////////// */}
       <div className="mt-12 overflow-hidden border border-[#3a2d10] bg-[#161209]">
         <table className="w-full text-left border-collapse">
           <thead>
             <tr className="border-b border-[#3a2d10] bg-[#1e1a0d]">
               <th className="px-4 py-3 font-heading text-xs tracking-[0.1em] uppercase text-[#c9a84c]">
                 Jugador
               </th>
               <th className="px-4 py-3 font-heading text-xs tracking-[0.1em] uppercase text-[#c9a84c] text-center">
                 Lista
               </th>
             </tr>
           </thead>
           <tbody className="font-body uppercase text-sm text-[#7a6848]">
             {[
               { name: 'Arkanel el Sombrío', link: '#' },
               { name: 'Valerius Thorne', link: '#' },
               { name: 'Kaelen Stormbringer', link: '#' },
               { name: 'Elara Moonwhisper', link: '#' },
               { name: 'Grommash Ironwill', link: '#' },
               { name: 'Lysandra Vane', link: '#' },
               { name: 'Thorgar Stonefist', link: '#' },
               { name: 'Seraphina Lightheart', link: '#' },
               { name: 'Malakor the Vile', link: '#' },
               { name: 'Zephyra Windrunner', link: '#' },
               { name: 'Arkanel el Sombrío', link: '#' },
               { name: 'Valerius Thorne', link: '#' },
               { name: 'Kaelen Stormbringer', link: '#' },
               { name: 'Elara Moonwhisper', link: '#' },
               { name: 'Grommash Ironwill', link: '#' },
               { name: 'Lysandra Vane', link: '#' },
               { name: 'Thorgar Stonefist', link: '#' },
               { name: 'Seraphina Lightheart', link: '#' },
               { name: 'Malakor the Vile', link: '#' },
               { name: 'Zephyra Windrunner', link: '#' },
             ].map((player, idx) => (
               <tr key={idx} className="border-b border-[#3a2d10]/50 last:border-none hover:bg-[#1e1a0d]/50 transition-colors">
                 <td className="px-4 py-3">{player.name}</td>
                 <td className="px-4 py-3 text-center">
                   <a 
                     href={player.link} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="inline-flex items-center justify-center p-2 text-[#c9a84c] hover:text-white transition-colors"
                     title="Ver lista de ejército"
                   >
                     <ExternalLink size={16} />
                   </a>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
       {/* //////////////////////////////////////////////
       Fin de tabla con las listas de ejército del torneo
       ////////////////////////////////////////////// */}

       {/* //////////////////////////////////////////
       Tabla con las listas del torneo por equipos
       ////////////////////////////////////////////// */}
       <div className="mt-12 overflow-hidden border border-[#3a2d10] bg-[#161209]">
         <table className="w-full text-left border-collapse">
           <thead className="bg-[#1e1a0d]">
             <tr className="border-b border-[#3a2d10]">
               <th className="px-4 py-3 font-heading text-xs tracking-[0.1em] uppercase text-[#c9a84c]">
                 Jugador del Equipo
               </th>
               <th className="px-4 py-3 font-heading text-xs tracking-[0.1em] uppercase text-[#c9a84c] text-center">
                 Ejército
               </th>
             </tr>
           </thead>
           <tbody className="font-body text-sm text-[#7a6848]">
             {/* Team 1 */}
             <tr className="bg-[#2a2414]">
               <td colSpan="2" className="px-4 py-2 font-heading text-center text-xs tracking-[0.2em] uppercase text-[#c9a84c] border-b border-[#3a2d10]">
                 Equipo Vanguardia
               </td>
             </tr>
             {[
               { name: 'Soren the Bold', link: '#' },
               { name: 'Kaelen Frost', link: '#' },
               { name: 'Mira Shadowstep', link: '#' },
               { name: 'Torin Ironfoot', link: '#' },
             ].map((player, idx) => (
               <tr key={`t1-${idx}`} className="border-b border-[#3a2d10]/50 last:border-none hover:bg-[#1e1a0d]/50 transition-colors">
                 <td className="px-4 py-3">{player.name}</td>
                 <td className="px-4 py-3 text-center">
                   <a href={player.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-2 text-[#c9a84c] hover:text-white transition-colors">
                     <ExternalLink size={16} />
                   </a>
                 </td>
               </tr>
             ))}

             {/* Team 2 */}
             <tr className="bg-[#2a2414]">
               <td colSpan="2" className="px-4 py-2 font-heading text-center text-xs tracking-[0.2em] uppercase text-[#c9a84c] border-b border-[#3a2d10]">
                 Equipo Eclipse
               </td>
             </tr>
             {[
               { name: 'Zarathos Vile', link: '#' },
               { name: 'Lyra Nightwind', link: '#' },
               { name: 'Korgath the Cruel', link: '#' },
               { name: 'Selene Moon', link: '#' },
             ].map((player, idx) => (
               <tr key={`t2-${idx}`} className="border-b border-[#3a2d10]/50 last:border-none hover:bg-[#1e1a0d]/50 transition-colors">
                 <td className="px-4 py-3">{player.name}</td>
                 <td className="px-4 py-3 text-center">
                   <a href={player.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-2 text-[#c9a84c] hover:text-white transition-colors">
                     <ExternalLink size={16} />
                   </a>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
       {/* /////////////////////////////////////////////////
       Fin de la tabla con las listas del torneo individual
       ///////////////////////////////////////////////// */}

    </div>
  )
}