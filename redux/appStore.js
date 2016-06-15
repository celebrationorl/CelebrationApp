import { createStore } from 'redux';
import scenesData from '../redux/database/scenesData';
import imageBarData from '../redux/database/imageBarData';
import {
  GET_PAGE,
  SHOW_MODAL,
  SET_CHURCH_LIFE_AREA,
  SET_NEXT_STEPS_AREA,
  SET_MORE_IMGBAR_TITLE,
  SET_WEBVIEW_LOADING_STATUS
} from './appActions';

var initialState = {
  ...scenesData.pages,
  modalType: '',
  churchLifeAreaType: 'communityGroups',
  nextStepsAreaType: 'communityGroups',
  moreImageBarTitle: 'More',
  loadedWebViews: {
    news: false,
    podcasts: false,
    missions: false,
    college: false,
    website: false,
    instagram: false,
    facebook: false,
    twitter: false,
    visit: false,
    giveLogin: false,
    givePayPal: false
  }
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
    case SET_MORE_IMGBAR_TITLE:
      return Object.assign({}, state, {
        moreImageBarTitle: action.moreImageBarTitle
      })
    case SET_CHURCH_LIFE_AREA:
      return Object.assign({}, state, {
        churchLifeAreaType: action.churchLifeAreaType
      })
    case SET_NEXT_STEPS_AREA:
      return Object.assign({}, state, {
        nextStepsAreaType: action.nextStepsAreaType
      })
    case SET_WEBVIEW_LOADING_STATUS:
      return Object.assign({}, state, {
        loadedWebViews: action.loadedWebViews
      })
    default:
      return state;
  }

}

/*
 * create store
 */
export default createStore(appStore);
