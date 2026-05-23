import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { Table, Tr, Td } from '../../components/ui/table'

export function RuleSection({ section, index }) {
  const [open, setOpen] = useState(true)

  return (
    <div className="border border-[#3a2d10] bg-[#161209] mb-4 overflow-hidden">

      {/* Section header */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#5a4920]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-heading text-sm tracking-[0.15em] uppercase text-[#c9a84c] group-hover:text-[#e8c96a] transition-colors">
            {section.title}
          </h3>
        </div>
        <ChevronDown
          size={16}
          className={`text-[#5a4920] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Rules list */}
      {open && (
        <div className="border-t border-[#2a2210] px-5 py-4 animate-fade-in">
          <ul className="space-y-3">
            {section.rules.map((rule, i) => {
              if (typeof rule === 'string') {
                return (
                  <li key={i} className="flex gap-3">
                    <span
                      aria-hidden
                      className="font-heading text-[10px] text-[#5a4920] mt-1 shrink-0 tracking-widest"
                    >
                      ✦
                    </span>
                    <div className="font-body text-base text-[#c4b48c] leading-relaxed w-full">
                      <ReactMarkdown 
                        components={{
                          p: ({children}) => <>{children}</>,
                          strong: ({children}) => <strong className="text-[#e8c96a] font-bold">{children}</strong>,
                          a: ({children, href}) => <a href={href} className="text-[#e8c96a] underline hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">{children}</a>,
                        }}
                      >
                        {rule}
                      </ReactMarkdown>
                    </div>
                  </li>
                )
              }
              
               if (rule.type === 'table') {
                 return (
                   <div key={i} className="mt-4 mb-2 flex justify-center">
 <Table headers={rule.headers} className="w-fit border border-[#3a2d10] rounded-sm">
                       {rule.rows.map((row, rowIndex) => (
                         <Tr key={rowIndex}>
                           {row.map((cell, cellIndex) => (
                             <Td key={cellIndex} center={cellIndex > 0}>{cell}</Td>
                           ))}
                         </Tr>
                       ))}
                     </Table>
                   </div>
                 )
               }

               if (rule.type === 'highlight') {
                 return (
                   <div key={i} className="mt-4 mb-2 p-4 bg-[#2a2210] border-l-4 border-[#c9a84c] rounded-sm">
                     <div className="font-body text-base text-[#c4b48c] leading-relaxed">
                       <ReactMarkdown 
                         components={{
                           p: ({children}) => <>{children}</>,
                           strong: ({children}) => <strong className="text-[#e8c96a] font-bold">{children}</strong>,
                           a: ({children, href}) => <a href={href} className="text-[#e8c96a] underline hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">{children}</a>,
                         }}
                       >
                         {rule.content}
                       </ReactMarkdown>
                     </div>
                   </div>
                 )
               }
              
              return null
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default RuleSection
