import { useRef } from "react";

export default function TiltCard({ children, style={}, className="", onClick, onMouseEnter, onMouseLeave }) {
  const ref  = useRef();
  const glow = useRef();

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX-r.left)/r.width  - 0.5;
    const y = (e.clientY-r.top) /r.height - 0.5;
    ref.current.style.transform = `perspective(800px) rotateY(${x*16}deg) rotateX(${-y*12}deg) scale3d(1.03,1.03,1.03)`;
    ref.current.style.boxShadow = `${-x*20}px ${y*20}px 50px rgba(99,102,241,0.12)`;
    if (glow.current)
      glow.current.style.background = `radial-gradient(circle at ${(x+0.5)*100}% ${(y+0.5)*100}%, rgba(99,102,241,0.08) 0%, transparent 65%)`;
  };
  const onLeave = (e) => {
    ref.current.style.transform = "";
    ref.current.style.boxShadow = "";
    if (glow.current) glow.current.style.background = "transparent";
    onMouseLeave?.(e);
  };

  return (
    <div ref={ref} className={`tilt-card ${className}`}
      onMouseMove={onMove} onMouseLeave={onLeave}
      onMouseEnter={onMouseEnter} onClick={onClick}
      style={{ position:"relative", ...style }}>
      <div ref={glow} style={{ position:"absolute",inset:0,borderRadius:"inherit",pointerEvents:"none",zIndex:1,transition:"background .1s" }} />
      <div style={{ position:"relative",zIndex:2 }}>{children}</div>
    </div>
  );
}
