import { useEffect, useState } from "react";

export function useCountUp(target: number, duration = 2000, triggered = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(startValue + (target - startValue) * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, triggered]);

  return count;
}
