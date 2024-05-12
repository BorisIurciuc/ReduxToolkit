import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectFiltered } from './selectors'
import { loadPostByWord } from './postsSlice'
import PostEditForm from './PostEditForm'
import CommentsList from '../commentList/CommentsList'

export default function PostsList(): JSX.Element {
	const posts = useAppSelector(selectFiltered)
	const dispatch = useAppDispatch()
	const [word, setWord] = useState<string>('')

	useEffect(() => {
		dispatch(loadPostByWord(word))
	}, [dispatch, word])

	return (
		<div>
			<h1>Forum</h1>
			<div>
				<input type="text" value={word} onChange={e => setWord(e.target.value)} />
			</div>
			<ul>
				{posts.map(post => (
					<li key={post.id}>
						<h3>{post.title}</h3>
						<PostEditForm postId={post.id} />
						{post.body}
						<div>
							{post.tags.map(tag => (
								<span key={tag}>{tag}</span>
							))}
						</div>
						<CommentsList postId={post.id} />
					</li>
				))}
			</ul>
		</div>
	)
}
