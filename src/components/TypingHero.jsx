import React from "react";
import useTyping from "../hooks/useTyping";
import { TYPING_ROLES } from "../data";

export default function TypingHero() {
  const typed = useTyping(TYPING_ROLES);

  return (
    <span className="hero-role">
      I&apos;m a{" "}
      <span className="accent-text" style={{ display: "inline" }}>
        {typed}
      </span>
      <span
        className="cursor-blink"
        style={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          background: "var(--accent-cyan)",
          marginLeft: "2px",
          verticalAlign: "text-bottom",
          animation: "blink 1s step-end infinite",
        }}
      />
    </span>
  );
}
