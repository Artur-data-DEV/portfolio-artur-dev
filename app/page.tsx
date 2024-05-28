import Hero from "./_components/hero";
import About from "./_components/about";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
import Skills from "./_components/skills";
import Projects from "./_components/projects";
import ContactForm from "./_components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}
