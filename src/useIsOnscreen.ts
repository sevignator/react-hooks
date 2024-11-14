/**
 * @description Allows you to track whether an DOM node is visible in the.
 * viewport. Taken from the Module 3 in The Joy of React.
 *
 * @author Josh W. Comeau
 */

import React from 'react';

export function useIsOnscreen() {
  const elementRef = React.useRef();
  const [isOnscreen, setIsOnscreen] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsOnscreen(entry.isIntersecting);
    });

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [elementRef]);

  return [isOnscreen, elementRef];
}
