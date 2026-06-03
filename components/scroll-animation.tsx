"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollAnimation() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Intersection Observer for micro-content animations (cards, items, headers)
    const microQuery = "main .service-card, main .stat-card, main .hover-lift, main .grid > div, main h2:not(section h2)";
    const elementsToAnimate = document.querySelectorAll(microQuery);

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -80px 0px", // Trigger when the element is 80px into the viewport
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-animate-visible");
          // Stop observing once animated in
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    elementsToAnimate.forEach((el) => {
      // Don't apply animations to elements already processed or in headers/footers
      if (!el.classList.contains("scroll-animate-visible")) {
        el.classList.add("scroll-animate-init");
        observer.observe(el);
      }
    });

    // 2. GSAP ScrollTrigger for Page Sections Overlapping (Desktop only)
    const sections = document.querySelectorAll("main > div > section, main > div > main > section, main > section");
    
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        sections.forEach((section: any, idx) => {
          // Add custom layout overlap styling class
          section.classList.add(" ");
          
          if (idx === 0) {
            // First section (Hero) is the bottom/base layer
            gsap.set(section, { zIndex: 10 });
            return;
          }

          // Subsequent sections overlap and transition on scroll
          gsap.fromTo(
            section,
            {
              y: "12vh",
              scale: 0.96,
              borderRadius: "24px 24px 0 0",
            },
            {
              y: 0,
              scale: 1,
              borderRadius: "0px 0px 0 0",
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "top top+=100", // Stops at header offset
                scrub: true,
              },
            }
          );

          // Previous section shrinks and moves up slowly (parallax depth)
          const prevSection = sections[idx - 1];
          if (prevSection) {
            gsap.to(prevSection, {
              scale: 0.96,
              opacity: 0.85,
              y: "-4vh",
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "top top+=100",
                scrub: true,
              },
            });
          }
        });
      });
    });

    return () => {
      observer.disconnect();
      ctx.revert();
    };
  }, [pathname]); // Re-run effect on page navigation to bind to new elements

  return null;
}

