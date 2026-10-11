"use client";

import { GoogleTagManager } from "@next/third-parties/google";
import { useEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { pushToDataLayer } from "@/lib/gtm";

const subscribe = () => () => {};
const getEnabled = () => ["www.nicolas.com.ar", "nicolas.com.ar"].includes(window.location.hostname);
const getServerEnabled = () => false;

export default function Analytics({ gtmId }: { gtmId: string }) {
  const enabled = useSyncExternalStore(subscribe, getEnabled, getServerEnabled);
  const pathname = usePathname();
  useEffect(() => {
    if (!enabled) return;
    const click = (event: MouseEvent) => {
      const link = (event.target as Element)?.closest?.("a");
      if (link?.getAttribute("href")?.startsWith("mailto:")) {
        pushToDataLayer({ event: "contact_click", contact_method: "email", page_path: pathname });
      }
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, [enabled, pathname]);
  return enabled && /^GTM-[A-Z0-9]+$/.test(gtmId) ? <GoogleTagManager gtmId={gtmId} /> : null;
}
