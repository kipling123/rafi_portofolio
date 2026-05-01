import { useState } from "react";
import useInView from "../hooks/useInView.js";
import { SKILLS } from "../data/index.js";
import TiltCard from "./TiltCard.jsx";

const CATEGORIES = ["All", "Machine Learning", "Deep Learning", "Big Data", "Frontend", "Backend", "Tools"];

export default function Skills() {
  const [ref, inView] = useInView(0.08);
  const [cat, setCat] = useState("All");

  const filtered = cat === "All" ? SKILLS : SKILLS.filter(s => s.cat === cat);

  return (
    <section id="skills" ref={ref} className={`section-reveal${inView ? " visible" : ""}`}
      style={{ padding: "140px 8%", position: "relative", zIndex: 10, background: "white" }}>
      
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div className="pill-label">
            <span className="pill-dot" /> Expertise
          </div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, marginBottom: 40 }}>
            Technical <em style={{ fontStyle: "italic", color: "var(--muted)", fontWeight: 400 }}>Skills</em>
          </h2>

          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 60 }}>
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setCat(c)} style={{
                padding: "10px 24px", borderRadius: 99, border: "1px solid var(--border)",
                background: cat === c ? "var(--text)" : "white",
                color: cat === c ? "white" : "var(--muted)",
                fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
                boxShadow: cat === c ? "0 10px 20px rgba(0,0,0,0.1)" : "none"
              }}>{c}</button>
            ))}
          </div>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", 
          gap: "24px",
          justifyContent: "center"
        }}>
          {filtered.map((s, i) => (
            <TiltCard key={s.name} className="reveal-up glass-card" style={{
              borderRadius: "32px",
              padding: "32px 20px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              transitionDelay: `${i * 0.05}s`
            }}>
              <div style={{ 
                width: 64, height: 64, borderRadius: "20px", background: "white",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 32, boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
              }}>{s.icon}</div>
              <div style={{ fontWeight: 800, fontSize: 16, color: "var(--text)" }}>{s.name}</div>
              <div style={{ fontSize: 11, color: "var(--primary)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.cat}</div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
