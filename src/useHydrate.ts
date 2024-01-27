/**
 * Hook taken from Kent C. Dodds' Professional Web Forms workshop.
 *
 * @description Allows you to check whether the React code has be hydrated
 * prior to running some code.
 */

import React from 'react';

export function useHydrate() {
  const [isHydrated, setIsHydrated] = React.useState(false);

  React.useEffect(() => setIsHydrated(true), []);

  return isHydrated;
}
