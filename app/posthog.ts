/** PostHog configuration for cookieless web analytics */

export const POSTHOG_CONFIG = {
  token: "phc_NA3jVV7k7qErD3hnfKYN7uDkSu6FdHV7AOETYIRAdo0",
  apiHost: "https://us.i.posthog.com",
  uiHost: "https://us.posthog.com",
} as const;

export const POSTHOG_OPTIONS = {
  api_host: "/ingest",
  ui_host: POSTHOG_CONFIG.uiHost,
  person_profiles: "identified_only" as const,
  persistence: "memory" as const,
  autocapture: false,
  capture_pageview: false,
  capture_pageleave: true,
  disable_session_recording: true,
  disable_surveys: true,
  loaded: (posthog: unknown) => {
    const ph = posthog as { register: (props: Record<string, unknown>) => void };
    ph.register({ site: "hellobirch.app" });
  },
} as const;

export function shouldEnablePostHog(): boolean {
  if (typeof window === "undefined") return false;
  const hostname = window.location.hostname;
  return hostname === "hellobirch.app";
}
