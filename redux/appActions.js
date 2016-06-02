/*
 * action types
 */

export const GET_PAGE = 'GET_PAGE';
export const SHOW_MODAL = 'SHOW_MODAL';
export const SET_CHURCH_LIFE_AREA = 'SET_CHURCH_LIFE_AREA';
export const SET_NEXT_STEPS_AREA = 'SET_NEXT_STEPS_AREA';
export const SET_MORE_IMGBAR_TITLE = 'SET_MORE_IMGBAR_TITLE';

/*
 * action creators
 */

// Pretty sure these never get used...

export function getTitle(page) {
  return { type: GET_PAGE, page }
}

export function showModal(modalType) {
  return { type: SHOW_MODAL, modalType }
}

export function getChurchLifeArea(churchLifeAreaType) {
  return { type: SET_CHURCH_LIFE_AREA, churchLifeAreaType }
}

export function getNextStepsArea(nextStepsAreaType) {
  return { type: SET_NEXT_STEPS_AREA, nextStepsAreaType }
}

/**
 * @param data (Object = key: {title: string, image: string})
 */
export function setImageBarData(moreImageBarTitle) {
  return { type: SET_MORE_IMGBAR_TITLE, moreImageBarTitle }
}
