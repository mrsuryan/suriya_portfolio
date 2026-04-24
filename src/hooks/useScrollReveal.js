import { useEffect } from "react";

/**
 * Scroll reveal hook — watches .rev, .revl, .revr, .tl-node elements
 * and adds the .in class when they enter the viewport.
 * Uses data-delay attribute (seconds) for staggered reveals.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll(".rev, .revl, .revr, .tl-node, .reveal");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            // Stop observing once revealed for better performance
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
}
