import { resetRollForm } from './rollForm';

const API_URL = process.env.REACT_APP_API_URL;

// Action Creators
export const setRolls = rolls => {
  return {
    type: 'GET_ROLLS',
    rolls

  }
}

export const addRoll = roll => {
  // console.log(roll)
  return {
    type:'CREATE_ROLL',
    roll
  }
}

export const removeRoll = roll => {
  return {
    type: 'REMOVE_ROLL',
    roll
  }
}

export const addLikes = roll => {
  return {
    type: 'LIKE_ROLL',
    roll
  }
}


// Async actions
export const fetchRolls= () => {
  return dispatch => {
    return fetch(`${API_URL}/rolls`)
    .then(res => res.json())
    .then(rolls => {
      dispatch(setRolls(rolls))
    })
    .catch(error => console.log(error));
  }
}

export const fetchIndRoll = (rollId) => {
	return dispatch => {
		return fetch(`${API_URL}/rolls/${rollId}`)
			.then(response => response.json())
			.then(roll => {
				dispatch(setRolls([roll]));
			})
			.catch(error => console.log(error));
	}
}

export const createRoll = (roll, routerHistory) => {
  // console.log(roll, API_URL)
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/rolls`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({roll: roll})
    })
    // .then(handleErrors)
    .then(response => response.json())
    .then(roll => {
      // console.log(roll)
      dispatch(addRoll(roll))
      dispatch(resetRollForm())
      routerHistory.replace(`/rolls/${roll.id}`)
    })
    // .catch(error => {
    //   dispatch({type: 'error'})
    //   routerHistory.replace(`/rolls/new`)
    //  })
  }
}

export const deleteRoll = (rollId, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/rolls/${rollId}`, {
      method: "DELETE"
    })
    .then(response => {
      dispatch(removeRoll(rollId));
      routerHistory.replace('/rolls');
    })
    .catch(error => console.log(error))
  }
}

export const likeRoll = (roll, rolls) => {
  const updatedRoll = Object.assign(...roll, { likes: roll.likes + 1 })
  return dispatch => {
    return fetch(`${API_URL}/rolls/${roll.id}`, {
      method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({roll: updatedRoll})
      })
      .then(response => response.json())
      .then(roll => {
        dispatch(addLikes(roll))
        dispatch(addLikes(rolls))
      })
    .catch(error => console.log(error))
  }
}

function handleErrors(response){
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
