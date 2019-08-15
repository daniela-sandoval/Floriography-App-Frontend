const defaultState = {
  currentUser: {},
  signIn: false,
  currentId: null,
  username: null,
  errorStatus: false,
  error: ""
}

export default function reducer(state = defaultState, action) {

  switch (action.type) {
    case "LOGIN_USER":
      return {...state, currentUser: action.payload, signIn: true, currentId: action.payload.id, username: action.payload.username}
    case "ERROR":
      return {...state, errorStatus: true, error: action.payload}
    case "LOG_OUT":
      return {signIn: false}
    default:
    return state
  }

}
