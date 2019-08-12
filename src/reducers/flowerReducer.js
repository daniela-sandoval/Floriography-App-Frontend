const defaultState = {
  flowers: []
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_FLOWERS":
      return {...state, flowers: action.payload}
    default:
      return state
  }
}
