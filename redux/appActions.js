/*
 * action types
 */

export const GET_PAGE = 'GET_PAGE';
export const SHOW_MODAL = 'SHOW_MODAL';

/*
 * action creators
 */

export function getTitle(page) {
  return { type: GET_PAGE, page }
}

export function showModal(modalType) {
  return { type: SHOW_MODAL, modalType }
}
