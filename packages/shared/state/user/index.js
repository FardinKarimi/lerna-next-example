import { actions as networkActions } from '../network/index'

export const initialState = null

export const LOAD_ME = 'LOAD_ME'

export const actions = {
  loadMe: () => {
    const { start, success, failure } = networkActions(LOAD_ME, {
      start: 'fetchMeStart',
      success: 'fetchMeSuccess',
      failure: 'fetchMeFailure'
    })
    return dispatch => {
      dispatch(start())
      setTimeout(() => {
        fetch('http://localhost:3000/api/v1/me')
          .then(response => response.json())
          .then(data => {
            dispatch({ type: LOAD_ME, payload: { data } })
            dispatch(success())
          })
          .catch(error => dispatch(failure(error)))
      }, 500)
    }
  }
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case LOAD_ME: {
      return payload.data
    }
  }
}
