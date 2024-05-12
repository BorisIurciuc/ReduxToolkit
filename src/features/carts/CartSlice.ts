import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import CartState from './types/CartState'
import * as api from './api'

const initialState: CartState = {
	carts: [],
}
export const loadCarts = createAsyncThunk('carts/loadCarts', () => api.getCarts())
export const cartsSlice = createSlice({
	name: 'carts',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(loadCarts.fulfilled, (state, action) => {
			state.carts = action.payload // Update the carts array
		})
	},
})
export default cartsSlice.reducer
