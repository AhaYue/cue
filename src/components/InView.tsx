import { useEffect, useRef, useState, ReactNode } from "react";

interface InViewProps {
  children: ReactNode;
  onEnter?: () => void; // 进入视口时触发
  onLeave?: () => void; // 离开视口时触发
  threshold?: number; // 触发阈值（0-1）
  once?: boolean; // 是否只触发一次
  delay?: number; // 延迟触发时间（毫秒）
}

export const InView = ({ children, onEnter, onLeave, threshold = 0.2, once = false, delay = 0 }: InViewProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setTimeout(() => {
            onEnter?.();
          }, delay);
          if (once) {
            setHasEntered(true);
            observer.disconnect(); // 只触发一次
          }
        } else {
          setTimeout(() => {
            onLeave?.();
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [onEnter, onLeave, threshold, once, delay]);

  if (once && hasEntered) return <>{children}</>;

  return <div ref={ref}>{children}</div>;
};
