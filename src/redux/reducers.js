const modal = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PAGE': {
      return {
        ...state,
        screenType: action.screenType,
      }
    }
    default:
      return state
  }
}
 
export default modal
