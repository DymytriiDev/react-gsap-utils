import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface AnimateOnMountProps {
  children: React.ReactNode;
  mounted: boolean;
  className?: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
}

export default function AnimateOnMount({
  children,
  mounted,
  className,
  from = { opacity: 0, y: 200 },
  to = { opacity: 1, y: 0, duration: 0.5, ease: "sine.out" },
}: AnimateOnMountProps) {
  const [renderElement, setRenderElement] = useState(mounted);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (mounted === true) {
      setRenderElement(true);
      gsap.fromTo(element, from, to);
    } else if (mounted === false) {
      gsap
        .to(element, { ...from, duration: to.duration })
        .then(() => setRenderElement(false));
    }
  }, [mounted]);

  return (
    <div className={className} ref={elementRef}>
      {renderElement && children}
    </div>
  );
}
