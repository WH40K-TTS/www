import React, { useState } from 'react'
import { Upload, ExternalLink, Shield, Users, ScrollText } from 'lucide-react'

const TALLY_EMBED_URL = 'https://tally.so/embed/NpM5Ej?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'

export default function ListUpload({ tournament }) {
  const [mode, setMode] = useState('embed')

  return (
    <div className="max-w-3xl mx-auto px-4 pb-20">
      {/* Header Sección */}
      <div className="mb-8 text-center">
        <p className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#c9a84c]/60 mb-2">
          ✦ Registro de Guerra ✦
        </p>
        <h2 className="font-heading text-2xl tracking-[0.15em] uppercase text-[#c9a84c]">
          Listas de Ejército
        </h2>
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent mx-auto mt-4" />
      </div>

      {/* Formulario Embed */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-[#c9a84c]/5 blur-sm rounded-sm transition duration-1000 group-hover:duration-200" />
        <div className="relative border border-[#3a2d10] bg-[#161209] overflow-hidden">
          <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#c9a84c]/30" />
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#c9a84c]/30" />
          
          <iframe
            src={TALLY_EMBED_URL}
            width="100%"
            height="500"
            title="Formulario"
            className="block"
            style={{ border: 'none', background: 'transparent' }}
          />
        </div>
      </div>

      {/* --- TABLA INDIVIDUAL --- */}
      <div className="mt-16">
        <div className="flex items-center gap-3 mb-4 ml-1">
          <ScrollText size={18} className="text-[#c9a84c]" />
          <h3 className="font-heading text-sm tracking-[0.2em] uppercase text-[#c9a84c]">Torneo Individual</h3>
        </div>
        
        <div className="overflow-hidden border border-[#3a2d10] bg-[#161209] shadow-2xl">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-[#1e1a0d] border-b border-[#3a2d10]">
                <th className="px-6 py-4 font-heading text-[10px] tracking-[0.2em] uppercase text-[#c9a84c]/80 border-b border-[#3a2d10]">Jugador</th>
                <th className="px-6 py-4 font-heading text-[10px] tracking-[0.2em] uppercase text-[#c9a84c]/80 text-center border-b border-[#3a2d10]">Ver Lista</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#3a2d10]/30">
              {[
                { name: 'Arkanel el Sombrío', link: '#' },
                { name: 'Valerius Thorne', link: '#' },
                { name: 'Kaelen Stormbringer', link: '#' },
                { name: 'Elara Moonwhisper', link: '#' },
              ].map((player, idx) => (
                <tr key={idx} className="group hover:bg-[#c9a84c]/5 transition-all duration-300">
                  <td className="px-6 py-4">
                    <span className="font-body text-sm uppercase tracking-wide text-[#7a6848] group-hover:text-[#c9a84c] transition-colors">
                      {player.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <a 
                      href={player.link} 
                      className="inline-flex items-center justify-center w-10 h-10 border border-[#3a2d10] text-[#c9a84c] hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#161209] transition-all duration-300 rounded-sm"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- TABLA EQUIPOS --- */}
      <div className="mt-16">
        <div className="flex items-center gap-3 mb-4 ml-1">
          <Users size={18} className="text-[#c9a84c]" />
          <h3 className="font-heading text-sm tracking-[0.2em] uppercase text-[#c9a84c]">Torneo por Equipos</h3>
        </div>

        <div className="overflow-hidden border border-[#3a2d10] bg-[#161209] shadow-2xl text-[#7a6848]">
          <table className="w-full text-left border-separate border-spacing-0">
            <tbody className="font-body text-sm">
              {/* Equipo 1 */}
              <tr className="bg-gradient-to-r from-[#2a2414] to-[#161209]">
                <td colSpan="2" className="px-6 py-3 border-l-2 border-[#c9a84c] border-b border-[#3a2d10]">
                  <div className="flex justify-between items-center">
                    <span className="font-heading text-xs tracking-[0.3em] uppercase text-[#c9a84c]">Equipo Vanguardia</span>
                    <span className="text-[10px] text-[#5a4920] uppercase tracking-widest font-heading">4 Integrantes</span>
                  </div>
                </td>
              </tr>
              {[
                { name: 'Soren the Bold', army: 'Stormcast Eternals' },
                { name: 'Kaelen Frost', army: 'Lumineth' },
                { name: 'Mira Shadowstep', army: 'Sylvaneth' },
                { name: 'Torin Ironfoot', army: 'Cities of Sigmar' },
              ].map((player, idx) => (
                <tr key={`t1-${idx}`} className="group hover:bg-[#c9a84c]/5 transition-all border-b border-[#3a2d10]/30 last:border-b-0">
                  <td className="px-8 py-3 italic">{player.name}</td>
                  <td className="px-6 py-3 text-right">
                    <a href="#" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-tighter text-[#c9a84c]/60 hover:text-[#c9a84c] transition-colors">
                      Documento <ExternalLink size={12} />
                    </a>
                  </td>
                </tr>
              ))}

              {/* Equipo 2 */}
              <tr className="bg-gradient-to-r from-[#2a2414] to-[#161209]">
                <td colSpan="2" className="px-6 py-3 border-l-2 border-[#c9a84c] border-b border-t border-[#3a2d10]">
                   <div className="flex justify-between items-center">
                    <span className="font-heading text-xs tracking-[0.3em] uppercase text-[#c9a84c]">Equipo Eclipse</span>
                    <span className="text-[10px] text-[#5a4920] uppercase tracking-widest font-heading">4 Integrantes</span>
                  </div>
                </td>
              </tr>
              {[
                { name: 'Zarathos Vile', army: 'Skaven' },
                { name: 'Lyra Nightwind', army: 'Nighthaunt' },
              ].map((player, idx) => (
                <tr key={`t2-${idx}`} className="group hover:bg-[#c9a84c]/5 transition-all border-b border-[#3a2d10]/30 last:border-b-0">
                  <td className="px-8 py-3 italic">{player.name}</td>
                  <td className="px-6 py-3 text-right">
                    <a href="#" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-tighter text-[#c9a84c]/60 hover:text-[#c9a84c] transition-colors">
                      Documento <ExternalLink size={12} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}