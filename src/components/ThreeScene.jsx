import { useEffect, useRef } from "react";

const CODE_FILES = [
  {
    fileName: "indobert_classifier.py",
    tag: "Python / AI",
    lines: [
      { num: "01", tokens: [{ text: "import ", color: "#d946ef" }, { text: "torch", color: "#2563eb" }, { text: ", ", color: "#64748b" }, { text: "transformers", color: "#059669" }] },
      { num: "02", tokens: [{ text: "model ", color: "#2563eb" }, { text: "= ", color: "#64748b" }, { text: "IndoBERT", color: "#d97706" }, { text: ".from_pretrained(", color: "#64748b" }, { text: '"indobenchmark/indobert-base-p1"', color: "#059669" }, { text: ")", color: "#64748b" }] },
      { num: "03", tokens: [{ text: "outputs ", color: "#2563eb" }, { text: "= ", color: "#64748b" }, { text: "model", color: "#2563eb" }, { text: "(inputs, ", color: "#64748b" }, { text: "attention_mask", color: "#d97706" }, { text: "=mask)", color: "#64748b" }] }
    ],
    top: "10%", left: "5%", scale: 0.9, delay: 0
  },
  {
    fileName: "useAnalytics.ts",
    tag: "React / Frontend",
    lines: [
      { num: "01", tokens: [{ text: "const ", color: "#d946ef" }, { text: "[data, setData] ", color: "#2563eb" }, { text: "= ", color: "#64748b" }, { text: "useState", color: "#d97706" }, { text: "<Metric[]>([]);", color: "#64748b" }] },
      { num: "02", tokens: [{ text: "useEffect", color: "#d97706" }, { text: "(() => { ", color: "#64748b" }, { text: "fetchTelemetry", color: "#2563eb" }, { text: "().then(setData); }, []);", color: "#64748b" }] }
    ],
    top: "20%", left: "73%", scale: 0.95, delay: 1.2
  },
  {
    fileName: "pyspark_pipeline.py",
    tag: "PySpark / Big Data",
    lines: [
      { num: "01", tokens: [{ text: "# Telkom Big Data Pipeline", color: "#94a3b8" }] },
      { num: "02", tokens: [{ text: "df_logs ", color: "#2563eb" }, { text: "= ", color: "#64748b" }, { text: "spark", color: "#2563eb" }, { text: ".read.parquet(", color: "#64748b" }, { text: '"hdfs://cluster/telemetry"', color: "#059669" }, { text: ")", color: "#64748b" }] },
      { num: "03", tokens: [{ text: "df_logs", color: "#2563eb" }, { text: ".groupBy(", color: "#64748b" }, { text: '"region"', color: "#059669" }, { text: ").count().show()", color: "#d97706" }] }
    ],
    top: "40%", left: "8%", scale: 0.88, delay: 2.1
  },
  {
    fileName: "query_logs.sql",
    tag: "PostgreSQL",
    lines: [
      { num: "01", tokens: [{ text: "SELECT ", color: "#d946ef" }, { text: "region_id, ", color: "#2563eb" }, { text: "COUNT", color: "#d97706" }, { text: "(*) ", color: "#64748b" }, { text: "AS ", color: "#d946ef" }, { text: "active_nodes", color: "#059669" }] },
      { num: "02", tokens: [{ text: "FROM ", color: "#d946ef" }, { text: "cluster_logs ", color: "#2563eb" }, { text: "WHERE ", color: "#d946ef" }, { text: "status = 200", color: "#059669" }] }
    ],
    top: "58%", left: "76%", scale: 0.92, delay: 0.7
  },
  {
    fileName: "train_resnet.py",
    tag: "Deep Learning",
    lines: [
      { num: "01", tokens: [{ text: "optimizer ", color: "#2563eb" }, { text: "= ", color: "#64748b" }, { text: "AdamW", color: "#d97706" }, { text: "(model.parameters(), lr=", color: "#64748b" }, { text: "1e-4", color: "#d97706" }, { text: ")", color: "#64748b" }] },
      { num: "02", tokens: [{ text: "loss ", color: "#2563eb" }, { text: "= ", color: "#64748b" }, { text: "criterion", color: "#d97706" }, { text: "(predictions, targets)", color: "#64748b" }] },
      { num: "03", tokens: [{ text: "loss", color: "#2563eb" }, { text: ".backward(); ", color: "#64748b" }, { text: "optimizer", color: "#2563eb" }, { text: ".step()", color: "#d97706" }] }
    ],
    top: "74%", left: "12%", scale: 0.9, delay: 1.8
  },
  {
    fileName: "docker-compose.yml",
    tag: "Docker / Microservices",
    lines: [
      { num: "01", tokens: [{ text: "services:", color: "#d946ef" }] },
      { num: "02", tokens: [{ text: "  ai-service:", color: "#2563eb" }] },
      { num: "03", tokens: [{ text: "    image: ", color: "#64748b" }, { text: "telkom-ai-core:latest", color: "#059669" }] }
    ],
    top: "84%", left: "65%", scale: 0.85, delay: 2.8
  },
  {
    fileName: "dijkstra.cpp",
    tag: "Algorithms / C++",
    lines: [
      { num: "01", tokens: [{ text: "priority_queue", color: "#d946ef" }, { text: "<pair<int, int>> pq;", color: "#64748b" }] },
      { num: "02", tokens: [{ text: "pq.push({", color: "#64748b" }, { text: "0, start_node", color: "#2563eb" }, { text: "});", color: "#64748b" }] }
    ],
    top: "14%", left: "42%", scale: 0.85, delay: 2.5
  },
  {
    fileName: "Portfolio.jsx",
    tag: "Next.js / App",
    lines: [
      { num: "01", tokens: [{ text: "export default ", color: "#d946ef" }, { text: "function ", color: "#d946ef" }, { text: "App", color: "#2563eb" }, { text: "() {", color: "#64748b" }] },
      { num: "02", tokens: [{ text: "  return ", color: "#d946ef" }, { text: "<Hero ", color: "#d97706" }, { text: "developer=", color: "#2563eb" }, { text: '"Rafi Ikbar"', color: "#059669" }, { text: " />", color: "#d97706" }] },
      { num: "03", tokens: [{ text: "}", color: "#64748b" }] }
    ],
    top: "48%", left: "45%", scale: 0.9, delay: 1.5
  }
];

