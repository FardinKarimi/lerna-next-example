export default dispatch => action => {
  if (typeof action === 'function') {
    return action(dispatch)
  } else {
    return dispatch(action)
  }
}
