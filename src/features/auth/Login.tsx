import { FormEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectError } from './selectors'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router-dom'
import { login } from './authSlice'

export default function Login(): JSX.Element {
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const error = useAppSelector(selectError)
	const dispath = useAppDispatch()
	const navigate = useNavigate()
	function handleLogin(e: FormEvent<HTMLFormElement>): void {
		e.preventDefault()
		console.log(dispath(login({ username, password })))
	}

	return (
		<>
			<p>Подсказка: kminchelle, 0lelplR</p>
			<p>{error}</p>
			<form onSubmit={handleLogin}>
				<input
					type="text"
					placeholder="username"
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
				<input
					type="text"
					placeholder="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<button type="submit">Login</button>
			</form>
		</>
	)
}
