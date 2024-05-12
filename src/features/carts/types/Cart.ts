export default interface Cart {
	id: number
	products: [
		{
			id: number
			title: string
			price: number
			thumbnail: string
		}
	]
	total: number
}
