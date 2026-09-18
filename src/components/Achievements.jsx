import useInView from "../hooks/useInView.js";
import TiltCard from "./TiltCard.jsx";
import { ACHIEVEMENTS } from "../data/index.js";
import { IconAward } from "./Icons.jsx";

export default function Achievements() {
  const [ref, inView] = useInView(0.06);

  return (
    <section id="achievements" ref={ref} className={`section-reveal${inView ? " visible" : ""}`}
      style={{ padding: "120px 6%", position: "relative", zIndex: 10, background: "transparent" }}>

      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="pill-label reveal-up stagger-1">
            <span className="pill-dot" /> Honors & Awards
          </div>
          <h2 className="section-heading reveal-up stagger-2" style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 800 }}>
            Pencapaian & <em style={{ fontStyle: "italic", color: "var(--primary)", fontWeight: 400 }}>Kompetisi</em>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: 16, maxWidth: 640, margin: "16px auto 0" }}>
            Penghargaan dari kompetisi Kaggle Deep Learning, AI Bootcamp, Web Design, dan tugas riset laboratorium.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
          {ACHIEVEMENTS.map((ach, i) => (
            <TiltCard key={i} className={`reveal-up stagger-${(i % 3) + 2} glass-card`} style={{
              padding: "32px", borderRadius: "32px",
              display: "flex", flexDirection: "column", gap: 16,
              background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
              border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{
                  width: 48, height: 48, borderRadius: "16px",
                  background: "rgba(37, 99, 235, 0.08)", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  flexShrink: 0, boxShadow: "0 6px 16px rgba(0,0,0,0.02)"
                }}>
                  <IconAward size={22} color="var(--primary)" />
                </div>
                <span style={{
                  fontSize: 12, fontWeight: 800, color: "var(--primary)",
                  background: "rgba(37, 99, 235, 0.08)", padding: "5px 14px", borderRadius: 99,
                  border: "1px solid rgba(37, 99, 235, 0.15)"
                }}>
                  {ach.badge}
                </span>
              </div>

              <div>
                <h3 style={{ fontWeight: 800, fontSize: 18, color: "var(--text)", marginBottom: 6, lineHeight: 1.35 }}>
                  {ach.title}
                </h3>
                <div style={{ fontSize: 13, color: "var(--primary)", fontWeight: 700, marginBottom: 12 }}>
                  {ach.organizer}
                </div>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>
                  {ach.desc}
                </p>
              </div>

              <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "1px solid var(--border)" }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: "var(--muted)", textTransform: "uppercase" }}>
                  Kategori: {ach.category}
                </span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
