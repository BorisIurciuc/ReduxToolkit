import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectCarts } from './selectors'
import { loadCarts } from './CartSlice'

export default function Carts(): JSX.Element {
	const carts = useAppSelector(selectCarts)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(loadCarts())
	}, [dispatch])

	return (
		<div>
			<h1>Carts</h1>
			<div>
				{carts.map(cart => (
					<li key={cart.id}>
						<p>{cart.id}</p>
						<ul>
							{cart.products.map(product => (
								<li key={product.id}>
									<p>{product.title}</p>
									<p>{product.price}</p>
								</li>
							))}
						</ul>
						<p>{cart.total}</p>
					</li>
				))}
			</div>
		</div>
	)
}
