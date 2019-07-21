import combineReducers from '@company/shared/combine_reducers'
import {
  initialState as network,
  reducer as networkReducer
} from '@company/shared/state/network'
import {
  initialState as user,
  reducer as userReducer
} from '@company/shared/state/user'
import { initialState as shop, reducer as shopReducer } from './shop'

export const initialState = {
  network,
  user,
  shop
}

const reducers = {
  network: networkReducer,
  user: userReducer,
  shop: shopReducer
}

export const reducer = combineReducers(reducers)
