export const userLoginFetch = userInfo => {

  return dispatch => {
    return (
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
      .then(resp => resp.json())
      .then(data => {
        if(data.token) {
          localStorage.token = data.token
          dispatch({type: "LOGIN_USER", payload: data})
        }
      })
    )
  }

}

export const newUserFetch = userInfo => {
  return dispatch => {
    return (
      fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
      .then(resp => resp.json())
      .then(data => {
        debugger
        if(data.token) {
          localStorage.token = data.token
          dispatch({type: "LOGIN_USER", payload: data})
        }
      })
    )
  }

}

export const getProfile = () => {
  return dispatch => {
    return fetch("http://localhost:3000/profile", {
      headers: {
      "Authorization": localStorage.token
      }
    })
    .then(resp => resp.json())
    .then(data => {
      if(data.id) {
        dispatch({type: "LOGIN_USER", payload: data})
        dispatch({type: "USER_BOUQUETS", payload: data.bouquets})
      }
    })
  }
}

export const logOutUser = () => {
  return dispatch => {
    localStorage.clear()
    return dispatch({type: "LOG_OUT"})
  }
}
