"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number | string;
  duration?: number;
  label: string;
  isYears?: boolean;
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  label,
  isYears = false,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numEnd = typeof end === "string" ? parseInt(end.replace(/\D/g, "")) : end;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * numEnd);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  const displayValue = typeof end === "string" ? end.replace(/\d+/, count.toString()) : `${count}`;

  return (
    <div ref={ref} className="flex flex-col items-start">
      <p className="text-xl md:text-2xl font-bold font-serif text-forest">
        {displayValue}
      </p>
      <p className="mt-2 text-xs text-muted">{label}</p>
    </div>
  );
}
