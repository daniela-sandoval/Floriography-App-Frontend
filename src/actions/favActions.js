export const makeFav = (userId, bouquetId) => {
  return dispatch => {
    return fetch("https://floriography-app-api.herokuapp.com/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userId,
        bouquet_id: bouquetId
      })
    })
    .then(resp => resp.json())
    .then(data => {
      debugger
      dispatch({type: "ADD_FAVS", payload: data})
    })
  }
}

export const getFavorites = (userId) => {
  return dispatch => {
    return fetch("https://floriography-app-api.herokuapp.com/user_favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userId
      })
    })
    .then(resp => resp.json())
    .then(data => {
      dispatch({type: "USER_FAVS", payload: data})
    })
  }
}

export const deleteFav = (favId) => {
  debugger
  return dispatch => {
    return fetch(`https://floriography-app-api.herokuapp.com/favorites/${favId}`, {
      method: "DELETE"
    })
    .then(dispatch({type: "UPDATE_FAVS", payload: favId}))
  }
}
