
import Image from "next/image";
import Link from "next/link";

export default function HomeSection() {
    return (
        <section className="flex items-center bg-[#0a192f] px-6 py-22 text-white sm:px-10 md:px-16 lg:mt-15">
            <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-10 md:flex-row md:gap-12">
                <div className="text-center md:text-left">
                    <p className="mb-4 text-lg font-medium text-[#64ffda]">
                        Hi, my name is
                    </p>

                    <h1 className="text-4xl font-bold sm:text-5xl lg:text-7xl">
                        Hitesh Sonwane.
                    </h1>

                    <h2 className="mt-4 text-2xl font-semibold text-gray-400">
                        Frontend Developer
                    </h2>

                    <p className="mt-6 max-w-xl text-gray-400">
                        I’m a Frontend Developer passionate about building responsive,
                        user-friendly, and modern web applications. I work with React.js,
                        Next.js, JavaScript, and Tailwind CSS to create clean, interactive
                        user interfaces. I enjoy solving problems, learning new technologies,
                        and turning ideas into meaningful digital experiences.
                    </p>

                    <div className="mt-8">
                        <Link
                            href="#contact"
                            className="inline-block rounded border border-[#64ffda] px-5 py-3 text-[#64ffda] hover:bg-[#64ffda]/10">
                            Contact Me
                        </Link>
                    </div>
                </div>

                <div className="shrink-0 rounded-full border-4 border-[#64ffda] p-2">
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
        </section>
    );
}
