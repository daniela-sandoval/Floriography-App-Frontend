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
  }
}
