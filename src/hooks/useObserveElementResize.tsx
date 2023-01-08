import { useEffect, useRef, useState } from "react";

export const useObserveElementResize = <T extends HTMLElement>() => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
      setHeight(entries[0].contentRect.height);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      ref.current && observer.unobserve(ref.current);
    };
  }, []);

  return { size: { width, height }, ref };
};
