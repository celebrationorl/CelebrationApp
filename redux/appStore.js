import { createStore } from 'redux';
import scenesData from '../redux/scenesData';
import {
  GET_PAGE,
  SHOW_MODAL,
  SET_CHURCH_LIFE_AREA
} from './appActions';

var initialState = {
  ...scenesData.pages,
  modalType: '',
  churchLifeAreaType: ''
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
    case SET_CHURCH_LIFE_AREA:
      return Object.assign({}, state, {
        churchLifeAreaType: action.churchLifeAreaType
      })
    default:
      return state;
  }
}

/*
 * create store
 */
export default createStore(appStore);
