import type ProductsState from './types/ProductState'
import * as api from './api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const initialState: ProductsState = {
	products: [],
}
export const loadProducts = createAsyncThunk('products/loadProducts', () => api.getAll())
export const deleteProduct = createAsyncThunk('delete/product', (id: number) =>
	api.deleteProduct(id)
)

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {}, //not async code
	extraReducers: builder => {
		builder
			.addCase(loadProducts.fulfilled, (state, action) => {
				state.products = action.payload
			})
			.addCase(deleteProduct.fulfilled, (state, action) => {
				state.products = state.products.filter(product => product.id !== action.payload.id)
			})
	},
})
export default productsSlice.reducer
