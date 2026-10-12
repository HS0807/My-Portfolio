
import React from "react";

export default function AboutSection() {
    return (
        <section 
        id="about" 
        className="bg-[#0a192f] px-6 py-20 text-white md:px-16">
            <div>
                <div className="mb-10 text-center">
                    <p className="mb-3 text-sm font-semibold  text-[#64ffda]">
                        I N T R O D U C T I O N
                    </p>
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        About Me
                    </h2>
                </div>
                <div className="text-gray-400 sm:text-lg">
                    <p> Hello! I'm <span className="font-semibold text-[#64ffda]">
                        Hitesh Sonwane
                    </span>, a passionate frontend developer and a 2026 B.Sc.
                        Information Technology graduate from Maharashtra, India.
                    </p>
                    <p>
                        My expertise includes building responsive and user-friendly
                        web applications using HTML, CSS, JavaScript, React.js,
                        Next.js, and Tailwind CSS. I also work with Redux Toolkit
                        for state management and enjoy creating interactive user
                        interfaces that deliver a smooth user experience.
                    </p>
                    <p>
                        As a fresher, I'm continuously improving my development
                        skills by building practical projects, including an
                        e-commerce website and my personal portfolio. I focus on
                        writing clean, maintainable code and creating modern web
                        experiences that combine functionality with thoughtful design.
                    </p>
                    <p>
                        My goal is to begin my professional career as a frontend
                        developer, contribute to meaningful projects, and grow as
                        a developer by learning new technologies and solving
                        real-world problems.
                    </p>
                </div>
            </div>
        </section>
    );
}