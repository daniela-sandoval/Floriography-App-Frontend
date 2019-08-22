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
    dispatch({type: "LOG_OUT_USER"})
    dispatch({type: "LOG_OUT_FAVS"})
    dispatch({type: "LOG_OUT_BOUQUETS"})
  }
}

export const sendEmail = (userId, emailTo, bouquetId) => {
  return dispatch => {
    return fetch("http://localhost:3000/send_email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userId,
        email_to: emailTo,
        bouquet: bouquetId
      })
    })
  }
}

export const updateUserInfo = (newUsername, newEmail, id) => {
  debugger
  return dispatch => {
    return fetch(`http://localhost:3000/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: newUsername,
        email: newEmail
      })
    })
    .then(resp => resp.json())
    .then(user => {
      dispatch({type: "UPDATE_USER_INFO", payload: user})
    })
  }
}

export const deleteAccount = userId => {
  return dispatch => {
    return fetch(`http://localhost:3000/users/${userId}`, {
      method: "DELETE"
    })
    .then( localStorage.clear(),
      dispatch({type: "LOG_OUT_USER"}),
      dispatch({type: "LOG_OUT_FAVS"}),
      dispatch({type: "LOG_OUT_BOUQUETS"})
    )
  }
}
