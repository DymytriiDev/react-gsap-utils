import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AnimateOnScroll.css";

type AnimateRevealProps = {
  children: React.ReactNode;
  YOffset?: number;
  from?: any;
  className?: string;
  childClassName?: string;
  onComplete?: () => void;
  onStart?: () => void;
  debug?: boolean;
};

// ScrollTrigger component for children reveal animation
export default function AnimateOnScroll({
  children,
  YOffset = 80,
  from = { opacity: 0, y: "60%", duration: 0.6, ease: "power2.out" },
  className = "",
  childClassName = "",
  onComplete = () => {
    return;
  },
  onStart = () => {
    return;
  },
  debug = false,
}: AnimateRevealProps) {
  const containerRef = useRef(null);
  const revealRef = useRef(null);

  const fromArg = from;
  if (!from.duration) fromArg.duration = 0.6;
  if (!from.ease) fromArg.ease = "power2.out";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      if (!revealRef.current || !containerRef.current) return;

      let callbacks: { onComplete?: () => void; onStart?: () => void } = {};
      if (onComplete) callbacks.onComplete = onComplete;
      if (onStart) callbacks.onStart = onStart;

      gsap.from(revealRef.current, {
        ...fromArg,
        scrollTrigger: {
          trigger: containerRef.current,
          start: `top ${YOffset}%`,
          end: `top ${YOffset - 5}%`,
          markers: debug ? true : false,
          toggleActions: "play none none reverse",
        },
        ...callbacks,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`ScrollTriggerRevealContainer ${className ? className : ""}`}
    >
      <div className={childClassName ? childClassName : ""} ref={revealRef}>
        {children}
      </div>
    </div>
  );
}
