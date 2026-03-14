"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

      setProgress(scrollPercent * 100);
    };

    window.addEventListener("scroll", updateProgress);

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 h-[3px] w-full bg-transparent">
      <div
        className="h-full bg-blue-500 transition-all"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
