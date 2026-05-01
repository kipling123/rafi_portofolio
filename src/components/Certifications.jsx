import useInView from "../hooks/useInView.js";
import TiltCard from "./TiltCard.jsx";
import { CERTIFICATIONS } from "../data/index.js";

export default function Certifications() {
    const [ref, inView] = useInView(0.06);

    return (
        <section id="certificates" ref={ref} className={`section-reveal${inView ? " visible" : ""}`}
            style={{ padding: "140px 5%", position: "relative", zIndex: 10, background: "white" }}>

            <div style={{ maxWidth: 1120, margin: "0 auto" }}>

                <div style={{ textAlign: "center", marginBottom: 80 }}>
                    <div className="pill-label reveal-up stagger-1">
                        <span className="pill-dot" /> Achievements
                    </div>
                    <h2 className="section-heading reveal-up stagger-2" style={{ fontSize: "clamp(32px, 5vw, 60px)" }}>
                        Licenses & <em style={{ fontStyle: "italic", color: "var(--muted)", fontWeight: 400 }}>Certificates</em>
                    </h2>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
                    {CERTIFICATIONS.map((cert, i) => (
                        <TiltCard key={i} className={`reveal-up stagger-${(i % 3) + 3} glass-card`} style={{
                            padding: "32px",
                            borderRadius: "32px",
                            display: "flex",
                            gap: "24px",
                            alignItems: "center"
                        }}>
                            <div style={{
                                width: 80, height: 80, borderRadius: "24px",
                                background: "white", display: "flex",
                                alignItems: "center", justifyContent: "center",
                                fontSize: 36, flexShrink: 0,
                                boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
                            }}>
                                {cert.icon}
                            </div>

                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 18, color: "var(--text)", marginBottom: 8, lineHeight: 1.3 }}>
                                    {cert.title}
                                </h3>
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "var(--primary)", fontWeight: 700 }}>{cert.issuer}</span>
                                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--border)" }} />
                                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "var(--muted)" }}>{cert.date}</span>
                                </div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                    {cert.skills.map(s => (
                                        <span key={s} style={{
                                            fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: "var(--muted)",
                                            background: "rgba(0,0,0,0.03)", padding: "5px 12px", borderRadius: "99px", border: "1px solid var(--border)"
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
