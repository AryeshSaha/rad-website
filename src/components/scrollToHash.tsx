"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Attempts to scroll to the current hash when the component mounts. If the
 * element isn't available yet (hydration/async content), retries a few times
 * before giving up.
 *
 * Also responds to manual hash changes (e.g., clicking anchor links that
 * update the hash without navigating) by attempting to scroll again.
 *
 * @returns {null}
 */
const ScrollToHash = (): null => {
  const pathname = usePathname();

  useEffect(() => {
    // Attempt to scroll to the current hash. If the element isn't available yet
    // (hydration/async content), retry a few times before giving up.
    let intervalId: number | null = null;
    const maxAttempts = 10;
    const attemptInterval = 100; // ms

    /**
     * Attempts to scroll to the current hash. If the element isn't available yet
     * (hydration/async content), returns false.
     * @returns {boolean} True if the element was scrolled to, false otherwise.
     */
    const attemptScroll = (): boolean => {
      const hash = window.location.hash;
      if (!hash) return false;
      const id = hash.substring(1);
      if (!id) return false;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return true;
      }
      return false;
    };

    /**
     * Schedules retries to attempt to scroll to the current hash until
     * the element is successfully scrolled to or the maximum number of
     * attempts is reached.
     * @returns {void}
     */
    const scheduleRetries = (): void => {
      // If immediate attempt succeeds, don't schedule retries.
      if (attemptScroll()) return;

      let attempts = 0;
      intervalId = window.setInterval(() => {
        attempts += 1;
        if (attemptScroll() || attempts >= maxAttempts) {
          if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
          }
        }
      }, attemptInterval);
    };

    scheduleRetries();

    /**
     * Clears any existing interval before scheduling a new series of retries
     * to attempt to scroll to the current hash when the hash changes.
     * @returns {void}
     */
    const onHashChange = (): void => {
      if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
      }
      scheduleRetries();
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
      }
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname]);

  return null;
};

export default ScrollToHash;
