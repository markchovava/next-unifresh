export interface CartItemInterface{
    id: string | number
    productId: string | number
    productName: string
    price: number
    quantity: number
    total: number
    createdAt: string
    updatedAt: string
}

export const CartItemEntity = {
    id: "",
    productId: '',
    productName: '',
    price: 0,
    quantity: 0,
    total: 0,
    createdAt: '',
    updatedAt: '',
}