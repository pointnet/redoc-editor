import React from 'react';
import produce from 'immer';

const useImmerState = initialState => {
  const [state, setState] = React.useState(initialState);
  const setImmerState = setter => setState(produce(setter));
  return [state, setImmerState];
};

export default useImmerState;
