import { createStore } from 'redux';
import { GET_PAGE } from './appActions';

const initialState = {
  title: 'Page Title',
  body: 'Page Body',
};

/*
 * reducers
 */
function appStore(state = initialState, action) {
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
