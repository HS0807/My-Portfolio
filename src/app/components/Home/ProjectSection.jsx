import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectSection() {
  const fashionImages = [
    { src: "/assets/demo2-1.png", alt: "Fashion store homepage" },
    { src: "/assets/demo2-2.png", alt: "Fashion product listing" },
    { src: "/assets/demo2-3.png", alt: "Fashion product details" },
    { src: "/assets/demo2-5.png", alt: "Fashion wishlist" },
  ];

  return (
    <section
      id="projects"
      className="bg-[#0a192f] px-6 py-16 text-white md:px-16">
      <div className="mx-auto max-w-5xl">
        <h4 className="mb-3 text-[#64ffda]">My Work</h4>
        <h2 className="mb-8 text-3xl font-bold">Projects</h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold">E-Commerce Store</h3>
            <p className="my-2 text-gray-400">
              Responsive online store with product search, cart, wishlist,
              authentication, and admin dashboard.
            </p>
            <p className="text-sm text-[#64ffda]">
              Next.js · JavaScript · Tailwind CSS · Redux Toolkit
            </p>
            <Link
              href="https://my-e-commerceshop.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-[#64ffda] hover:underline"
            >
              Live Demo
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Fashion E-Commerce Frontend
            </h3>
            <p className="my-2 text-gray-400">
              Responsive fashion storefront using product data from DummyJSON.
            </p>
            <p className="text-sm text-[#64ffda]">
              Next.js · Tailwind CSS · Redux Toolkit
            </p>
            <Link
              href="https://fashion-app-swart.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-[#64ffda] hover:underline"
            >
              Live Demo
            </Link>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {fashionImages.map((image) => (
                <div
                  key={image.src}
                  className="overflow-hidden rounded-lg border border-gray-700"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="h-auto w-full"
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 600px"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              EduTrack - College Management
            </h3>
            <p className="my-2 text-gray-400">
              Responsive interface for managing college timetables,
              assignments, and notes.
            </p>
            <p className="text-sm text-[#64ffda]">
              HTML · CSS · Bootstrap · JavaScript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
