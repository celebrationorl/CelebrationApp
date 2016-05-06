import { createStore } from 'redux';
import { GET_PAGE } from './appActions';
import scenesData from '../redux/scenesData';

/*
 * reducers
 */
function appStore(state = scenesData.pages, action) {
  switch (action.type) {
    case GET_PAGE:
      return Object.assign({}, state, {
        page: action.page
      })
    default:
      return state;
  }
}

/*
 * create store
 */
export default createStore(appStore);
