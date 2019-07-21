import combineReducers from '@company/shared/combine_reducers'
import {
  initialState as network,
  reducer as networkReducer
} from '@company/shared/state/network'
import {
  initialState as user,
  reducer as userReducer
} from '@company/shared/state/user'

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
