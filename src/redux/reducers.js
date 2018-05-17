const modal = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_CREATE_MODAL': {
      return {
        ...state,
        shouldShowModal: action.shouldShowModal,
      }
    }
    default:
      return state
  }
}
 
export default modal
