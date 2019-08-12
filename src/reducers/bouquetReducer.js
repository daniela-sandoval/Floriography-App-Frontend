const defaultState = {
  userBouquets: []
}

export default function reducer(state = defaultState, action) {

  switch (action.type) {
    case "USER_BOUQUETS":
      return { userBouquets: action.payload }
    case "ADD_TO_BOUQUET":
      return { userBouquets: [action.payload, ...state.userBouquets] }
      case "UPDATE_BOUQUET":
      return { userBouquets: action.payload }
    default:
    return state
  }

}
