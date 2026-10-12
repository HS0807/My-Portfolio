
import React from "react";
import Link from "next/link";

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="bg-[#0a192f] px-6 py-16 text-white md:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <h4 className="mb-3 text-[#64ffda]">My Work</h4>
        <h2 className="mb-8 text-3xl font-bold">Projects</h2>

        <div className="space-y-8">
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
              className="mt-2 inline-block text-[#64ffda] hover:underline"
            >
              Live Demo
            </Link>
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