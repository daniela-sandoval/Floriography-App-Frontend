const defaultState = {
  adjs: []
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_ADJS":
      return {adjs: action.payload}
    default:
    return state
  }
}
