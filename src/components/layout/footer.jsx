import React from 'react'

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-[#3a2d10] bg-[#0d0b08] px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-7xl mx-auto flex justify-center">
        <p className="font-body text-xs text-[#3a2d10]">
          Comunidad competitiva digital en español ✦ WH40K-TTS ✦ {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
