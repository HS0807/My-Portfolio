import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectSection() {
  const storeImages = [
    { src: "/assets/Homepage.png", alt: "E-commerce homepage", title: "Homepage" },
    { src: "/assets/Product Page.png", alt: "E-commerce product page", title: "Product Page" },
    { src: "/assets/Login Page.png", alt: "User login page", title: "Login Page" },
    { src: "/assets/Profile Page.png", alt: "User profile page", title: "Profile Page" },
    { src: "/assets/Cart Page.png", alt: "Shopping cart page", title: "Cart Page" },
    { src: "/assets/Wishlist Page.png", alt: "Wishlist page", title: "Wishlist Page" },
    { src: "/assets/Admin User Manager.png", alt: "Admin user manager", title: "Admin User Manager" },
    { src: "/assets/Admin product manager.png", alt: "Admin product manager", title: "Admin Product Manager" },
  ];

  const fashionImages = [
    { src: "/assets/image-1.png", alt: "Fashion store homepage" },
    { src: "/assets/image-2.png", alt: "Fashion product listing" },
    { src: "/assets/image-3.png", alt: "Fashion product details" },
    { src: "/assets/image-4.png", alt: "Fashion wishlist" },
  ];

  const EduTrackImages = [
    
  ];
  return (
    <section id="projects" className="bg-[#0a192f] px-6 py-16 text-white md:px-16">
      <div className="mx-auto max-w-5xl">
        <h4 className="mb-3 text-[#64ffda]">My Work</h4>
        <h2 className="mb-8 text-3xl font-bold">Projects</h2>

        <div className="space-y-10">
          {/* E-Commerce Store */}
          <div>
            <h3 className="text-xl font-semibold">E-Commerce Store</h3>
            <p className="my-2 text-gray-400">
              Responsive online store with product search, cart, wishlist,
              authentication, profile management, and admin dashboards.
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

            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {storeImages.map((image) => (
                <div key={image.src}>
                  <div className="relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={250}
                      className="h-32 w-full rounded object-cover"
                    />

                    <Link
                      href={image.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-2 top-2 rounded bg-[#64ffda] px-2 py-1 text-sm text-[#0a192f]"
                    >
                      View
                    </Link>
                  </div>

                  <p className="mt-2 text-sm text-gray-400">{image.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fashion E-Commerce Frontend */}
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

            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {fashionImages.map((image) => (
                <div key={image.src}>
                  <div className="relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={250}
                      className="h-32 w-full rounded object-cover"
                    />

                    <Link
                      href={image.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-2 top-2 rounded bg-[#64ffda] px-2 py-1 text-sm text-[#0a192f]"
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EduTrack */}
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