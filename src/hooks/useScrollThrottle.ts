import { useCallback, useRef } from 'react';

export function useScrollThrottle<T extends (...args: any[]) => void>(
  callback: T,
  delay: number = 16
) {
  const lastRun = useRef(Date.now());
  const timeout = useRef<NodeJS.Timeout>();

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();

      if (now - lastRun.current >= delay) {
        callback(...args);
        lastRun.current = now;
      } else {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }

        timeout.current = setTimeout(() => {
          callback(...args);
          lastRun.current = Date.now();
        }, delay);
      }
    },
    [callback, delay]
  );
}