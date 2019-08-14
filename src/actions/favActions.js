export const makeFav = (userId, bouquetId) => {
  debugger
  return dispatch => {
    return fetch("http://localhost:3000/favorites", {
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
      dispatch({type: "UPDATE_FAVS", payload: data})
    })
  }
}

export const getFavorites = (userId) => {
  debugger
  return dispatch => {
    return fetch("http://localhost:3000/user_favorites", {
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

export const getFeedFavs = userId => {
  return dispatch => {
    return fetch("http://localhost:3000/user_favorites", {
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
      dispatch({type: "FEED_FAVS", payload: data})
    })
  }
}
