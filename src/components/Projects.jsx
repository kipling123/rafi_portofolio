import useInView from "../hooks/useInView.js";
import TiltCard from "./TiltCard.jsx";
import { PROJECTS } from "../data/index.js";

export default function Projects() {
  const [ref, inView] = useInView(0.08);

  return (
    <section id="projects" ref={ref} className={`section-reveal${inView ? " visible" : ""}`}
      style={{ padding: "140px 8%", position: "relative", zIndex: 10, background: "var(--bg)" }}>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div className="pill-label">
            <span className="pill-dot" /> Portfolio
          </div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800 }}>
            Selected <em style={{ fontStyle: "italic", color: "var(--muted)", fontWeight: 400 }}>Projects</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 32 }}>
          {PROJECTS.map((p, i) => (
            <TiltCard key={p.id} className={`reveal-up stagger-${(i % 3) + 2} glass-card`} style={{
              borderRadius: "40px", padding: "40px",
              height: "100%", display: "flex", flexDirection: "column"
            }}>
              <div style={{
                width: 72, height: 72, borderRadius: "24px", background: "white",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, marginBottom: 32,
                boxShadow: "0 15px 35px rgba(0,0,0,0.06)"
              }}>
                {p.emoji || "🚀"}
              </div>
              <h3 style={{ fontSize: 26, fontWeight: 800, marginBottom: 16 }}>{p.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.7, marginBottom: 32, flex: 1 }}>
                {p.desc}
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 32 }}>
                {p.tags.map(t => (
                  <span key={t} style={{ fontSize: 12, fontWeight: 600, color: "var(--primary)", background: "rgba(59, 130, 246, 0.05)", padding: "6px 16px", borderRadius: 99, border: "1px solid rgba(59, 130, 246, 0.1)" }}>{t}</span>
                ))}
              </div>
              <a href={p.link} target="_blank" rel="noreferrer" className="nav-link" style={{
                color: "var(--primary)", fontWeight: 800, textDecoration: "none", fontSize: 15, display: "flex", alignItems: "center", gap: 8
              }}>
                Explore Project <span style={{ transition: "transform 0.3s ease" }}>→</span>
              </a>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
