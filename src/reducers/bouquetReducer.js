const defaultState = {
  userBouquets: [],
  allBouquets: []
}

export default function reducer(state = defaultState, action) {

  switch (action.type) {
    case "USER_BOUQUETS":
      return { ...state, userBouquets: action.payload}
    case "ADD_TO_BOUQUET":
      return { ...state, userBouquets: [action.payload, ...state.userBouquets] }
    case "UPDATE_BOUQUET":
      let updatedBouquets = state.userBouquets.filter(bouquet => !(bouquet.id === action.payload))
      return { ...state, userBouquets: updatedBouquets }
    case "SET_ALL_BOUQUETS":
      return {...state, allBouquets: action.payload}
    case "UPDATE_FEED":
      let feed = state.allBouquets.filter(bouquet => !(bouquet.id === action.payload))
      return {...state, allBouquets: feed}
    default:
    return state
  }
}
