import { useState, useEffect } from "react";
import { NAV_LINKS, PROFILE } from "../data/index.js";
import { IconLinkedin, IconMenu, IconX, IconExternalLink } from "./Icons.jsx";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = NAV_LINKS.map(link => link.toLowerCase());
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActive(NAV_LINKS[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goto = (sec) => {
    setActive(sec);
    setMobileMenuOpen(false);
    const id = sec.toLowerCase();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`} style={{
      position: "fixed", top: 0, left: 0, right: 0,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: scrolled ? "12px 6%" : "20px 6%",
      background: scrolled ? "rgba(255, 255, 255, 0.94)" : "rgba(255, 255, 255, 0.7)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: scrolled ? "1px solid rgba(226, 232, 240, 0.9)" : "1px solid rgba(255, 255, 255, 0.3)",
      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      zIndex: 999
    }}>
      <div className="nav-logo" onClick={() => goto("Home")} style={{ 
        display: "flex", alignItems: "center", gap: 12, cursor: "pointer" 
      }}>
        <div style={{
          width: 38, height: 38, 
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", 
          color: "white",
          display: "flex", alignItems: "center", justifyContent: "center",
          borderRadius: 10, fontWeight: 800, fontSize: 16, letterSpacing: "-0.02em",
          boxShadow: "0 6px 16px rgba(15, 23, 42, 0.15)"
        }}>RF</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontWeight: 800, fontSize: 17, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.2 }}>
            Rafi Ikbar
          </span>
          <span style={{ fontSize: 10, fontWeight: 700, color: "var(--primary)", letterSpacing: "0.08em" }}>
            PORTFOLIO
          </span>
        </div>
      </div>

      {/* Desktop Links */}
      <div style={{ display: "flex", gap: 24, alignItems: "center" }} className="desktop-links">
        {NAV_LINKS.map(n => (
          <button key={n} 
            className={`nav-link${active === n ? " active" : ""}`}
            style={{ 
              background: "none", border: "none", padding: "8px 4px", cursor: "pointer",
              color: active === n ? "var(--primary)" : "var(--muted)",
              fontWeight: active === n ? "700" : "500",
              fontSize: "14px", transition: "all 0.2s ease",
              position: "relative"
            }}
            onClick={() => goto(n)}>
            {n}
            {active === n && (
              <div style={{ 
                position: "absolute", bottom: -2, left: 0, right: 0, height: 2, 
                background: "var(--primary)", borderRadius: 2 
              }} />
            )}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="btn-primary" style={{ 
          padding: "10px 20px", fontSize: 13, display: "flex", alignItems: "center", gap: 6, textDecoration: "none"
        }}>
          <IconLinkedin size={15} color="white" />
          <span>LinkedIn</span>
          <IconExternalLink size={13} color="white" />
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          aria-label="Toggle Navigation"
          style={{
            display: "none", background: "white", border: "1px solid var(--border)",
            borderRadius: 10, padding: 8, width: 40, height: 40,
            alignItems: "center", justifyContent: "center", cursor: "pointer"
          }}>
          {mobileMenuOpen ? <IconX size={20} color="var(--text)" /> : <IconMenu size={20} color="var(--text)" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "white", borderBottom: "1px solid var(--border)",
          padding: "20px", display: "flex", flexDirection: "column", gap: 10,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
        }}>
          {NAV_LINKS.map(n => (
            <button key={n}
              onClick={() => goto(n)}
              style={{
                textAlign: "left", padding: "12px 16px", borderRadius: 10,
                background: active === n ? "rgba(37, 99, 235, 0.08)" : "transparent",
                color: active === n ? "var(--primary)" : "var(--text)",
                fontWeight: active === n ? 700 : 500,
                border: "none", cursor: "pointer", fontSize: 14
              }}>
              {n}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
