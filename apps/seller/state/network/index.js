export const initialState = {}

export const CALL_STARTED = 'CALL_STARTED'
export const CALL_SUCCEEDED = 'CALL_SUCCEEDED'
export const CALL_FAILED = 'CALL_FAILED'

export const actions = (name, messages) => ({
  start: () => ({
    type: CALL_STARTED,
    payload: { name, message: messages && messages.start }
  }),
  success: () => ({
    type: CALL_SUCCEEDED,
    payload: { name, message: messages && messages.success }
  }),
  failure: error => ({
    type: CALL_FAILED,
    payload: { name, message: messages && messages.failure, error }
  })
})

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case CALL_STARTED: {
      return {
        ...state,
        [payload.name]: { loading: true, message: payload.message, error: null }
      }
    }
    case CALL_SUCCEEDED: {
      return {
        ...state,
        [payload.name]: {
          loading: false,
          message: payload.message,
          error: null
        }
      }
    }
    case CALL_FAILED: {
      return {
        ...state,
        [payload.name]: {
          loading: false,
          message: payload.message,
          error: payload.error
        }
      }
    }
  }
}
