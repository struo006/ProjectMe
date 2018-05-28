export function setPage (screenType) {
  return dispatch => new Promise((resolve) => {
    return resolve(dispatch({
      type: 'SET_PAGE',
      screenType: screenType
    }));
  });
}
