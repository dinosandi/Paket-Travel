// src/hooks/useInView.ts
import { useRef, useEffect, useState } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {}

// Add a generic type parameter `T` that extends HTMLElement
const useInView = <T extends HTMLElement>(options?: UseInViewOptions) => {
  const ref = useRef<T>(null); // Use the generic type here
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Perbarui state hanya jika inView berubah
      if (inView !== entry.isIntersecting) {
        setInView(entry.isIntersecting);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options, inView]); // Tambahkan inView ke dependency array

  return [ref, inView] as const;
};

export default useInView;