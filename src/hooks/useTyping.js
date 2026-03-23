import { useState, useEffect } from "react";

/**
 * Typing animation hook — cycles through an array of strings
 * with typewriter + delete effect.
 * @param {string[]} words - array of strings to cycle through
 * @returns {string} current displayed text
 */
export default function useTyping(words) {
  const [text, setText]   = useState("");
  const [wordIdx, setWi]  = useState(0);
  const [charIdx, setCi]  = useState(0);
  const [deleting, setDel]= useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timer;

    if (!deleting && charIdx < word.length) {
      timer = setTimeout(() => setCi(c => c + 1), 74);
    } else if (!deleting) {
      timer = setTimeout(() => setDel(true), 2100);
    } else if (deleting && charIdx > 0) {
      timer = setTimeout(() => setCi(c => c - 1), 38);
    } else {
      setDel(false);
      setWi(i => (i + 1) % words.length);
    }

    setText(word.slice(0, charIdx));
    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words]);

  return text;
}
