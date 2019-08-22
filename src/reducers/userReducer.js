const defaultState = {
  currentUser: {},
  currentId: null,
  username: null,
  email: null,
  errorStatus: false,
  error: "",
  registerErrorStatus: false,
  registerError: ""
}

export default function reducer(state = defaultState, action) {

  switch (action.type) {
    case "LOGIN_USER":
      return {...state, currentUser: action.payload, currentId: action.payload.id, username: action.payload.username, email: action.payload.email}
    case "ERROR":
      return {...state, errorStatus: true, error: action.payload}
    case "CLEAR_ERROR":
      return {...state, errorStatus: false, error: ""}
    case "REGISTER_CLEAR_ERROR":
      return {...state, registerErrorStatus: false, registerError: ""}
    case "REGISTER_ERROR":
      return {...state, registerErrorStatus: true, registerError: action.payload}
    case "UPDATE_USER_INFO":
      return {...state, currentUser: {...state.currentUser, username: action.payload.username, email: action.payload.email}, username: action.payload.username, email: action.payload.email}
    case "LOG_OUT_USER":
      return defaultState
    default:
    return state
  }

}
