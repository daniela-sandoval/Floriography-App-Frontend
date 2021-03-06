export const fetchAdjs = () => {
  return dispatch => {
    return  fetch("https://floriography-app-api.herokuapp.com/adjectives")
    .then(resp => resp.json())
    .then(data => {
      dispatch({type:"SET_ADJS", payload: data})
    })
  }
}

export const addAdjList = (adjective) => {
  return dispatch => {
    dispatch({type: "ADD_TO_LIST", payload: adjective})
  }
}

export const removeAdj = (list) => {
  return dispatch => {
    dispatch({type: "REMOVE_FROM_LIST", payload: list})
  }
}

export const clearList = () => {
  return dispatch => {
    dispatch({type: "CLEAR_LIST"})
  }
}

export const fetchTones = () => {
  return dispatch => {
    return fetch("https://floriography-app-api.herokuapp.com/tones")
    .then(resp => resp.json())
    .then(data => {
      dispatch({type: "SET_TONES", payload: data})
    })
  }
}
