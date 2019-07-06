import React, { useContext } from 'react'

export const UserContext = React.createContext()
export const UserConsumer = UserContext.Consumer
export const UserProvider = UserContext.Provider
export default () => useContext(UserContext)
