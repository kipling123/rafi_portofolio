import { useState } from "react";
import useInView from "../hooks/useInView.js";
import { SKILLS } from "../data/index.js";
import TiltCard from "./TiltCard.jsx";

const CATEGORIES = ["All", "Machine Learning & AI", "Programming Languages", "Data & ETL", "Frontend Stack", "Tools & Platforms", "Soft Skills"];

export default function Skills() {
  const [ref, inView] = useInView(0.08);
  const [cat, setCat] = useState("All");

  const filtered = cat === "All" ? SKILLS : SKILLS.filter(s => s.cat === cat);

  return (
    <section id="skills" ref={ref} className={`section-reveal${inView ? " visible" : ""}`}
      style={{ padding: "120px 6%", position: "relative", zIndex: 10, background: "transparent" }}>

      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="pill-label">
            <span className="pill-dot" /> Core Technical Capabilities
          </div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 800, marginBottom: 32 }}>
            Keahlian & <em style={{ fontStyle: "italic", color: "var(--primary)", fontWeight: 400 }}>Skills</em>
          </h2>

          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", marginBottom: 50 }}>
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setCat(c)} style={{
                padding: "8px 20px", borderRadius: 99,
                border: cat === c ? "1px solid var(--primary)" : "1px solid var(--border)",
                background: cat === c ? "var(--primary)" : "white",
                color: cat === c ? "white" : "var(--muted)",
                fontSize: 13, fontWeight: 700, cursor: "pointer", transition: "all 0.2s",
                boxShadow: cat === c ? "0 8px 20px rgba(37, 99, 235, 0.25)" : "none"
              }}>{c}</button>
            ))}
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "20px",
          justifyContent: "center"
        }}>
          {filtered.map((s, i) => (
            <TiltCard key={s.name} className="reveal-up glass-card" style={{
              borderRadius: "20px",
              padding: "20px 24px",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
              border: "1px solid var(--border)",
              transitionDelay: `${(i % 6) * 0.04}s`
            }}>
              <div style={{ fontWeight: 800, fontSize: 15, color: "var(--text)" }}>{s.name}</div>
              <span style={{ 
                fontSize: 11, fontWeight: 700, color: "var(--primary)",
                background: "rgba(37, 99, 235, 0.08)", padding: "4px 12px", borderRadius: 99,
                flexShrink: 0
              }}>{s.cat}</span>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
