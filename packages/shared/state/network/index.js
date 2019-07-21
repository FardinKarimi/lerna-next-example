export const initialState = {}

export const CALL_STARTED = 'CALL_STARTED'
export const CALL_SUCCEEDED = 'CALL_SUCCEEDED'
export const CALL_FAILED = 'CALL_FAILED'

export const actions = (name, { start, success, failure } = {}) => ({
  start: () => ({
    type: CALL_STARTED,
    payload: { name, message: start }
  }),
  success: () => ({
    type: CALL_SUCCEEDED,
    payload: { name, message: success }
  }),
  failure: error => ({
    type: CALL_FAILED,
    payload: { name, message: failure, error }
  })
})

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case CALL_STARTED: {
      return {
        ...state,
        [payload.name]: {
          status: CALL_STARTED,
          message: payload.message,
          error: null
        }
      }
    }
    case CALL_SUCCEEDED: {
      return {
        ...state,
        [payload.name]: {
          status: CALL_SUCCEEDED,
          message: payload.message,
          error: null
        }
      }
    }
    case CALL_FAILED: {
      return {
        ...state,
        [payload.name]: {
          status: CALL_FAILED,
          message: payload.message,
          error: payload.error
        }
      }
    }
  }
}
