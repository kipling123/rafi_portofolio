import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const goto = (sec) => {
    setActive(sec);
    const id = (sec === "Home") ? "home" : sec.toLowerCase();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`} style={{
      position: "fixed", top: 0, left: 0, right: 0,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: scrolled ? "15px 8%" : "25px 8%",
      height: scrolled ? "80px" : "100px",
      background: scrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.4)",
      backdropFilter: "blur(12px)",
      borderBottom: scrolled ? "1px solid rgba(0,0,0,0.05)" : "none",
      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      zIndex: 9999
    }}>
      <div className="nav-logo" onClick={() => goto("Home")} style={{ 
        display: "flex", alignItems: "center", gap: 12, cursor: "pointer" 
      }}>
        <div style={{
          width: 38, height: 38, background: "var(--text)", color: "white",
          display: "flex", alignItems: "center", justifyContent: "center",
          borderRadius: 12, fontWeight: 900, fontSize: 18,
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
        }}>R</div>
        <span style={{ fontWeight: 800, fontSize: 24, letterSpacing: "-0.03em", color: "var(--text)" }}>Rafi.</span>
      </div>

      <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
        {["Home", "About", "Skills", "Certifications", "Projects", "Contact"].map(n => (
          <button key={n} 
            className={`nav-link${active === n ? " active" : ""}`}
            style={{ 
              background: "none", border: "none", padding: "8px 0", cursor: "pointer",
              color: active === n ? "var(--text)" : "var(--muted)",
              fontWeight: active === n ? "700" : "500",
              fontSize: "15px", transition: "all 0.3s ease",
              position: "relative"
            }}
            onClick={() => goto(n)}>
            {n}
            {active === n && (
              <div style={{ position: "absolute", bottom: 0, left: "20%", width: "60%", height: 3, background: "var(--primary)", borderRadius: 3 }} />
            )}
          </button>
        ))}
      </div>

      <button className="btn-primary" style={{ padding: "12px 28px", fontSize: 14, boxShadow: "0 10px 20px rgba(79, 70, 229, 0.2)" }} onClick={() => goto("Contact")}>
        Reach Out
      </button>
    </nav>
  );
}
