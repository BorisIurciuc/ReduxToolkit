// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { selectUser } from '../../features/auth/selectors'

export default function Navbar(): JSX.Element {
	const user = useAppSelector(selectUser)
	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="counter">Counter</NavLink>
			<NavLink to="products">Products</NavLink>
			<NavLink to="carts">Carts</NavLink>
			{user?.username ? (
				<>
					<NavLink to="posts">Forum</NavLink>
				</>
			) : (
				<NavLink to="login">Login</NavLink>
			)}
		</nav>
	)
}