export default function ThreeScene({ mouse }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Background Code Stream / Matrix Canvas Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "010101<>/{}=+*[];()def class import const let function return tensor model select from where".split(" ");
    const fontSize = 14;
    const columns = Math.floor(canvas.width / (fontSize * 2.5));
    const drops = Array.from({ length: columns }, () => Math.random() * -100);

    const draw = () => {
      ctx.fillStyle = "rgba(248, 250, 252, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `600 ${fontSize}px 'JetBrains Mono', 'Fira Code', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * (fontSize * 2.5);
        const y = drops[i] * fontSize;

        // Soft blue/slate code stream text
        ctx.fillStyle = i % 3 === 0 ? "rgba(37, 99, 235, 0.12)" : "rgba(71, 85, 105, 0.08)";
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.4;
      }
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Parallax animation on mouse move
  useEffect(() => {
    let rafId;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      if (mouse?.current) {
        currentX += (mouse.current.x * 20 - currentX) * 0.05;
        currentY += (mouse.current.y * 20 - currentY) * 0.05;

        if (containerRef.current) {
          containerRef.current.style.transform = `translate3d(${currentX}px, ${-currentY}px, 0)`;
        }
      }
      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [mouse]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden"
      }}
    >
      {/* Background Matrix/Code Stream Canvas - Soft & Faded */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.35
        }}
      />

      {/* Tech Grid Pattern - Subtle & Clean */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(37, 99, 235, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          pointerEvents: "none"
        }}
      />

      {/* Floating VS Code IDE Snippets - Soft Faded Glass */}
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          willChange: "transform",
          transition: "transform 0.1s ease-out",
          opacity: 0.45
        }}
      >
        {CODE_FILES.map((file, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: file.top,
              left: file.left,
              transform: `scale(${file.scale})`,
              background: "rgba(255, 255, 255, 0.88)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(226, 232, 240, 0.95)",
              borderRadius: "12px",
              boxShadow: "0 12px 32px rgba(37, 99, 235, 0.07), 0 2px 6px rgba(0, 0, 0, 0.02)",
              fontFamily: "'Fira Code', 'JetBrains Mono', 'Consolas', monospace",
              fontSize: "12px",
              minWidth: "260px",
              maxWidth: "360px",
              overflow: "hidden",
              animation: `floatCode 7s ease-in-out infinite alternate`,
              animationDelay: `${file.delay}s`
            }}
          >
            {/* Window Top Bar / Tabs */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "rgba(241, 245, 249, 0.9)",
                padding: "7px 12px",
                borderBottom: "1px solid rgba(226, 232, 240, 0.8)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {/* Traffic lights */}
                <div style={{ display: "flex", gap: 5 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ef4444" }} />
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f59e0b" }} />
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981" }} />
                </div>
                {/* File Tab */}
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#334155" }}>
                  {file.fileName}
                </span>
              </div>
              <span
                style={{
                  fontSize: "9px",
                  fontWeight: 800,
                  color: "#2563eb",
                  background: "rgba(37, 99, 235, 0.08)",
                  padding: "2px 8px",
                  borderRadius: "99px",
                  letterSpacing: "0.04em"
                }}
              >
                {file.tag}
              </span>
            </div>

            {/* Code Body with Line Numbers */}
            <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: 4 }}>
              {file.lines.map((line, lIdx) => (
                <div key={lIdx} style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                  <span
                    style={{
                      fontSize: "10px",
                      color: "#94a3b8",
                      userSelect: "none",
                      width: "16px",
                      textAlign: "right",
                      flexShrink: 0
                    }}
                  >
                    {line.num}
                  </span>
                  <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {line.tokens.map((tok, tIdx) => (
                      <span key={tIdx} style={{ color: tok.color, fontWeight: 600 }}>
                        {tok.text}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes floatCode {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          100% {
            transform: translateY(-16px) rotate(0.8deg);
          }
        }
      `}</style>
    </div>
  );
}

