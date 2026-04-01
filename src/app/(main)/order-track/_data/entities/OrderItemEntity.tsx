import { UserEntity, UserInterface } from "@/app/(main)/_data/entities/UserEntity"
import { OrderEntity, OrderInterface } from "./OrderEntity"

export interface OrderItemInterface{
    id: string | number
    userId: string | number
    orderId: string | number
    productName: string
    quantity: number
    price: number
    total: number
    createdAt: string
    updatedAt: string
    user: UserInterface
    order: OrderInterface
}


export const OrderItemEntity: OrderItemInterface = {
    id: '',
    userId: '',
    orderId: '',
    productName: '',
    quantity: 0,
    price: 0,
    total: 0,
    createdAt: '',
    updatedAt: '',
    user: UserEntity,
    order: OrderEntity,
}