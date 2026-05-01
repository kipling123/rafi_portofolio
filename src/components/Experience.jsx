import { EXPERIENCES } from "../data/index.js";

export default function Experience() {
  const dotColors = ["#34a853", "#ea4335", "#34a853"];
  const durations = ["28 Mim", "23 Juln", "17 Erlin"];

  return (
    <div style={{ flex: 1 }}>
      <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: 56, color: "var(--text)", marginBottom: 40, letterSpacing: "-0.04em" }}>
        Experience
      </h2>

      <div style={{ position: "relative", paddingLeft: 40, borderLeft: "2.5px solid #f1f5f9", marginLeft: 10 }}>
        {EXPERIENCES.slice(0, 3).map((exp, i) => (
          <div key={i} className={`reveal-up stagger-${i}`} style={{ marginBottom: 60, position: "relative" }}>
            <div style={{
              position: "absolute", left: -49, top: 4, width: 16, height: 16, borderRadius: "50%",
              background: dotColors[i % dotColors.length],
              border: "4px solid white",
              boxShadow: "0 0 0 1.5px #f1f5f9"
            }} />
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <div>
                <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 22, color: "var(--text)", letterSpacing: "-0.01em" }}>{exp.company}</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "var(--text)", fontWeight: 700, marginTop: 4 }}>{exp.role}</p>
              </div>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "var(--text)", fontWeight: 700 }}>{durations[i]}</span>
            </div>
            
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "var(--muted)", lineHeight: 1.8, marginBottom: 16, fontWeight: 500, maxWidth: "90%" }}>
              Developers emancipatos now expected positions and entire consuming production, importance and mencer eatsw to realisme in communies.
            </p>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "var(--muted)", fontWeight: 600 }}>
              Sep 2023 - Feb 2023
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
