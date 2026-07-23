import { useState, useEffect, useCallback, useRef } from "react";

// Drives which dish is "active" (featured). A timer advances it every
// `interval` ms; next()/prev() let the Previous/Next buttons jump the
// same state manually. Both the orbit image and the left-side text
// read from this single source of truth, so they can never drift
// out of sync with each other.
function useDishRotation(dishes, interval = 3800) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const restartTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % dishes.length);
    }, interval);
  }, [dishes.length, interval]);

  useEffect(() => {
    restartTimer();
    return () => clearInterval(timerRef.current);
  }, [restartTimer]);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % dishes.length);
    restartTimer();
  }, [dishes.length, restartTimer]);

  const prev = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + dishes.length) % dishes.length);
    restartTimer();
  }, [dishes.length, restartTimer]);

  return { activeIndex, activeDish: dishes[activeIndex], next, prev };
}

export default useDishRotation;
