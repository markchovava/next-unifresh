import { UserEntity, UserInterface } from "@/app/(main)/_data/entities/UserEntity"
import { OrderEntity, OrderInterface } from "./OrderEntity"

export interface OrderDetailInterface{
    id: string | number
    userId: string | number
    orderId: string | number
    name: string
    email: string
    address: string
    phone: string
    notes: string
    createdAt: string
    updatedAt: string
    user: UserInterface
}


export const OrderDetailEntity: OrderDetailInterface = {
    id: '',
    userId: '',
    orderId: '',
    name: '',
    email: '',
    address: '',
    phone: '',
    notes: '',
    createdAt: '',
    updatedAt: '',
    user: UserEntity,
}