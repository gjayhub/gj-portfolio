import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main>
      <div className='px-16'>
        <NavBar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <Footer />
      <ToastContainer />
    </main>
  );
}
