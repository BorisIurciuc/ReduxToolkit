import { RootState } from '../../app/store'
import type Cart from './types/Cart'

export const selectCarts = (state: RootState): Cart[] => state.carts.carts
