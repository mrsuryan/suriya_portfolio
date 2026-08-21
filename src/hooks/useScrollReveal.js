import { useEffect } from "react";

/**
 * Upgraded scroll reveal hook — watches multiple animation classes:
 * .rev        → fade up
 * .rev-left   → slide in from left
 * .rev-right  → slide in from right
 * .rev-scale  → scale in from 0.85
 * .rev-blur   → blur to clear
 * .reveal     → legacy alias for .rev
 *
 * Also supports data-delay="0.2" for stagger timing.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const SELECTOR = ".rev, .revl, .revr, .tl-node, .reveal, .rev-left, .rev-right, .rev-scale, .rev-blur";

    const observe = () => {
      const targets = document.querySelectorAll(SELECTOR);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const delay = entry.target.dataset.delay || "0";
              entry.target.style.transitionDelay = `${delay}s`;
              entry.target.classList.add("in");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );

      targets.forEach((t) => observer.observe(t));
      return observer;
    };

    const observer = observe();

    // Re-observe after a short delay to catch dynamically rendered elements
    const timer = setTimeout(() => {
      observer.disconnect();
      observe();
    }, 300);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
}
