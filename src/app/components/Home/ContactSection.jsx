
import React from "react";
import Link from "next/link";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="bg-[#0a192f] px-6 py-16 text-white md:px-16">
            <div className="mx-auto max-w-5xl">
                <div className="mb-12 text-center">
                    <p className="mb-3 text-sm uppercase tracking-[3px] text-[#64ffda]">Contact</p>
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl">Let's Build Something Great</h2>
                    <p className="mx-auto max-w-2xl leading-7 text-gray-400">
                        Open to frontend developer opportunities, internships, and
                        exciting web development projects.
                    </p>
                </div>
                <div>
                    <div className="flex flex-col justify-between gap-2 py-5 sm:flex-row sm:items-center">
                        <p className="text-lg text-[#64ffda]">EMAIL</p>
                        <p className="text-lg font-bold md:text-xl">hiteshsonwane32@gmail.com</p>
                    </div>

                    <div className="flex flex-col justify-between gap-2 py-5 sm:flex-row sm:items-center">
                        <p className="text-sm text-[#64ffda]">LOCATION</p>
                        <p className="text-lg font-bold md:text-xl">Ambarnath, Maharashtra, India</p>
                    </div>

                    <div className="flex flex-col justify-between gap-2 py-5 sm:flex-row sm:items-center">
                        <p className="text-sm text-[#64ffda]">FOCUS</p>
                        <p className="text-lg font-bold md:text-xl">React.js, Next.js, Frontend Development</p>
                    </div>

                    <div className="flex flex-col justify-between gap-2 py-5 sm:flex-row sm:items-center">
                        <p className="text-sm text-[#64ffda]">GitHub</p>
                        <Link
                            href="https://github.com/HS0807"
                            className="text-lg font-bold hover:text-[#64ffda] md:text-xl">
                            github.com/HS0807
                        </Link>
                    </div>

                    <div className="flex flex-col justify-between gap-2 py-5 sm:flex-row sm:items-center">
                        <p className="text-sm text-[#64ffda]">LinkedIn</p>
                        <Link
                            href="https://www.linkedin.com/in/hitesh-sonwane-5a4180337"
                            className="text-lg font-bold hover:text-[#64ffda] md:text-xl">
                            Hitesh sonwame/linkedIn
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}