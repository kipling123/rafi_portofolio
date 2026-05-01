import { useRef, useEffect } from "react";
import "./styles/global.css";
import Cursor from "./components/Cursor.jsx";
import Navbar from "./components/Navbar.jsx";
import ThreeScene from "./components/ThreeScene.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Certifications from "./components/Certifications.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import { PROFILE } from "./data/index.js";

export default function App() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div style={{ background: "transparent", minHeight: "100vh", overflowX: "hidden" }}>
      <Cursor />
      <Navbar />
      <ThreeScene mouse={mouse} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      padding: "80px 8% 40px", textAlign: "center", borderTop: "1px solid var(--border)",
      background: "rgba(255, 255, 255, 0.8)", backdropFilter: "blur(10px)",
      position: "relative", zIndex: 10
    }}>
      <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>{PROFILE.name}</h3>
      <p style={{ color: "var(--muted)", maxWidth: 500, margin: "0 auto 32px", fontSize: 15, lineHeight: 1.6 }}>
        Building modern, interactive, and intelligent software experiences with AI and Big Data.
      </p>
      <p style={{ fontSize: 14, color: "var(--muted)", opacity: 0.7 }}>
        © {year} Built with React & Three.js.
      </p>
    </footer>
  );
}
