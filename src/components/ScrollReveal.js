'use client';
import { useEffect, useRef } from 'react';

/**
 * ScrollReveal — wraps children, adds .in-view when visible.
 * delay: ms (for stagger)
 * direction: 'up' | 'left' | 'right' | 'scale'
 */
export default function ScrollReveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('in-view'), delay);
          io.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} data-animate className={className}>
      {children}
    </Tag>
  );
}
