import { combineReducers } from 'redux';
import { HOME_PAGE_STORE_KEY, homePageReducer } from '@/pages/home-page';

export const reducers = combineReducers({
  [HOME_PAGE_STORE_KEY]: homePageReducer,
});
