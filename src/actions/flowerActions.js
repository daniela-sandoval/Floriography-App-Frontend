export const fetchFlowers = () => {
  return dispatch => {
    return fetch("http://localhost:3000/flowers")
    .then(resp => resp.json())
    .then(data => {
      dispatch({type: "SET_FLOWERS", payload: data})
    })
  }
}
