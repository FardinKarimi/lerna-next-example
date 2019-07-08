import combineReducers from '@company/shared/combine_reducers'
import { shop, shopReducer } from './shop'

export const initialState = {
  shop
}

const reducers = { shop: shopReducer }

export const reducer = combineReducers(reducers)
