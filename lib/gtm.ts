declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function pushToDataLayer(data: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
}

export {};
