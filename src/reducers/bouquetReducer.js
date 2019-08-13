const defaultState = {
  userBouquets: [],
  allBouquets: [],
  userFavs: []
}

export default function reducer(state = defaultState, action) {

  switch (action.type) {
    case "USER_BOUQUETS":
      return { ...state, userBouquets: action.payload }
    case "ADD_TO_BOUQUET":
      return { ...state, userBouquets: [action.payload, ...state.userBouquets] }
      case "UPDATE_BOUQUET":
      return { ...state, userBouquets: action.payload }
      case "SET_ALL_BOUQUETS":
      return {...state, allBouquets: action.payload}
      case "SET_USER_FAVS":
      debugger
      return {...state, userFavs: action.payload}
    default:
    return state
  }

}
