"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { POSTHOG_CONFIG, POSTHOG_OPTIONS, shouldEnablePostHog } from "./posthog";

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!shouldEnablePostHog() || !posthog.__loaded) return;

    let url = window.origin + pathname;
    if (searchParams && searchParams.toString()) {
      url = url + `?${searchParams.toString()}`;
    }

    posthog.capture("$pageview", {
      $current_url: url,
    });
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!shouldEnablePostHog()) return;

    if (!posthog.__loaded) {
      posthog.init(POSTHOG_CONFIG.token, POSTHOG_OPTIONS);
    }
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </>
  );
}

export function trackAppStoreClick(location: string, guideslug?: string) {
  if (!shouldEnablePostHog() || !posthog.__loaded) return;

  posthog.capture("app_store_click", {
    page: window.location.pathname,
    link_location: location,
    ...(guideslug && { guide_slug: guideslug }),
  });
}

export function trackSupportFormSubmitted() {
  if (!shouldEnablePostHog() || !posthog.__loaded) return;

  posthog.capture("support_form_submitted", {
    page: window.location.pathname,
  });
}
