import { MutableRefObject, useCallback, useRef } from 'react';

/**
 * Hook that allows recall previous call of the function till delay disapears
 * @param callback
 * @param delay - delay in seconds
 * @returns void
 */
export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timer = useRef(false) as MutableRefObject<any>;

  return useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
}
