export function pushToDataLayer(data: Record<string, unknown>) {
  if (typeof window !== "undefined" && ["www.nicolas.com.ar", "nicolas.com.ar"].includes(window.location.hostname)) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
}

export {};
