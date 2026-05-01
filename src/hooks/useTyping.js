import { useState, useEffect } from "react";

export default function useTyping(words, speed = 85) {
  const [txt, setTxt]   = useState("");
  const [wi,  setWi]    = useState(0);
  const [ci,  setCi]    = useState(0);
  const [del, setDel]   = useState(false);

  useEffect(() => {
    const word = words[wi];
    const timer = setTimeout(() => {
      if (!del) {
        setTxt(word.slice(0, ci + 1));
        if (ci + 1 === word.length) setTimeout(() => setDel(true), 1600);
        else setCi(c => c + 1);
      } else {
        setTxt(word.slice(0, ci - 1));
        if (ci - 1 === 0) { setDel(false); setWi(w => (w + 1) % words.length); setCi(0); }
        else setCi(c => c - 1);
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [txt, ci, del, wi, words, speed]);

  return txt;
}
