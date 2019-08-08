const defaultState = {
  currentUser: {},
  signIn: false
}

export default function reducer(state = defaultState, action) {

  switch (action.type) {
    case "LOGIN_USER":
    return {...state, currentUser: action.payload, signIn: true}
    case "LOG_OUT":
    return {signIn: false}
    default:
    return state
  }

}
