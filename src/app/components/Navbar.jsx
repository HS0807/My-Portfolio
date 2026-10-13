"use client";

import { useState } from "react";
import Link from "next/link";
import { FiAlignJustify, FiX } from "react-icons/fi";

export default function Navbar() {
  const [ismenuopen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#0a192f] text-white">
      <div className="flex items-center justify-between px-4 py-2 md:px-16">
        <Link href="/" className="py-4 text-lg font-bold text-[#64ffda]">
          H I T E S H
        </Link>

        <button
          className="text-2xl text-[#64ffda] md:hidden"
          onClick={() => setIsMenuOpen(!ismenuopen)}
          aria-label={ismenuopen ? "Close menu" : "Open menu"}
          aria-expanded={ismenuopen}
        >
          {ismenuopen ? <FiX /> : <FiAlignJustify />}
        </button>

        <div className={`${ismenuopen ? "flex" : "hidden"} absolute top-full left-0 w-full flex-col items-center gap-6 bg-[#0a192f] py-6 text-sm font-medium text-[#64ffda] md:static md:flex md:w-auto md:flex-row md:gap-10 md:bg-transparent md:py-0`}>
          <Link href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>

          <Link href="#projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </Link>

          <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>

          <Link
            href="/assets/hitesh-sonwane-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-[#64ffda] px-5 py-3 hover:bg-[#64ffda]/20"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
