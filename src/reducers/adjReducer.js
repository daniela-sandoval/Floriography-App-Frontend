const defaultState = {
  adjs: [],
  adjList: [],
  toneList: []
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_ADJS":
      return {...state, adjs: action.payload}
      case "SET_TONES":
      return {...state, toneList: action.payload}
    case "ADD_TO_LIST":
      return {...state, adjList: [...state.adjList, action.payload]}
    case "REMOVE_FROM_LIST":
      return {...state, adjList: action.payload}
      case "CLEAR_LIST":
      return {...state, adjList: []}
    default:
    return state
  }
}
