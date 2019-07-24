import React from 'react';
import produce from 'immer';

const useImmerReducer = (reducer, initialState) =>
  React.useReducer(produce(reducer), initialState);

export default useImmerReducer;
