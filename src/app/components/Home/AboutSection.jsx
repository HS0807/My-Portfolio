import React from "react";
import Image from "next/image";

export default function AboutSection() {
    const skills = ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Redux Toolkit", "Git & GitHub", "REST APIs",];

    return (
        <section id="about" className="bg-[#0a192f] px-6 py-20 text-white md:px-16">
            <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
                <div className="mx-auto rounded-2xl border-2 border-[#64ffda] p-2">
                    <Image
                        src="/assets/myprofile.png"
                        alt="Hitesh Sonwane"
                        width={400}
                        height={500}
                        className="h-auto w-full max-w-sm rounded-xl"
                        priority
                    />
                </div>
                <div>
                    <p className="mb-3 text-sm tracking-widest text-[#64ffda]">
                        INTRODUCTION
                    </p>

                    <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
                        About Me
                    </h2>

                    <div className="space-y-4 leading-7 text-gray-400">
                        <p>
                            Hello! I'm{" "}
                            <span className="font-semibold text-[#64ffda]">
                                Hitesh Sonwane
                            </span>
                            , a B.Sc. Information Technology graduate from Maharashtra,
                            India, and an aspiring Frontend Developer.
                        </p>

                        <p>
                            I enjoy creating responsive and user-friendly websites using
                            HTML, CSS, JavaScript, React.js, Next.js, and Tailwind CSS.
                            I am passionate about designing clean interfaces that work
                            smoothly across different devices.
                        </p>

                        <p>
                            I have learned state management with Redux Toolkit and working
                            with REST APIs. I am also familiar with Git and GitHub.
                        </p>

                        <p>
                            I am applying my knowledge through personal projects, including
                            an e-commerce website and my portfolio. These projects help me
                            practice my skills and improve my problem-solving abilities.
                        </p>

                        <p>
                            As a fresher, I am eager to learn from experienced developers,
                            gain practical experience, and contribute to building useful
                            web applications.
                        </p>
                    </div>

                    <div className="mt-8">
                        <h3 className="mb-4 font-semibold text-[#64ffda]">
                            Technical Skills
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span key={skill} className="rounded-full border border-[#64ffda]/50 px-4 py-2 text-sm text-gray-300">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 grid gap-6 border-t border-gray-700 pt-6 sm:grid-cols-2">
                        <div>
                            <h3 className="mb-2 font-semibold text-[#64ffda]">
                                Education
                            </h3>
                            <p className="text-gray-400">
                                B.Sc. Information Technology
                                <br />
                                Graduate, 2026
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-2 font-semibold text-[#64ffda]">
                                Career Goal
                            </h3>
                            <p className="text-gray-400">
                                Start my frontend development career, strengthen my skills,
                                and contribute to real-world projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
