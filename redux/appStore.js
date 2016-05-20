import { createStore } from 'redux';
import { GET_PAGE, SHOW_MODAL } from './appActions';
import scenesData from '../redux/scenesData';

var initialState = {
  ...scenesData.pages,
  modalType: ''
}

/*
 * reducers
 */
function appStore(state = initialState, action) {
  switch (action.type) {
    case GET_PAGE:
      return Object.assign({}, state, {
        page: action.page
      })
    case SHOW_MODAL:
      return Object.assign({}, state, {
        modalType: action.modalType
      })
    default:
      return state;
  }
}

/*
 * create store
 */
export default createStore(appStore);
