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
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = parseFloat(entry.target.dataset.delay || 0);
            setTimeout(() => entry.target.classList.add("in"), delay * 1000);
          } else {
            // Remove the 'in' class when it leaves the viewport to allow re-animating
            entry.target.classList.remove("in");
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
