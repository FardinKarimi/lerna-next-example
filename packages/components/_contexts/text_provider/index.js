import React, { useContext } from 'react'

export const TextContext = React.createContext()
export const TextConsumer = TextContext.Consumer
export const TextProvider = TextContext.Provider
export default () => useContext(TextContext)
