export const fetchAdjs = () => {
  return dispatch => {
    return  fetch("http://localhost:3000/adjectives")
    .then(resp => resp.json())
    .then(data => {
      dispatch({type:"SET_ADJS", payload: data})
    })
  }
}
