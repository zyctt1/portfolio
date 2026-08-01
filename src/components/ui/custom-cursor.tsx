"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const pointerX = useMotionValue(-40);
  const pointerY = useMotionValue(-40);
  const x = useSpring(pointerX, { stiffness: 700, damping: 45 });
  const y = useSpring(pointerY, { stiffness: 700, damping: 45 });

  useEffect(() => {
    if (reduceMotion) return;

    const updatePointer = (event: PointerEvent) => {
      pointerX.set(event.clientX - 6);
      pointerY.set(event.clientY - 6);
      setIsVisible(true);
    };
    const hidePointer = () => setIsVisible(false);

    window.addEventListener("pointermove", updatePointer);
    document.documentElement.addEventListener("mouseleave", hidePointer);
    return () => {
      window.removeEventListener("pointermove", updatePointer);
      document.documentElement.removeEventListener("mouseleave", hidePointer);
    };
  }, [pointerX, pointerY, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="custom-cursor"
      style={{ x, y, opacity: isVisible ? 1 : 0 }}
    />
  );
}
