"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/**
 * Хук framer-motion читает медиазапрос прямо в рендере, из-за чего разметка
 * сервера и клиента расходится. Здесь на сервере всегда false, а настоящее
 * значение приходит после гидратации.
 */
export function useSafeReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}
