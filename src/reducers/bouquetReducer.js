const defaultState = {
  userBouquets: [],
  allBouquets: [],
  userFavs: []
}

export default function reducer(state = defaultState, action) {

  switch (action.type) {
    case "USER_BOUQUETS":
      return { ...state, userBouquets: action.payload}
    case "ADD_TO_BOUQUET":
      return { ...state, userBouquets: [action.payload, ...state.userBouquets] }
    case "UPDATE_BOUQUET":
      // update userFavs
      return { ...state, userBouquets: action.payload }
    case "USER_FAVS":
    debugger
      return {...state, userFavs: action.payload}
    case "TOGGLE_FAV":
      return {...state, favStatus: false}
    case "UPDATE_FAVS":
      return {...state, userFavs: [action.payload, ...state.userFavs]}
    case "SET_ALL_BOUQUETS":
      return {...state, allBouquets: action.payload}
    default:
    return state
  }

}
