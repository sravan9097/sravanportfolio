type GtagCommand = [string, ...unknown[]];

declare global {
  interface Window {
    dataLayer?: GtagCommand[];
    gtag?: (...args: GtagCommand) => void;
    gaInitialized?: boolean;
  }
}

export function initGA(id?: string) {
  if (!id) return;
  if (typeof window === 'undefined') return;
  if (window.gaInitialized) return;

  window.dataLayer = window.dataLayer || [];
  const gtag = (...args: GtagCommand) => { window.dataLayer!.push(args); };
  window.gtag = gtag;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.gtag('js', new Date());
  const debug = import.meta.env.DEV;
  if (debug) {
    // Enable GA4 DebugView in development
    window.gtag('set', 'debug_mode', true);
  }
  window.gtag('config', id, { send_page_view: false, debug_mode: debug });
  window.gaInitialized = true;
}

let lastEventTimestampMs: number | null = null;

export function trackPageview(path: string) {
  const id = import.meta.env.VITE_GA_ID as string | undefined;
  if (!window.gtag || !id) return;
  const now = Date.now();
  const sinceLast = lastEventTimestampMs ? now - lastEventTimestampMs : undefined;
  const debug = import.meta.env.DEV;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: typeof document !== 'undefined' ? document.title : undefined,
    page_location: typeof window !== 'undefined' ? window.location.href : undefined,
    since_last_event_ms: sinceLast,
    debug_mode: debug,
  });
  lastEventTimestampMs = now;
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (!window.gtag) return;
  const now = Date.now();
  const sinceLast = lastEventTimestampMs ? now - lastEventTimestampMs : undefined;
  const debug = import.meta.env.DEV;
  window.gtag('event', name, { ...(params || {}), since_last_event_ms: sinceLast, debug_mode: debug });
  lastEventTimestampMs = now;
}


