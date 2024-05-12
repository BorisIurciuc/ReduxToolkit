import type Product from './types/Product'
//GET
export async function getAll(): Promise<Product[]> {
	const res = await fetch('https://fakestoreapi.com/products')
	return res.json()
}
//DELETE
export async function deleteProduct(id: number): Promise<Product> {
	const res = await fetch(`https://fakestoreapi.com/products/${id}`, { method: 'DELETE' })
	return res.json()
}
