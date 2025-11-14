import { useEffect, useState } from 'react';

export function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value);

      return () => clearTimeout(timer);
    }, delay);
  }, [value, delay]);
  return debounced;
}
