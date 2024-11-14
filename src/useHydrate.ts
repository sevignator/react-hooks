/**
 * @description Allows you to check whether the React code has be hydrated
 * prior to running some code. Taken in the Professional Web Forms workshop
 * from Epic Web.
 *
 * @author Kent C. Dodds
 */

import React from 'react';

export function useHydrate() {
  const [isHydrated, setIsHydrated] = React.useState(false);

  React.useEffect(() => setIsHydrated(true), []);

  return isHydrated;
}
