"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  const artworkRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 90, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 90, damping: 20 });
  const frontX = useTransform(springX, [-1, 1], [-18, 18]);
  const frontY = useTransform(springY, [-1, 1], [-12, 12]);
  const backX = useTransform(springX, [-1, 1], [10, -10]);
  const backY = useTransform(springY, [-1, 1], [8, -8]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || !artworkRef.current) return;
    const bounds = artworkRef.current.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 2 - 1);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 2 - 1);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-meta">
        <p>{portfolio.person.role}</p>
        <p>{portfolio.person.location}</p>
      </div>

      <div className="hero-name-wrap">
        <h1 id="hero-title" className="hero-name">
          <span>{portfolio.person.firstName}</span>
          <span className="hero-name-serif">{portfolio.person.lastName}</span>
        </h1>
      </div>

      <div
        ref={artworkRef}
        aria-hidden="true"
        className="hero-artwork"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      >
        <motion.div className="aperture aperture-back" style={{ x: backX, y: backY }}>
          <span>A</span>
        </motion.div>
        <motion.div className="aperture aperture-front" style={{ x: frontX, y: frontY }}>
          <span>S</span>
        </motion.div>
        <div className="aperture-axis" />
        <span className="aperture-label">FORM / FUNCTION</span>
      </div>

      <div className="hero-bottom">
        <p className="hero-statement">
          {portfolio.person.statement}
        </p>
        <div className="hero-actions">
          <span className="availability">
            <i aria-hidden="true" />
            {portfolio.person.availability}
          </span>
          <a className="explore-link" href="#work">
            <span>Explore selected work</span>
            <ArrowDownRight aria-hidden="true" size={20} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
