
import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <nav className="bg-[#0a192f] text-white">
        <div className="flex items-center justify-between px-6 py-2 md:px-16">
          <Link
            href="/"
            className="px-3 py-4 text-lg font-bold text-[#64ffda]">
            H I T E S H
          </Link>

          <div className="flex items-center gap-5 text-sm font-medium md:gap-10 text-[#64ffda] hover:text-white">
            <Link href="#about">
              About
            </Link>

            <Link href="#projects">
              Projects
            </Link>

            <Link href="#contact">
              Contact
            </Link>

            <Link
              href="/"
              className="rounded border border-[#64ffda] px-5 py-3 text-[#64ffda] hover:bg-[#64ffda]/10"
            >
              Resume
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}