import React, { useState } from 'react'
import { Upload, ExternalLink } from 'lucide-react'

const TALLY_EMBED_URL = 'https://tally.so/embed/NpM5Ej?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'


export default function ListUpload({ tournament }) {
  const [mode, setMode] = useState('embed') // 'embed' | 'link'

  const tallyEmbed = TALLY_EMBED_URL

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        {/* /////////////////////////////////////////////////
        Mostrar cuando está abierto el periódo de inscripción
        ///////////////////////////////////////////////// */}
        {/*
        <p className="font-body text-[#7a6848] text-base leading-relaxed">
          Presenta tu lista de ejército antes del inicio del torneo. El envío es gestionado a través del siguiente formulario:
        </p>
        */}
      </div>

      {/* Embed mode */}
      {/*
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
      /////////// FIN FORMULARIO /////////////////////*/}
      
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
                { name: 'AlxDuff', link: 'https://pastebin.com/raw/zNNFfw2h' },
                { name: 'Ancar', link: 'https://pastebin.com/raw/z0z3SepH' },
                { name: 'Aneg', link: 'https://pastebin.com/raw/az17snDG' },
                { name: 'Ezraen', link: 'https://www.newrecruit.eu/app/list/WiDUT' },
                { name: 'FrambuHobby', link: 'https://pastebin.com/raw/Dt3A5WCb' },
                { name: 'Friedlander', link: 'https://pastebin.com/raw/spQ0f0Bt' },
                { name: 'GatoAventuras', link: 'https://pastebin.com/raw/LtqcC66i' },
                { name: 'Javier V', link: 'https://pastebin.com/raw/0Rjms1zR' },
                { name: 'MaikelEdge', link: 'https://pastebin.com/raw/8TiXnLfN' },
                { name: 'makea', link: 'https://pastebin.com/raw/CFr869sJ' },
                { name: 'Navastelroy', link: 'https://pastebin.com/raw/Ux5PiFtd' },
                { name: 'Oli', link: 'https://pastebin.com/raw/GKiJN8W0' },
                { name: 'P1ter', link: 'https://pastebin.com/raw/HPCrCSwS' },
                { name: 'Private_patch', link: 'https://pastebin.com/raw/8U0nmZUv' },
                { name: 'r3dman', link: 'https://pastebin.com/raw/kZduAwYz' },
                { name: 'Sanchez_EU', link: 'https://pastebin.com/raw/vz5mEP38' },
                { name: 'Suarepita', link: 'https://pastebin.com/raw/uF8Ptcq4' },
                { name: 'Supradin', link: 'https://pastebin.com/raw/VQn7eKmp' },
                { name: 'Tony', link: 'https://pastebin.com/raw/wb2TDLmj' },
                { name: 'Xarcom', link: 'https://pastebin.com/raw/3WKkrwFi' },
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
       /////////////////////////////////////////////// */}

        {/* //////////////////////////////////////////
        Tablas con las listas del torneo por equipos
        ////////////////////////////////////////////// */}
        {/*
        <div className="mt-12 space-y-6">
          <div className="overflow-hidden border border-[#3a2d10] bg-[#161209]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#2a2414] border-b border-[#3a2d10]">
                  <th colSpan="2" className="px-4 py-2 font-heading text-center text-xs tracking-[0.2em] uppercase text-[#c9a84c]">
                    Equipo Vanguardia
                  </th>
                </tr>
              </thead>
              <tbody className="font-body text-sm text-[#7a6848]">
                {[
                  { name: 'Soren the Bold', link: 'https://www.google.es/' },
                  { name: 'Kaelen Frost', link: '#' },
                  { name: 'Mira Shadowstep', link: '#' },
                  { name: 'Torin Ironfoot', link: '#' },
                ].map((player, idx) => (
                  <tr key={`t1-${idx}`} className="border-b border-[#3a2d10]/50 last:border-none hover:bg-[#1e1a0d]/50 transition-colors">
                    <td className="px-4 py-3 uppercase">{player.name}</td>
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

          <div className="overflow-hidden border border-[#3a2d10] bg-[#161209]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#2a2414] border-b border-[#3a2d10]">
                  <th colSpan="2" className="px-4 py-2 font-heading text-center text-xs tracking-[0.2em] uppercase text-[#c9a84c]">
                    Equipo Eclipse
                  </th>
                </tr>
              </thead>
              <tbody className="font-body text-sm text-[#7a6848]">
                {[
                  { name: 'Zarathos Vile', link: '#' },
                  { name: 'Lyra Nightwind', link: '#' },
                  { name: 'Korgath the Cruel', link: '#' },
                  { name: 'Selene Moon', link: '#' },
                ].map((player, idx) => (
                  <tr key={`t2-${idx}`} className="border-b border-[#3a2d10]/50 last:border-none hover:bg-[#1e1a0d]/50 transition-colors">
                    <td className="px-4 py-3 uppercase">{player.name}</td>
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
        </div>
       */}
       {/* /////////////////////////////////////////////////
       Fin de la tabla con las listas del torneo por equipos
       ///////////////////////////////////////////////// */}

    </div>
  )
}