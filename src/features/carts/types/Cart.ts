export default interface Cart {
	id: number
	userId: number
	products: [
		{
			productId: number
			quantity: number
		}
	]
}
