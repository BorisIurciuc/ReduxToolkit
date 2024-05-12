import PostsState from './types/PostsState'
import * as api from './api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState: PostsState = {
	post: [],
	filtered: [],
}

export const loadPosts = createAsyncThunk('posts/loadPosts', () => api.getAll())
export const loadPostByWord = createAsyncThunk('posts/loadPostByWord', (word: string) =>
	api.getPostsByWord(word)
)
export const editTitle = createAsyncThunk(
	'posts/editTitle',
	({ title, id }: { title: string; id: number }) => api.editPostTitle(title, id)
)

export const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(loadPosts.fulfilled, (state, action) => {
				state.post = action.payload.posts
				//state.post = action.payload.posts
			})
			.addCase(editTitle.fulfilled, (state, action) => {
				state.filtered = state.filtered.map(post =>
					post.id === action.payload.id ? action.payload : post
				)
			})
			.addCase(loadPostByWord.fulfilled, (state, action) => {
				state.filtered = action.payload.posts
			})
	},
})
export default postSlice.reducer
