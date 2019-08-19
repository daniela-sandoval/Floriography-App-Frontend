const defaultState = {
  currentUser: {},
  currentId: null,
  username: null,
  email: null,
  errorStatus: false,
  error: ""
}

export default function reducer(state = defaultState, action) {

  switch (action.type) {
    case "LOGIN_USER":
      return {...state, currentUser: action.payload, currentId: action.payload.id, username: action.payload.username, email: action.payload.email}
    case "ERROR":
      return {...state, errorStatus: true, error: action.payload}
    case "CLEAR_ERROR":
      return {...state, errorStatus: false, error: ""}
    case "LOG_OUT_USER":
      return defaultState
    default:
    return state
  }

}
