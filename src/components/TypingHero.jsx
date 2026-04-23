import React from "react";
import useTyping from "../hooks/useTyping";
import { TYPING_ROLES } from "../data";

export default function TypingHero() {
  const typed = useTyping(TYPING_ROLES);

  return (
    <span className="hero-role" style={{ opacity: 0.9 }}>
      I'm a <span className="accent-text">{typed}</span>
    </span>
  );
}
