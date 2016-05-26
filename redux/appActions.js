/*
 * action types
 */

export const GET_PAGE = 'GET_PAGE';
export const SHOW_MODAL = 'SHOW_MODAL';
export const SET_CHURCH_LIFE_AREA = 'SET_CHURCH_LIFE_AREA';

/*
 * action creators
 */

export function getTitle(page) {
  return { type: GET_PAGE, page }
}

export function showModal(modalType) {
  return { type: SHOW_MODAL, modalType }
}

export function getChurchLifeArea(churchLifeAreaType) {
  return { type: SET_CHURCH_LIFE_AREA, churchLifeAreaType }
}
