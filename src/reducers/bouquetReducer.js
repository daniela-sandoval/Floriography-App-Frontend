const defaultState = {
  userBouquets: []
}

export default function reducer(state = defaultState, action) {

  switch (action.type) {
    case "USER_BOUQUETS":
    return {userBouquets: action.payload}
    case "MAKE_INPUT_BOUQUET":
    debugger
    default:
    return state
  }

}
