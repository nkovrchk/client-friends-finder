import { useCallback, useState } from 'react';
import { Point } from 'react-d3-tree/lib/types/common';

export const useCenteredTree = (defaultTranslate = { x: 0, y: 0 }): [Point, (elem: HTMLDivElement) => void] => {
  const [translate, setTranslate] = useState<Point>(defaultTranslate);

  const containerRef = useCallback((containerElem: HTMLDivElement) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslate({ x: width / 2, y: height / 2 });
    }
  }, []);

  return [translate, containerRef];
};
