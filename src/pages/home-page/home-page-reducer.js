import {
  CURRENT_POSITION,
  WATCH_POSITION_ID,
  WATCH_POSITION,
  CLEAR_WATCH_POSITION_ID,
} from './home-page-actions';

const INITIAL_STATE = {
  wpid: null,
};

export const homePageReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case WATCH_POSITION:
      return {
        ...state,
        watchPosition: payload,
      };
    case CURRENT_POSITION:
      return {
        ...state,
        currentPosition: payload,
      };
    case WATCH_POSITION_ID:
      return {
        ...state,
        wpid: payload,
      };
    case CLEAR_WATCH_POSITION_ID:
      return {
        ...state,
        wpid: INITIAL_STATE.wpid,
      };
    default: return state;
  }
};
