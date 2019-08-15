const defaultState = {
  userFavs: []
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "USER_FAVS":
      return {...state, userFavs: action.payload}
    case "ADD_FAVS":
      return {...state, userFavs: [action.payload, ...state.userFavs]}
    case "UPDATE_FAVS":
      let updatedFavs = state.userFavs.filter(fav => !(fav.id === action.payload))
      return {...state, userFavs: updatedFavs}
    case "LOG_OUT_FAVS":
      return defaultState
    default:
    return state
  }
}
