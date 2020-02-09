import { createSelector } from 'reselect';
import { get } from 'lodash';
import { HOME_PAGE_STORE_KEY } from './home-page-constants';

const getPageState = (state) => state[HOME_PAGE_STORE_KEY];

export const getCurrentPosition = createSelector(
  getPageState,
  (pageState) => get(pageState, 'currentPosition'),
);

export const getWatchPosition = createSelector(
  getPageState,
  (pageState) => get(pageState, 'watchPosition'),
);

export const getWatchId = createSelector(
  getPageState,
  (pageState) => get(pageState, 'wpid'),
);
