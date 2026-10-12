import Image from "next/image";
import HomeSection from "./components/Home/HomeSection";
import AboutSection from "./components/Home/AboutSection";
import ProjectSection from "./components/Home/ProjectSection";
import ContactSection from "./components/Home/ContactSection";

export default function Home() {
  return (
   <>
   <HomeSection/>
   <AboutSection />
   <ProjectSection/>
   <ContactSection/>
   </>
  );
}
