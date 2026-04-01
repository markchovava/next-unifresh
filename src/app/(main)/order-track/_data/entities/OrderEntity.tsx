import { UserEntity, UserInterface } from "@/app/(main)/_data/entities/UserEntity"
import { OrderDetailEntity, OrderDetailInterface } from "./OrderDetailEntity"
import { OrderItemInterface } from "./OrderItemEntity"

export interface OrderInterface{
    id: string | number
    userId: string | number
    orderRef: string
    quantity: number
    status: string
    total: number
    notes: string
    paymentMethod: string
    createdAt: string
    updatedAt: string
    orderDetail: OrderDetailInterface
    orderItems: OrderItemInterface[]
    user: UserInterface
}


export const OrderEntity: OrderInterface = {
    id: '',
    userId: '',
    orderRef: '',
    quantity: 0,
    status: '',
    total: 0,
    notes: '',
    paymentMethod: '',
    createdAt: '',
    updatedAt: '',
    orderDetail: OrderDetailEntity,
    user: UserEntity,
    orderItems: [],
}