const defaultState = {
  userBouquets: [],
  allBouquets: [],
  currentNew: {},
  loading: false
}

export default function reducer(state = defaultState, action) {

  switch (action.type) {
    case "USER_BOUQUETS":
      return { ...state, userBouquets: action.payload}
    case "SET_NEW_BOUQUET":
      return {...state, currentNew: action.payload}
    case "ADD_TO_BOUQUET":
      return { ...state, userBouquets: [state.currentNew, ...state.userBouquets], currentNew: {} }
    case "UPDATE_BOUQUET":
      let updatedBouquets = state.userBouquets.filter(bouquet => !(bouquet.id === action.payload))
      return { ...state, userBouquets: updatedBouquets }
    case "SET_ALL_BOUQUETS":
      return {...state, allBouquets: action.payload}
    case "UPDATE_FEED":
      let feed = state.allBouquets.filter(bouquet => !(bouquet.id === action.payload))
      return {...state, allBouquets: feed}
    case "LOADING_SCREEN":
      return {...state, loading: true}
    case "TURN_OFF_LOADING":
      return {...state, loading: false}
    case "LOG_OUT_BOUQUETS":
      return defaultState
    default:
    return state
  }
}
