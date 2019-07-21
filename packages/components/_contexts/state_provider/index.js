import React, { createContext, useContext, useReducer } from 'react'
import applyAsyncMiddleware from '@company/shared/applyAsyncMiddleware'

export const StateContext = createContext()

export const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const stateValue = [state, applyAsyncMiddleware(dispatch)]
  return (
    <StateContext.Provider value={stateValue}>{children}</StateContext.Provider>
  )
}

export default () => useContext(StateContext)
