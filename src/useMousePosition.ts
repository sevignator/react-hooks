/**
 * @description Allows you to get the user's current mouse location in the
 * viewport. Taken from the Module 3 in The Joy of React.
 *
 * @author Josh W. Comeau
 */

import React from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = React.useState<{
    x: number,
    y: number
  }>({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
}
