import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectProducts } from './selectors'
import { deleteProduct, loadProducts } from './productsSlice'
import style from './Products.module.css'

export default function ProductsList(): JSX.Element {
	const products = useAppSelector(selectProducts)
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(loadProducts())
	}, [dispatch])

	return (
		<div>
			<h1>Product List for you desire</h1>
			<div className={style.containerProduct}>
				{products.map(product => (
					<li key={product.id}>
						<b>{product.title} </b> <br />
						{product.description} <br />
						<img src={product.image} alt="" style={{ width: '150px' }} /> <br />
						{product.price}
						<button type="button" onClick={() => dispatch(deleteProduct(product.id))}>
							Удалить
						</button>
					</li>
				))}
			</div>
		</div>
	)
}
