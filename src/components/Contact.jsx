import useInView from "../hooks/useInView.js";
import { PROFILE } from "../data/index.js";

export default function Contact() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="contact" ref={ref} className={`section-reveal${inView ? " visible" : ""}`}
      style={{ padding: "140px 8% 180px", position: "relative", zIndex: 10 }}>
      
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 100 }}>
        
        <div className="reveal-left">
          <div className="pill-label">
            <span className="pill-dot" /> Contact
          </div>
          <h2 style={{ fontSize: 52, fontWeight: 800, marginBottom: 32, lineHeight: 1.1 }}>
            Let's build <br /> <span style={{ color: "var(--primary)" }}>something great</span>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.8, marginBottom: 48 }}>
            I am currently looking for internship and project opportunities in AI, Machine Learning, and Big Data.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
             <a href="mailto:rafiikbar@student.telkomuniversity.ac.id" style={{ textDecoration: "none", color: "var(--text)", display: "flex", alignItems: "center", gap: 16 }}>
               <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📧</div>
               <div>
                 <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>Email</div>
                 <div style={{ fontWeight: 700 }}>rafiikbar@student.telkomuniversity.ac.id</div>
               </div>
             </a>
             <div style={{ textDecoration: "none", color: "var(--text)", display: "flex", alignItems: "center", gap: 16 }}>
               <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📍</div>
               <div>
                 <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>Location</div>
                 <div style={{ fontWeight: 700 }}>{PROFILE.location}</div>
               </div>
             </div>
          </div>
        </div>

        <div className="reveal-right">
          <form className="glass-card" style={{ display: "flex", flexDirection: "column", gap: 24, padding: 48, borderRadius: 40 }} onSubmit={e => e.preventDefault()}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <Input label="Name" placeholder="Rafi Ikbar" />
              <Input label="Email" placeholder="your@email.com" />
            </div>
            <Input label="Subject" placeholder="Inquiry about project" />
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
               <label style={{ fontSize: 13, fontWeight: 700, color: "var(--muted)" }}>Message</label>
               <textarea placeholder="How can I help you?" style={{
                 padding: "16px 20px", borderRadius: 24, border: "1.5px solid var(--border)", background: "white",
                 fontSize: 15, fontFamily: "inherit", minHeight: 140, outline: "none", transition: "all 0.2s"
               }} onFocus={e => e.target.style.borderColor = "var(--primary)"} onBlur={e => e.target.style.borderColor = "var(--border)"} />
            </div>
            <button className="btn-primary" style={{ marginTop: 12, width: "100%", padding: 20 }}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({ label, placeholder }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label style={{ fontSize: 13, fontWeight: 700, color: "var(--muted)" }}>{label}</label>
      <input type="text" placeholder={placeholder} style={{
        padding: "16px 20px", borderRadius: 99, border: "1.5px solid var(--border)", background: "var(--bg)",
        fontSize: 15, outline: "none", transition: "all 0.2s"
      }} onFocus={e => e.target.style.borderColor = "var(--primary)"} onBlur={e => e.target.style.borderColor = "var(--border)"} />
    </div>
  );
}
