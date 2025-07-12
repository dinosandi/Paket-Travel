// src/hooks/useInView.ts
import { useRef, useEffect, useState } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {}

const useInView = (options?: UseInViewOptions) => {
  const ref = useRef<HTMLElement>(null);
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