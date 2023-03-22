import Navbar from "../components/Root/Navbar";
import Hero from "../components/Root/Hero";
import Settings from "../components/Settings";
import About from "../components/Root/About";
import Projects from "../components/Root/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Root/Contact";

const Home = () => {
  return (
    <>
      <Settings />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
