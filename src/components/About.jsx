import useInView from "../hooks/useInView.js";
import TiltCard from "./TiltCard.jsx";
import { EXPERIENCES } from "../data/index.js";

export default function About() {
  const [ref, inView] = useInView(0.08);
  return (
    <section id="about" ref={ref} className={`section-reveal${inView ? " visible" : ""}`}
      style={{ padding: "140px 5%", position: "relative", zIndex: 10 }}>

      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div className="pill-label reveal-up stagger-1">
            <span className="pill-dot" /> About Me
          </div>
          <h2 className="section-heading reveal-up stagger-2" style={{ fontSize: "clamp(32px, 5vw, 60px)" }}>
            Education & <em style={{ fontStyle: "italic", color: "var(--muted)", fontWeight: 400 }}>Aspirations</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          {/* Left - Graphic */}
          <div className="reveal-left stagger-3">
            <div style={{
              width: "100%", aspectRatio: "4/3",
              background: "linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)",
              borderRadius: "var(--bubble-radius)", marginBottom: 32,
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative", overflow: "hidden", border: "1px solid var(--border)",
              boxShadow: "var(--soft-shadow)"
            }}>
              <div style={{
                width: 160, height: 160,
                background: "white",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 64, boxShadow: "0 20px 60px rgba(59, 130, 246, 0.15)", zIndex: 2
              }}>🎓</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                ["📍", "Location", "Bandung, ID"],
                ["🏛️", "University", "Telkom University"],
                ["🧠", "Focus", "AI & Big Data"],
                ["📜", "Degree", "Bachelor (CS)"]
              ].map(([ic, k, v], idx) => (
                <TiltCard key={k} className={`reveal-up stagger-${idx + 3} glass-card`} style={{ borderRadius: "24px", padding: "24px" }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{ic}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "var(--muted)", marginBottom: 4, fontWeight: 600 }}>{k}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 15, color: "var(--text)" }}>{v}</div>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Right - Text */}
          <div className="reveal-right stagger-3">
            <p className="reveal-up stagger-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "var(--muted)", lineHeight: 1.8, marginBottom: 24, fontWeight: 400 }}>
              Hello! I'm <strong style={{ color: "var(--text)", fontWeight: 600 }}>Rafi Ikbar Fahrezy</strong>, a Computer Science student currently pursuing my Bachelor's degree at Telkom University.
            </p>
            <p className="reveal-up stagger-5" style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "var(--muted)", lineHeight: 1.8, marginBottom: 48, fontWeight: 400 }}>
              My academic journey is driven by a fascination with how Artificial Intelligence and Big Data can transform complex information into intelligent, actionable systems.
            </p>

            <h3 className="reveal-up stagger-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 24, color: "var(--text)", marginBottom: 32 }}>
              Academic History
            </h3>

            <div style={{ position: "relative", paddingLeft: 32 }}>
              <div style={{
                position: "absolute", left: 8, top: 4, bottom: 4, width: 2,
                background: "var(--border)", borderRadius: 99
              }} />
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className={`reveal-up stagger-${i + 6}`} style={{ marginBottom: 40, position: "relative" }}>
                  <div style={{
                    position: "absolute", left: -31, top: 6, width: 14, height: 14, borderRadius: "50%",
                    background: exp.active ? "white" : "var(--bg)", border: `3px solid ${exp.active ? "var(--primary)" : "var(--muted)"}`,
                    boxShadow: exp.active ? "0 0 0 4px rgba(59, 130, 246, 0.2)" : "none"
                  }} />

                  <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 18, color: "var(--text)", marginBottom: 4 }}>
                    {exp.role}
                  </div>
                  <div style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "center" }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "var(--primary)", fontWeight: 600 }}>{exp.company}</span>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--muted)" }} />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "var(--muted)" }}>{exp.period}</span>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--muted)", lineHeight: 1.7, fontWeight: 400 }}>
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
