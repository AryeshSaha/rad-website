"use client";

import { useEffect } from "react";

/**
 * Disables browser's automatic scroll restoration and sets the scroll position to 0,0 on page unload.
 * This is useful for pages that do not want to remember the scroll position between page reloads.
 * @returns {null}
 */
const ScrollRestoration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Disable browser's automatic scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
};

export default ScrollRestoration;
