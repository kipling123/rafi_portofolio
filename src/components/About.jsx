import useInView from "../hooks/useInView.js";
import TiltCard from "./TiltCard.jsx";
import { PROFILE, EDUCATION, ORGANIZATIONS } from "../data/index.js";
import { 
  IconMapPin, IconGraduationCap, IconBrain, IconMail, 
  IconBriefcase
} from "./Icons.jsx";

export default function About() {
  const [ref, inView] = useInView(0.08);

  const quickInfo = [
    { label: "Lokasi", val: PROFILE.location, icon: <IconMapPin size={20} color="var(--primary)" /> },
    { label: "Universitas", val: PROFILE.university, icon: <IconGraduationCap size={20} color="var(--primary)" /> },
    { label: "Spesialisasi", val: "ML, AI & Big Data", icon: <IconBrain size={20} color="var(--primary)" /> },
    { label: "Email", val: PROFILE.email, icon: <IconMail size={20} color="var(--primary)" /> }
  ];

  return (
    <section id="about" ref={ref} className={`section-reveal${inView ? " visible" : ""}`}
      style={{ padding: "120px 6%", position: "relative", zIndex: 10, background: "transparent" }}>

      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <div className="pill-label reveal-up stagger-1">
            <span className="pill-dot" /> Profile & Background
          </div>
          <h2 className="section-heading reveal-up stagger-2" style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 800 }}>
            Tentang <em style={{ fontStyle: "italic", color: "var(--primary)", fontWeight: 400 }}>Saya</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 60, alignItems: "start", marginBottom: 80 }}>
          {/* Left Column: Quick Info Cards & Overview */}
          <div className="reveal-left stagger-3">
            <div className="glass-card" style={{
              borderRadius: "32px", padding: "36px", background: "linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)",
              border: "1px solid var(--border)", marginBottom: 32, boxShadow: "var(--soft-shadow)"
            }}>
              <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, color: "var(--text)" }}>
                Informatics Student & AI Enthusiast
              </h3>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
                {PROFILE.bio}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Machine Learning", "Big Data", "React.js / Next.js", "Python Ecosystem", "ETL Pipelines", "Computer Vision", "NLP & Transformers"].map((tag, idx) => (
                  <span key={idx} style={{
                    fontSize: 12, fontWeight: 700, color: "var(--primary)",
                    background: "white", padding: "6px 14px", borderRadius: 99,
                    border: "1px solid rgba(59, 130, 246, 0.2)", boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
                  }}>{tag}</span>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {quickInfo.map((info, idx) => (
                <TiltCard key={info.label} className={`reveal-up stagger-${idx + 3} glass-card`} style={{ borderRadius: "24px", padding: "20px" }}>
                  <div style={{ marginBottom: 10 }}>{info.icon}</div>
                  <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 4, fontWeight: 600 }}>{info.label}</div>
                  <div style={{ fontWeight: 800, fontSize: 14, color: "var(--text)", wordBreak: "break-word" }}>{info.val}</div>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="reveal-right stagger-3">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(37, 99, 235, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <IconGraduationCap size={20} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: 26, fontWeight: 800, color: "var(--text)" }}>Pendidikan</h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 48 }}>
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="glass-card" style={{
                  padding: "28px", borderRadius: "28px", border: "1px solid var(--border)",
                  position: "relative", overflow: "hidden"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, flexWrap: "wrap", gap: 8 }}>
                    <div>
                      <h4 style={{ fontSize: 18, fontWeight: 800, color: "var(--text)" }}>{edu.degree}</h4>
                      <div style={{ fontSize: 14, color: "var(--primary)", fontWeight: 700, marginTop: 2 }}>{edu.institution}</div>
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 700, background: "rgba(37, 99, 235, 0.08)", color: "var(--primary)", padding: "4px 12px", borderRadius: 99 }}>
                      {edu.period}
                    </span>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--muted)", marginBottom: 12 }}>
                    Fokus: {edu.focus}
                  </div>
                  <ul style={{ paddingLeft: 18, fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>
                    {edu.highlights.map((hl, hIdx) => (
                      <li key={hIdx} style={{ marginBottom: 4 }}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Organizational Experience */}
        <div className="reveal-up stagger-4" style={{ paddingTop: 40, borderTop: "1px solid var(--border)" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h3 style={{ fontSize: 28, fontWeight: 800, color: "var(--text)" }}>
              Pengalaman Organisasi & Komunitas
            </h3>
            <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 8 }}>
              Keterlibatan aktif dalam laboratorium riset, kegiatan kemahasiswaan, dan acara teknologi.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {ORGANIZATIONS.map((org, idx) => (
              <TiltCard key={idx} className="glass-card" style={{ padding: "24px", borderRadius: "24px", display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "14px", background: "rgba(37, 99, 235, 0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0
                }}>
                  <IconBriefcase size={20} color="var(--primary)" />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)", lineHeight: 1.3, marginBottom: 4 }}>
                    {org.role}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--primary)", fontWeight: 600, marginBottom: 2 }}>
                    {org.organization}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 500 }}>
                    {org.period}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
