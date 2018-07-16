import * as actionType from './ActionType';

export const increaseCount = () => ({
  type: actionType.INCREASE_COUNT,
  payload: 1
});

export const decreaseCount = () => ({
  type: actionType.DECREASE_COUNT,
  payload: 1
});
