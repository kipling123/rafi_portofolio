import useInView from "../hooks/useInView.js";
import TiltCard from "./TiltCard.jsx";
import { CERTIFICATIONS } from "../data/index.js";
import { IconAward } from "./Icons.jsx";

export default function Certifications() {
  const [ref, inView] = useInView(0.06);

  return (
    <section id="certifications" ref={ref} className={`section-reveal${inView ? " visible" : ""}`}
      style={{ padding: "120px 6%", position: "relative", zIndex: 10, background: "transparent" }}>

      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="pill-label reveal-up stagger-1">
            <span className="pill-dot" /> Verified Qualifications
          </div>
          <h2 className="section-heading reveal-up stagger-2" style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 800 }}>
            Pelatihan & <em style={{ fontStyle: "italic", color: "var(--primary)", fontWeight: 400 }}>Sertifikasi</em>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: 16, maxWidth: 600, margin: "16px auto 0" }}>
            Sertifikasi resmi dari Microsoft, AWS, dan Dicoding Indonesia di bidang Artificial Intelligence & Web Engineering.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {CERTIFICATIONS.map((cert, i) => (
            <TiltCard key={i} className={`reveal-up stagger-${(i % 3) + 2} glass-card`} style={{
              padding: "32px", borderRadius: "32px",
              display: "flex", gap: "20px", alignItems: "flex-start",
              background: "white", border: "1px solid var(--border)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: "16px",
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", color: "white", display: "flex",
                alignItems: "center", justifyContent: "center",
                flexShrink: 0, boxShadow: "0 6px 16px rgba(15, 23, 42, 0.12)"
              }}>
                <IconAward size={22} color="white" />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6, flexWrap: "wrap", gap: 6 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "var(--primary)", background: "rgba(37, 99, 235, 0.08)", padding: "3px 10px", borderRadius: 99 }}>
                    {cert.badge}
                  </span>
                  <span style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>{cert.date}</span>
                </div>

                <h3 style={{ fontWeight: 800, fontSize: 18, color: "var(--text)", marginBottom: 6, lineHeight: 1.35 }}>
                  {cert.title}
                </h3>

                <div style={{ fontSize: 14, color: "var(--primary)", fontWeight: 700, marginBottom: 16 }}>
                  {cert.issuer}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {cert.skills.map(s => (
                    <span key={s} style={{
                      fontSize: 11, fontWeight: 600, color: "var(--muted)",
                      background: "var(--bg)", padding: "4px 10px", borderRadius: "99px", border: "1px solid var(--border)"
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
