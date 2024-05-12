import type Cart from './types/Cart'

export async function getCarts(): Promise<Cart[]> {
	const res = await fetch('https://fakestoreapi.com/carts')
	return res.json()
}
