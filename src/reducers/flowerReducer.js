const defaultState = {
  flowers: [],
  filtered: []
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_FLOWERS":
      return {...state, flowers: action.payload, filtered: action.payload}
    case "FILTER_FLOWERS":
      return {...state, filtered: action.payload}
    default:
      return state
  }
}
