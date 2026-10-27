"use client";

import {
  useTransition,
  type MouseEvent,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import PageLoader from "@/components/PageLoader";

export function LoaderProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [loading, startTransition] = useTransition();

  function handleInternalNavigation(event: MouseEvent<HTMLDivElement>) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !(event.target instanceof Element)
    ) {
      return;
    }

    const link = event.target.closest<HTMLAnchorElement>("a[href]");

    if (
      !link ||
      link.hasAttribute("download") ||
      (link.target && link.target !== "_self")
    ) {
      return;
    }

    const destination = new URL(link.href);

    if (destination.origin !== window.location.origin) {
      return;
    }

    if (
      destination.pathname === window.location.pathname &&
      destination.search === window.location.search &&
      destination.hash === window.location.hash
    ) {
      return;
    }

    event.preventDefault();
    startTransition(() => {
      router.push(`${destination.pathname}${destination.search}${destination.hash}`);
    });
  }

  return (
    <div onClickCapture={handleInternalNavigation}>
      {children}
      {loading && <PageLoader />}
    </div>
  );
}