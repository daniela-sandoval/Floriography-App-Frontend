export const userLoginFetch = userInfo => {
  return dispatch => {
    dispatch({type: "CLEAR_ERROR"})
    return fetch("https://floriography-app-api.herokuapp.com/login", {
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
      } else {
        dispatch({type: "ERROR", payload: data.errors})
      }
    })
  }
}

export const newUserFetch = userInfo => {
  return dispatch => {
    dispatch({type: "REGISTER_CLEAR_ERROR"})
    return fetch("https://floriography-app-api.herokuapp.com/signup", {
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
      } else {
        dispatch({type: "REGISTER_ERROR", payload: data.errors})
      }
    })
  }
}

export const getProfile = () => {
  return dispatch => {
    return fetch("https://floriography-app-api.herokuapp.com/profile", {
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
    return fetch("https://floriography-app-api.herokuapp.com/send_email", {
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
  return dispatch => {
    return fetch(`https://floriography-app-api.herokuapp.com/users/${id}`, {
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
    return fetch(`https://floriography-app-api.herokuapp.com/users/${userId}`, {
      method: "DELETE"
    })
    .then( localStorage.clear(),
      dispatch({type: "LOG_OUT_USER"}),
      dispatch({type: "LOG_OUT_FAVS"}),
      dispatch({type: "LOG_OUT_BOUQUETS"})
    )
  }
}
