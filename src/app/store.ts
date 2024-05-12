import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { counterSlice } from '../features/counter/counterSlice'
import { quotesApiSlice } from '../features/quotes/quotesApiSlice'
import { productsSlice } from '../features/products/productsSlice'
import { authSlice } from '../features/auth/authSlice'
import { postSlice } from '../features/posts/postsSlice'
import { cartsSlice } from '../features/carts/CartSlice'

const rootReducer = combineSlices(
	counterSlice,
	quotesApiSlice,
	productsSlice,
	authSlice,
	postSlice,
	cartsSlice
)
export type RootState = ReturnType<typeof rootReducer>

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const makeStore = (preloadedState?: Partial<RootState>) => {
	const store = configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware => {
			return getDefaultMiddleware().concat(quotesApiSlice.middleware)
		},
		preloadedState,
	})
	setupListeners(store.dispatch)
	return store
}

export const store = makeStore()
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<
	ThunkReturnType,
	RootState,
	unknown,
	Action
>
