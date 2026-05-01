import { useState, useEffect } from "react";
import useTyping from "../hooks/useTyping.js";
import { PROFILE, TYPING_WORDS } from "../data/index.js";

export default function Hero() {
  const typing = useTyping(TYPING_WORDS);
  const [loaded, setLoaded] = useState(false);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setLoaded(true);
    const handleMouse = (e) => {
      setMousePos({ x: (e.clientX / innerWidth - 0.5) * 30, y: (e.clientY / innerHeight - 0.5) * 30 });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "140px 8% 60px", position: "relative", zIndex: 10
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 80, alignItems: "center" }}>

        {/* Left Side: Content */}
        <div className={`reveal-left${loaded ? " visible" : ""}`} style={{
          opacity: loaded ? 1 : 0, transform: loaded ? "translateX(0)" : "translateX(-40px)",
          transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)", position: "relative", zIndex: 20
        }}>
          <div className="pill-label glass-card">
            <span className="pill-dot" /> Available for projects
          </div>

          <h1 style={{
            fontSize: "clamp(48px, 6vw, 76px)", fontWeight: 900, color: "var(--text)",
            lineHeight: 1.05, marginBottom: 32, letterSpacing: "-0.04em"
          }}>
            Rafi Ikbar Fahrezy <br />
            <span style={{ color: "var(--primary)" }}>{typing}</span>
            <span style={{ animation: "blink 1s infinite", borderRight: "4px solid var(--primary)", marginLeft: 6 }} />
          </h1>

          <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.8, marginBottom: 48, maxWidth: 520 }}>
            {PROFILE.name} — passionate Informatics student at Telkom University, focusing on Big Data and Artificial Intelligence.
          </p>

          <div style={{ display: "flex", gap: 20 }}>
            <button className="btn-primary" style={{ padding: "14px 36px" }} onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View Projects
            </button>
            <button style={{
              background: "white", color: "var(--text)", padding: "14px 32px", borderRadius: "var(--pill-radius)",
              fontWeight: 600, border: "1.5px solid var(--border)", cursor: "pointer", transition: "all 0.2s",
              boxShadow: "0 5px 15px rgba(0,0,0,0.02)"
            }} onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
              Read About
            </button>
          </div>
        </div>

        {/* Right Side: Avatar with parallax */}
        <div className={`reveal-right${loaded ? " visible" : ""}`} style={{
          opacity: loaded ? 1 : 0, transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
          transition: "all 0.1s ease-out, opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s", position: "relative"
        }}>
          <div style={{
            width: "100%", aspectRatio: "1/1", borderRadius: "50%",
            background: "linear-gradient(135deg, var(--white) 0%, #e0eaff 100%)",
            boxShadow: "0 40px 100px rgba(0, 0, 0, 0.08)", border: "2px solid white",
            display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
            position: "relative"
          }}>
            <img
              src="/assets/avatar.png"
              alt="Rafi"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px) scale(1.1)`,
                transition: "transform 0.2s ease-out"
              }}
            />
          </div>

          {/* Floating Interaction Labels with individual parallax */}
          <div className="glass-card" style={{
            position: "absolute", top: "10%", left: "-15%", padding: "16px 24px", borderRadius: "24px",
            display: "flex", alignItems: "center", gap: 12, zIndex: 30,
            transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)`, transition: "transform 0.1s ease-out"
          }}>
            <span style={{ fontSize: 24 }}>🎓</span>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>Informatics Student</div>
          </div>

          <div className="glass-card" style={{
            position: "absolute", bottom: "15%", right: "-10%", padding: "16px 24px", borderRadius: "24px",
            display: "flex", alignItems: "center", gap: 12, zIndex: 30,
            transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`, transition: "transform 0.1s ease-out"
          }}>
            <span style={{ fontSize: 24 }}>🏛️</span>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>Telkom University</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 50% { border-color: transparent; } }
      `}</style>
    </section>
  );
}
