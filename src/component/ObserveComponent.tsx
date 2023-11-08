import { useEffect, useRef, useState } from 'react';

export default function ObserveComponent({ content }: { content: any }) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (target === ref.current) {
            setVisible(isIntersecting);
          }
        });
      },
      {
        rootMargin: '-51% -40% -40%',
        threshold: 0.15,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <a
      ref={ref}
      className={`
        ${
          visible
            ? 'font-s w-full text-3xl opacity-100 duration-500'
            : 'w-full text-3xl  opacity-10 transition-all duration-500'
        }
      `}
    >
      {content}
    </a>
  );
}
