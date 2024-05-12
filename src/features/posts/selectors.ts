import { RootState } from '../../app/store'
import Post from './types/Post'

export const selectPots = (state: RootState): Post[] => state.posts.post
export const selectFiltered = (state: RootState): Post[] => state.posts.filtered