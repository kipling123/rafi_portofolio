import { useState } from "react";
import useInView from "../hooks/useInView.js";
import TiltCard from "./TiltCard.jsx";
import { PROJECTS, PROFILE } from "../data/index.js";
import { IconExternalLink, IconGithub, IconCode } from "./Icons.jsx";

const PROJECT_CATEGORIES = ["All", "Machine Learning & AI", "Web & Mobile Development", "Data Engineering & ETL"];

export default function Projects() {
  const [ref, inView] = useInView(0.08);
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="projects" ref={ref} className={`section-reveal${inView ? " visible" : ""}`}
      style={{ padding: "120px 6%", position: "relative", zIndex: 10, background: "transparent" }}>

      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="pill-label">
            <span className="pill-dot" /> Innovation Showcase
          </div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 800, marginBottom: 24 }}>
            Proyek <em style={{ fontStyle: "italic", color: "var(--primary)", fontWeight: 400 }}>Pilihan</em>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: 16, maxWidth: 640, margin: "0 auto 40px" }}>
            Koleksi proyek Machine Learning, Computer Vision, Deep Learning NLP, Web Stack, dan Data Engineering.
          </p>

          {/* Category Filter Tabs */}
          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", marginBottom: 50 }}>
            {PROJECT_CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveTab(cat)} style={{
                padding: "10px 22px", borderRadius: 99,
                border: activeTab === cat ? "1px solid var(--primary)" : "1px solid var(--border)",
                background: activeTab === cat ? "var(--primary)" : "white",
                color: activeTab === cat ? "white" : "var(--muted)",
                fontSize: 13, fontWeight: 700, cursor: "pointer", transition: "all 0.2s",
                boxShadow: activeTab === cat ? "0 8px 20px rgba(37, 99, 235, 0.25)" : "none"
              }}>
                {cat} ({cat === "All" ? PROJECTS.length : PROJECTS.filter(p => p.category === cat).length})
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 28 }}>
          {filteredProjects.map((p, i) => (
            <TiltCard key={p.id} className="reveal-up glass-card" style={{
              borderRadius: "32px", padding: "32px",
              height: "100%", display: "flex", flexDirection: "column",
              background: "white", border: "1px solid var(--border)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
              transitionDelay: `${(i % 3) * 0.08}s`
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: "16px", background: "rgba(37, 99, 235, 0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.02)"
                }}>
                  <IconCode size={22} color="var(--primary)" />
                </div>
                <span style={{
                  fontSize: 11, fontWeight: 700, color: "var(--primary)", background: "rgba(37, 99, 235, 0.08)",
                  padding: "4px 12px", borderRadius: 99, border: "1px solid rgba(37, 99, 235, 0.15)"
                }}>
                  {p.category}
                </span>
              </div>

              <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12, color: "var(--text)", lineHeight: 1.35 }}>
                {p.title}
              </h3>

              <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7, marginBottom: 20, flex: 1 }}>
                {p.desc}
              </p>

              {/* Highlights */}
              {p.highlights && p.highlights.length > 0 && (
                <div style={{ marginBottom: 20, background: "var(--bg)", padding: "12px 16px", borderRadius: "16px", border: "1px solid var(--border)" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", marginBottom: 6, textTransform: "uppercase" }}>Fitur Utama</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {p.highlights.map((hl, hIdx) => (
                      <span key={hIdx} style={{ fontSize: 12, color: "var(--text)", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                        <span style={{ color: "var(--primary)" }}>•</span> {hl}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                {p.tags.map(t => (
                  <span key={t} style={{
                    fontSize: 11, fontWeight: 600, color: "var(--primary)",
                    background: "rgba(37, 99, 235, 0.05)", padding: "5px 12px", borderRadius: 99,
                    border: "1px solid rgba(37, 99, 235, 0.1)"
                  }}>{t}</span>
                ))}
              </div>

              <div style={{ paddingTop: 16, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <a href={p.link || PROFILE.github} target="_blank" rel="noreferrer" style={{
                  color: "var(--primary)", fontWeight: 800, textDecoration: "none", fontSize: 13, display: "flex", alignItems: "center", gap: 6
                }}>
                  <IconGithub size={15} color="var(--primary)" />
                  <span>Lihat Proyek di GitHub</span>
                  <IconExternalLink size={13} color="var(--primary)" />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
