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
        }
      })
  }
}

export const makeAdjBouquet = () => {
  debugger
}
