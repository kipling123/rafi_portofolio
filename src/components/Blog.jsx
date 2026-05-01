import useInView from "../hooks/useInView.js";

export default function Blog() {
  const [ref, inView] = useInView(0.08);

  return (
    <section id="blog" ref={ref} className={`section-reveal${inView ? " visible" : ""}`}
      style={{ padding: "120px 8%", position: "relative", zIndex: 10, background: "white", textAlign: "center" }}>
      
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 48, color: "var(--text)", marginBottom: 24 }}>
          Latest <span style={{ color: "var(--blue)" }}>Blogs</span>
        </h2>
        <p style={{ color: "var(--muted)", fontSize: 18, fontWeight: 500, marginBottom: 48 }}>
          Coming soon! I'll be sharing my thoughts on AI, Machine Learning, and Web Development.
        </p>
      </div>
    </section>
  );
}
