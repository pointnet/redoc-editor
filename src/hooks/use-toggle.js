import React from 'react';

const useToggle = initialState => {
  const [state, setState] = React.useState(initialState);
  const toggle = value => setState(state === value ? initialState : value);
  return [state, toggle];
};

export default useToggle;
