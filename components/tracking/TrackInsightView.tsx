"use client";

import { useEffect } from "react";
import { pushToDataLayer } from "@/lib/gtm";

type Props = {
  title: string;
  slug: string;
  topic: string;
};

declare global {
  interface Window {
    __lastTrackedInsightSlug?: string;
  }
}

export default function TrackInsightView({ title, slug, topic }: Props) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.__lastTrackedInsightSlug === slug) return;

    window.__lastTrackedInsightSlug = slug;

    pushToDataLayer({
      event: "view_insight",
      insight_title: title,
      insight_slug: slug,
      insight_topic: topic,
    });
  }, [title, slug, topic]);

  return null;
}
