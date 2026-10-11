"use client";

import { useEffect, useRef } from "react";
import { pushToDataLayer } from "@/lib/gtm";

type Props = {
  title: string;
  slug: string;
  topic: string;
};

export default function TrackInsightView({ title, slug, topic }: Props) {
  const lastSlug = useRef<string | null>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (lastSlug.current === slug) return;

    lastSlug.current = slug;

    pushToDataLayer({
      event: "view_insight",
      insight_title: title,
      insight_slug: slug,
      insight_topic: topic,
    });
  }, [title, slug, topic]);

  return null;
}
