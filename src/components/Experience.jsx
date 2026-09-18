import useInView from "../hooks/useInView.js";
import { WORK_EXPERIENCES } from "../data/index.js";
import TiltCard from "./TiltCard.jsx";
import { IconBriefcase } from "./Icons.jsx";

export default function Experience() {
  const [ref, inView] = useInView(0.08);

  return (
    <section id="experience" ref={ref} className={`section-reveal${inView ? " visible" : ""}`}
      style={{ padding: "120px 6%", position: "relative", zIndex: 10, background: "transparent" }}>

      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <div className="pill-label reveal-up stagger-1">
            <span className="pill-dot" /> Professional Journey
          </div>
          <h2 className="section-heading reveal-up stagger-2" style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 800 }}>
            Pengalaman <em style={{ fontStyle: "italic", color: "var(--primary)", fontWeight: 400 }}>Kerja</em>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: 16, maxWidth: 600, margin: "16px auto 0" }}>
            Pengalaman kerja profesional dan magang di industri teknologi, e-commerce, dan BUMN Kereta Api Indonesia.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {WORK_EXPERIENCES.map((exp, i) => (
            <TiltCard key={exp.id} className={`reveal-up stagger-${i + 2} glass-card`} style={{
              borderRadius: "32px", padding: "36px", border: "1px solid var(--border)",
              background: "white", boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20, flexWrap: "wrap", marginBottom: 20 }}>
                <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: "16px",
                    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", color: "white",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 8px 20px rgba(15, 23, 42, 0.15)", flexShrink: 0
                  }}>
                    <IconBriefcase size={22} color="white" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 4 }}>
                      {exp.role}
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 15, fontWeight: 700, color: "var(--primary)" }}>{exp.company}</span>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--muted)" }} />
                      <span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 500 }}>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                  <span style={{
                    fontSize: 13, fontWeight: 700, padding: "6px 16px", borderRadius: 99,
                    background: exp.badge === "Aktif" ? "rgba(34, 197, 94, 0.1)" : "rgba(37, 99, 235, 0.08)",
                    color: exp.badge === "Aktif" ? "#16a34a" : "var(--primary)",
                    border: exp.badge === "Aktif" ? "1px solid rgba(34, 197, 94, 0.2)" : "1px solid rgba(37, 99, 235, 0.2)"
                  }}>
                    {exp.period}
                  </span>
                  <span style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>{exp.type}</span>
                </div>
              </div>

              {/* Highlights Bullet List */}
              <div style={{ marginBottom: 24, paddingLeft: 12 }}>
                <ul style={{ display: "flex", flexDirection: "column", gap: 8, paddingLeft: 16 }}>
                  {exp.highlights.map((hl, hIdx) => (
                    <li key={hIdx} style={{ fontSize: 15, color: "#475569", lineHeight: 1.7 }}>
                      {hl}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skill Tags */}
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", paddingTop: 16, borderTop: "1px solid var(--border)" }}>
                {exp.skills.map((s) => (
                  <span key={s} style={{
                    fontSize: 12, fontWeight: 600, color: "var(--primary)",
                    background: "rgba(37, 99, 235, 0.05)", padding: "5px 14px", borderRadius: 99,
                    border: "1px solid rgba(37, 99, 235, 0.1)"
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
