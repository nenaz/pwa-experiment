import {
  CURRENT_POSITION,
  WATCH_POSITION_ID,
  WATCH_POSITION,
} from './home-page-actions';

const INITIAL_STATE = {};

export const homePageReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case WATCH_POSITION:
      console.log('payload', payload);
      return {
        ...state,
        watchPosition: payload,
      };
    case CURRENT_POSITION:
      console.log('payload', payload);
      return {
        ...state,
        currentPosition: payload,
      };
    case WATCH_POSITION_ID:
      return {
        ...state,
        wpid: payload,
      };
    default: return state;
  }
};
