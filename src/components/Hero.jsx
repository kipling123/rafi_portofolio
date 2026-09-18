import { useState, useEffect } from "react";
import useTyping from "../hooks/useTyping.js";
import { PROFILE, TYPING_WORDS, STATS } from "../data/index.js";
import {
  IconGithub, IconLinkedin, IconMail, IconGraduationCap,
  IconBriefcase, IconAward, IconArrowRight
} from "./Icons.jsx";

export default function Hero() {
  const typing = useTyping(TYPING_WORDS);
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setLoaded(true);
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "130px 6% 60px", position: "relative", zIndex: 10
    }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 60, alignItems: "center" }}>

        {/* Left Side: Content */}
        <div className={`reveal-left${loaded ? " visible" : ""}`} style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateX(0)" : "translateX(-40px)",
          transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
          position: "relative", zIndex: 20
        }}>
          {/* Status Badge */}
          <div className="pill-label glass-card" style={{ marginBottom: 20 }}>
            <span className="pill-dot" /> Available for Machine Learning, AI & Web Development Projects
          </div>

          <h1 style={{
            fontSize: "clamp(40px, 5.5vw, 66px)", fontWeight: 900, color: "var(--text)",
            lineHeight: 1.08, marginBottom: 32, letterSpacing: "-0.03em"
          }}>
            {PROFILE.name} <br />
            <span style={{
              background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #1d4ed8 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}>
              {typing}
            </span>
            <span style={{ animation: "blink 1s infinite", borderRight: "3px solid var(--primary)", marginLeft: 6 }} />
          </h1>

          {/* Social Links & Quick Contact */}
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 36, flexWrap: "wrap" }}>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="social-chip" style={{
              display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 99,
              background: "white", border: "1px solid var(--border)", fontSize: 13, fontWeight: 600, color: "var(--text)",
              textDecoration: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.02)", transition: "all 0.2s"
            }}>
              <IconGithub size={16} color="var(--text)" /> GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="social-chip" style={{
              display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 99,
              background: "white", border: "1px solid var(--border)", fontSize: 13, fontWeight: 600, color: "var(--text)",
              textDecoration: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.02)", transition: "all 0.2s"
            }}>
              <IconLinkedin size={16} color="var(--primary)" /> LinkedIn
            </a>
            <a href={`mailto:${PROFILE.email}`} className="social-chip" style={{
              display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 99,
              background: "white", border: "1px solid var(--border)", fontSize: 13, fontWeight: 600, color: "var(--text)",
              textDecoration: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.02)", transition: "all 0.2s"
            }}>
              <IconMail size={16} color="var(--muted)" /> {PROFILE.email}
            </a>
          </div>

          {/* Action CTA buttons */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 48 }}>
            <button className="btn-primary" style={{ padding: "14px 32px", fontSize: 14, display: "flex", alignItems: "center", gap: 10 }} onClick={() => scrollTo("projects")}>
              <span>View Selected Projects</span>
              <IconArrowRight size={16} color="white" />
            </button>
            <button style={{
              background: "white", color: "var(--text)", padding: "14px 28px", borderRadius: "var(--pill-radius)",
              fontWeight: 600, border: "1.5px solid var(--border)", cursor: "pointer", transition: "all 0.2s",
              boxShadow: "0 5px 15px rgba(0,0,0,0.02)", fontSize: 14, display: "flex", alignItems: "center", gap: 8
            }} onClick={() => scrollTo("experience")}>
              <span>Work Experience</span>
            </button>
          </div>

          {/* Key Stats Counter Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
            {STATS.map((st, i) => (
              <div key={i}>
                <div style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 900, color: "var(--primary)", lineHeight: 1 }}>
                  {st.n}{st.s}
                </div>
                <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600, whiteSpace: "pre-line", marginTop: 4 }}>
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Avatar & Feature Badges */}
        <div className={`reveal-right${loaded ? " visible" : ""}`} style={{
          opacity: loaded ? 1 : 0,
          transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
          transition: "all 0.1s ease-out, opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          position: "relative"
        }}>
          <div style={{
            width: "100%", aspectRatio: "1/1", borderRadius: "50%",
            background: "linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)",
            boxShadow: "0 30px 80px rgba(37, 99, 235, 0.12)", border: "4px solid white",
            display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
            position: "relative"
          }}>
            <img
              src="/assets/avatar.png"
              alt="Rafi Ikbar Fahrezy"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.innerHTML = `<div style="font-size:36px; font-weight:800; color:var(--primary);">RF</div>`;
              }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transform: `translate(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px) scale(1.05)`,
                transition: "transform 0.2s ease-out"
              }}
            />
          </div>

          {/* Floating Corporate Badges */}
          <div className="glass-card" style={{
            position: "absolute", top: "8%", left: "-10%", padding: "14px 20px", borderRadius: "20px",
            display: "flex", alignItems: "center", gap: 12, zIndex: 30,
            transform: `translate(${-mousePos.x * 0.8}px, ${-mousePos.y * 0.8}px)`, transition: "transform 0.1s ease-out"
          }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(37, 99, 235, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IconGraduationCap size={20} color="var(--primary)" />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)" }}>Telkom University</div>
              <div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 500 }}>S1 Informatika (2024-2028)</div>
            </div>
          </div>

          <div className="glass-card" style={{
            position: "absolute", bottom: "10%", right: "-8%", padding: "14px 20px", borderRadius: "20px",
            display: "flex", alignItems: "center", gap: 12, zIndex: 30,
            transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)`, transition: "transform 0.1s ease-out"
          }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(37, 99, 235, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IconBriefcase size={20} color="var(--primary)" />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)" }}>Machine Learning & Big Data</div>
              <div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 500 }}>Enthusiasts</div>
            </div>
          </div>

          <div className="glass-card" style={{
            position: "absolute", bottom: "-5%", left: "10%", padding: "12px 18px", borderRadius: "20px",
            display: "flex", alignItems: "center", gap: 10, zIndex: 30,
            transform: `translate(${mousePos.x * 0.5}px, ${-mousePos.y * 0.5}px)`, transition: "transform 0.1s ease-out"
          }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(37, 99, 235, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IconAward size={18} color="var(--primary)" />
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 800, color: "var(--text)" }}>Lolos Internal kampus Divisi 8 SoftDev</div>
              <div style={{ fontSize: 10, color: "var(--primary)", fontWeight: 700 }}>Gemastik 2026</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 50% { border-color: transparent; } }
      `}</style>
    </section>
  );
}
