import { useEffect, useRef } from "react";

export default function Cursor() {
  const outer = useRef();
  const dot   = useRef();

  useEffect(() => {
    let ox=-100, oy=-100, tx=-100, ty=-100;
    const onMove = (e) => { tx=e.clientX; ty=e.clientY; };
    const onOver  = (e) => {
      const h = !!e.target.closest("button,a,[data-hover]");
      outer.current?.classList.toggle("hovering", h);
      dot.current?.classList.toggle("hovering", h);
    };
    let raf;
    const loop = () => {
      ox += (tx-ox)*0.14; oy += (ty-oy)*0.14;
      if (outer.current) { outer.current.style.left=ox+"px"; outer.current.style.top=oy+"px"; }
      if (dot.current)   { dot.current.style.left=tx+"px";   dot.current.style.top=ty+"px";   }
      raf = requestAnimationFrame(loop);
    };
    loop();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove",onMove); window.removeEventListener("mouseover",onOver); };
  }, []);

  return (
    <>
      <div ref={outer} className="cursor-outer" />
      <div ref={dot}   className="cursor-dot"   />
    </>
  );
}
