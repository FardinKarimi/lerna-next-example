import combineReducers from '@company/shared/combine_reducers'
import { initialState as network, reducer as networkReducer } from './network'
import { initialState as user, reducer as userReducer } from './user'
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
