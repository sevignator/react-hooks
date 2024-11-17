/**
 * @description Allows you to easily toggle between true and false to control
 * your logic. Taken from the Module 3 in The Joy of React.
 *
 * @author Josh W. Comeau
 */

import React from 'react';

export default function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);

  const toggleValue = React.useCallback(() => {
    setValue((currentValue) => !currentValue);
  }, []);

  return [value, toggleValue];
}
