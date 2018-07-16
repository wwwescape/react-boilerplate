import * as actionType from '../actions/ActionType';

const counterReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionType.INCREASE_COUNT:
      return newState = state + action.payload;
    case actionType.DECREASE_COUNT:
      return newState = state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;
