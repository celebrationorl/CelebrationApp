/*
 * action types
 */

export const GET_PAGE = 'GET_PAGE';

/*
 * action creators
 */

export function getTitle(page) {
  return { type: GET_PAGE, page }
}
