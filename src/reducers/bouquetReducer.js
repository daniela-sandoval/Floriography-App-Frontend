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
      let updatedBouquets = state.userBouquets.filter(bouquet => !(bouquet.id === action.payload))
      return { ...state, userBouquets: updatedBouquets }
    case "USER_FAVS":
      return {...state, userFavs: action.payload}
    case "ADD_FAVS":
      return {...state, userFavs: [action.payload, ...state.userFavs]}
    case "UPDATE_FAVS":
      let updatedFavs = state.userFavs.filter(fav => !(fav.id === action.payload))
      return {...state, userFavs: updatedFavs}
    case "SET_ALL_BOUQUETS":
      return {...state, allBouquets: action.payload}
    default:
    return state
  }

}
