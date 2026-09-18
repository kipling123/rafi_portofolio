import { useState } from "react";
import useInView from "../hooks/useInView.js";
import { PROFILE } from "../data/index.js";
import { 
  IconMail, IconLinkedin, IconGithub, IconGlobe, 
  IconMapPin, IconArrowRight, IconCheckCircle 
} from "./Icons.jsx";

export default function Contact() {
  const [ref, inView] = useInView(0.1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 5000);
    }
  };

  return (
    <section id="contact" ref={ref} className={`section-reveal${inView ? " visible" : ""}`}
      style={{ padding: "120px 6% 160px", position: "relative", zIndex: 10, background: "transparent" }}>
      
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 60, alignItems: "start" }}>
        
        <div className="reveal-left">
          <div className="pill-label">
            <span className="pill-dot" /> Contact & Collaboration
          </div>
          <h2 style={{ fontSize: "clamp(36px, 4.5vw, 54px)", fontWeight: 800, marginBottom: 24, lineHeight: 1.1 }}>
            Mari Berkolaborasi <br /> <span style={{ color: "var(--primary)" }}>& Terhubung</span>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>
            Saya terbuka untuk peluang magang, riset kolaboratif, serta proyek di bidang Machine Learning, Artificial Intelligence, Big Data, dan Frontend Web Development.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
             <a href={`mailto:${PROFILE.email}`} style={{ textDecoration: "none", color: "var(--text)", display: "flex", alignItems: "center", gap: 16 }} className="contact-item">
               <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(37, 99, 235, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                 <IconMail size={22} color="var(--primary)" />
               </div>
               <div>
                 <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>Email Utama</div>
                 <div style={{ fontWeight: 800, fontSize: 15 }}>{PROFILE.email}</div>
               </div>
             </a>

             <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "var(--text)", display: "flex", alignItems: "center", gap: 16 }} className="contact-item">
               <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(37, 99, 235, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                 <IconLinkedin size={22} color="var(--primary)" />
               </div>
               <div>
                 <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>LinkedIn</div>
                 <div style={{ fontWeight: 800, fontSize: 15 }}>linkedin.com/in/rafi-ikbar-fahrezy</div>
               </div>
             </a>

             <a href={PROFILE.github} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "var(--text)", display: "flex", alignItems: "center", gap: 16 }} className="contact-item">
               <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(37, 99, 235, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                 <IconGithub size={22} color="var(--primary)" />
               </div>
               <div>
                 <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>GitHub</div>
                 <div style={{ fontWeight: 800, fontSize: 15 }}>github.com/kipling123</div>
               </div>
             </a>

             <a href={PROFILE.website} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "var(--text)", display: "flex", alignItems: "center", gap: 16 }} className="contact-item">
               <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(37, 99, 235, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                 <IconGlobe size={22} color="var(--primary)" />
               </div>
               <div>
                 <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>Live Portfolio</div>
                 <div style={{ fontWeight: 800, fontSize: 15 }}>rafi-portofolio-five.vercel.app</div>
               </div>
             </a>

             <div style={{ textDecoration: "none", color: "var(--text)", display: "flex", alignItems: "center", gap: 16 }}>
               <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(37, 99, 235, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                 <IconMapPin size={22} color="var(--primary)" />
               </div>
               <div>
                 <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>Domisili</div>
                 <div style={{ fontWeight: 800, fontSize: 15 }}>{PROFILE.location}</div>
               </div>
             </div>
          </div>
        </div>

        <div className="reveal-right">
          <form className="glass-card" style={{ 
            display: "flex", flexDirection: "column", gap: 20, padding: 40, borderRadius: 36,
            background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
            border: "1px solid var(--border)", boxShadow: "0 20px 50px rgba(0,0,0,0.04)"
          }} onSubmit={handleSubmit}>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 4 }}>Kirim Pesan Direct</h3>
            <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 12 }}>Isi formulir di bawah ini untuk menghubungi Rafi secara langsung.</p>

            {submitted ? (
              <div style={{ padding: 20, background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", borderRadius: 20, color: "#16a34a", textAlign: "center", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                <IconCheckCircle size={20} color="#16a34a" />
                <span>Pesan berhasil terkirim! Terima kasih telah menghubungi Rafi.</span>
              </div>
            ) : (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Input label="Nama Lengkap *" placeholder="Nama Anda" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                  <Input label="Alamat Email *" type="email" placeholder="email@domain.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                </div>
                <Input label="Subjek / Perihal" placeholder="Peluang Proyek / Magang / Diskusi" value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} />
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                   <label style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>Pesan Anda *</label>
                   <textarea placeholder="Tuliskan detail pesan atau pertanyaan Anda..." required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} style={{
                     padding: "14px 18px", borderRadius: 20, border: "1.5px solid var(--border)", background: "white",
                     fontSize: 14, fontFamily: "inherit", minHeight: 120, outline: "none", transition: "all 0.2s"
                   }} onFocus={e => e.target.style.borderColor = "var(--primary)"} onBlur={e => e.target.style.borderColor = "var(--border)"} />
                </div>
                <button type="submit" className="btn-primary" style={{ marginTop: 8, width: "100%", padding: "16px", fontSize: 14, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                  <span>Kirim Pesan Sekarang</span>
                  <IconArrowRight size={16} color="white" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({ label, placeholder, type = "text", value, onChange, required = false }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} required={required} style={{
        padding: "14px 18px", borderRadius: 99, border: "1.5px solid var(--border)", background: "white",
        fontSize: 14, outline: "none", transition: "all 0.2s"
      }} onFocus={e => e.target.style.borderColor = "var(--primary)"} onBlur={e => e.target.style.borderColor = "var(--border)"} />
    </div>
  );
}
