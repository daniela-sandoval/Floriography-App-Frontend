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
    .then(console.log)
  }
}

export const getFavorites = (userId) => {
  debugger
  return dispatch => {
    return fetch("http://localhost:3000/user_favorites", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userId
      })
    })
    .then(resp => resp.json())
    .then(data => {
      dispatch({type: "SET_USER_FAVS", payload: data})
    })
  }
}
