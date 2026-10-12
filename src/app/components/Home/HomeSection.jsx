
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function HomeSection() {
    return (
        <section className="flex items-center bg-[#0a192f] px-6 py-16 text-white sm:px-10 md:px-16">
            <div className="mx-auto w-full flex items-center justify-between gap-12 ">
                <div>
                    <p className="mb-4 text-lg font-medium text-[#64ffda]">
                        Hi, my name is
                    </p>
                    <h1 className="text-4xl font-bold  sm:text-5xl lg:text-7xl">
                        Hitesh Sonwane.
                    </h1>
                    <h2 className="mt-4 text-2xl font-semibold text-gray-400 ">
                        Frontend Developer
                    </h2>
                    <p className="mx-auto mt-6 text-gray-400">
                        I build responsive, user-friendly web applications using React, Next.js,
                    </p>
                    <p className=" text-gray-400"> and Tailwind CSS. I enjoy turning ideas into clean, functional digital  </p>
                    <p className=" text-gray-400"> experiences. </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                        <Link
                            href="#contact"
                            className="rounded border border-[#64ffda] px-5 py-3 text-[#64ffda]  hover:bg-[#64ffda]/10">
                            Contact Me
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="rounded-full border-4 border-[#64ffda] p-2 ">
                        <Image
                            src="/assets/myprofile.png"
                            alt="Hitesh Sonwane profile photo"
                            width={280}
                            height={280}
                            priority
                            className="h-48 w-48 rounded-full sm:h-60 sm:w-60 lg:h-72 lg:w-72"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}