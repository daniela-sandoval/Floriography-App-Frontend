export const fetchFlowers = () => {
  return dispatch => {
    return fetch("https://floriography-app-api.herokuapp.com/flowers")
    .then(resp => resp.json())
    .then(data => {
      dispatch({type: "SET_FLOWERS", payload: data})
    })
  }
}

export const filterFlowers = (filtered) => {
  return dispatch => {
    return dispatch({type: "FILTER_FLOWERS", payload: filtered})
  }
}
