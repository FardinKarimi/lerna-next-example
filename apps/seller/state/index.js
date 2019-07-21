import combineReducers from '@company/shared/combine_reducers'
import { initialState as network, reducer as networkReducer } from './network'
import { initialState as user, reducer as userReducer } from './user'

export const initialState = serverState => ({
  network,
  user,
  ...serverState
})

const reducers = {
  network: networkReducer,
  user: userReducer
}

export const reducer = combineReducers(reducers)
