'use client';

import { ReactNode, Children, useEffect, useRef, useState } from 'react';

function RevealWrapper({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={isVisible ? 'animate-fade-up' : ''}
    >
      {children}
    </div>
  );
}

export function AnimatedPage({ children }: { children: ReactNode }) {
  const childArray = Children.toArray(children);

  return (
    <>
      {childArray.map((child, index) => (
        <RevealWrapper key={index}>
          {child}
        </RevealWrapper>
      ))}
    </>
  );
}
