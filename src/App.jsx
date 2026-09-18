import { useRef, useEffect } from "react";
import "./styles/global.css";
import Cursor from "./components/Cursor.jsx";
import Navbar from "./components/Navbar.jsx";
import ThreeScene from "./components/ThreeScene.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Achievements from "./components/Achievements.jsx";
import Certifications from "./components/Certifications.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import { PROFILE } from "./data/index.js";
import { IconExternalLink } from "./components/Icons.jsx";

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
        <Experience />
        <Skills />
        <Achievements />
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
      padding: "60px 6% 40px", textAlign: "center", borderTop: "1px solid var(--border)",
      background: "rgba(255, 255, 255, 0.94)", backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      position: "relative", zIndex: 10
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h3 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12, color: "var(--text)" }}>{PROFILE.name}</h3>
        <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
          Mahasiswa Informatika Universitas Telkom • Machine Learning, Big Data & Frontend Development Enthusiast
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 28, flexWrap: "wrap" }}>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" style={{ color: "var(--text)", textDecoration: "none", fontWeight: 700, fontSize: 14, display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span>GitHub</span>
            <IconExternalLink size={13} color="var(--text)" />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" style={{ color: "var(--text)", textDecoration: "none", fontWeight: 700, fontSize: 14, display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span>LinkedIn</span>
            <IconExternalLink size={13} color="var(--text)" />
          </a>
          <a href={PROFILE.website} target="_blank" rel="noreferrer" style={{ color: "var(--text)", textDecoration: "none", fontWeight: 700, fontSize: 14, display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span>Vercel Portfolio</span>
            <IconExternalLink size={13} color="var(--text)" />
          </a>
          <a href={`mailto:${PROFILE.email}`} style={{ color: "var(--text)", textDecoration: "none", fontWeight: 700, fontSize: 14, display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span>Email</span>
            <IconExternalLink size={13} color="var(--text)" />
          </a>
        </div>

        <p style={{ fontSize: 13, color: "var(--muted)", opacity: 0.8 }}>
          © {year} {PROFILE.name}. All rights reserved. Built with React, Three.js & Modern Web Architecture.
        </p>
      </div>
    </footer>
  );
}
