export function toggleShowCreate (shouldShowModal) {
  return dispatch => new Promise((resolve) => {
    return resolve(dispatch({
      type: 'TOGGLE_SHOW_CREATE_MODAL',
      shouldShowModal: shouldShowModal
    }));
  });
}
