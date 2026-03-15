"use client";

interface AnimatedCounterProps {
  end: number | string;
  duration?: number;
  label: string;
  isYears?: boolean;
}

/**
 * Static Counter Component
 * Displays values without animation for reliability across all clients
 * No JavaScript required for display
 */
export default function AnimatedCounter({
  end,
  duration = 2000,
  label,
  isYears = false,
}: AnimatedCounterProps) {
  // Display value directly - no animation, no state
  return (
    <div className="flex flex-col items-start">
      <p className="text-xl md:text-2xl font-bold font-serif text-forest">
        {typeof end === "string" ? end : `${end}`}
      </p>
      <p className="mt-2 text-xs text-muted">{label}</p>
    </div>
  );
}
