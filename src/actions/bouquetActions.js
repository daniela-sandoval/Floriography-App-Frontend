export const makeInputBouquet = (userId, newBouquet) => {
  return dispatch => {
    return fetch("http://localhost:3000/bouquets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: userId,
          name: newBouquet.title,
          sentence: newBouquet.sentence
        })
      })
      .then(resp => resp.json())
      .then(data => {
        if(data.id) {
          dispatch({type: "ADD_TO_BOUQUET", payload: data})
          dispatch({type: "CLEAR_LIST"})
        }
      })
  }
}

export const makeAdjBouquet = (adjs, userId, title) => {
  return dispatch => {
    return fetch("http://localhost:3000/bouquet_adj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userId,
        name: title,
        adjectives: adjs
      })
    })
    .then(resp => resp.json())
    .then(data => {
      if(data.id) {
        dispatch({type: "ADD_TO_BOUQUET", payload: data})
      }
    })
  }
}

export const makeRandomBouquet = userId => {
  return dispatch => {
    return fetch("http://localhost:3000/rand_bouquets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userId,
        name: "🌱🌸 Random 🌸🌱"
      })
    })
    .then(resp => resp.json())
    .then(data => {
      if(data.id) {
        dispatch({type: "ADD_TO_BOUQUET", payload: data})
      }
    })
  }
}

export const deleteBouquet = (bouquetId, updatedBouquets) => {
  debugger
  return dispatch => {
    return fetch(`http://localhost:3000/bouquets/${bouquetId}`, {
      method: "DELETE"
    })
    .then(dispatch({type: "UPDATE_BOUQUET", payload: updatedBouquets}))
  }
}
