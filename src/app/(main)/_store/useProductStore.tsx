"use client"

import { create } from "zustand"
import { ProductEntity, ProductInterface } from "../_data/entities/ProductEntity"



interface PropInterface{
    data: ProductInterface
    quantity: string | number
    setData: (i: ProductInterface) => void
    setQuantity: (e: React.ChangeEvent<HTMLInputElement>) => void
    addQuantity: () => void
    minusQuantity: () => void
    resetQuantity: () => void
}

export const useProductStore = create<PropInterface>((set, get) => ({
    data: ProductEntity,
    quantity: 0,
    setData: (i) => {
        set({
            data: i
        })
    },
    setQuantity: (e) => {
        const val = parseInt(e.target.value, 10);
        set({
            quantity: isNaN(val) ? 0 : val
        })
    },
    addQuantity: () => {
        const i = Number(get().quantity)
        set({
            quantity: i + 1
        })
    },
    minusQuantity: () => {
        const i = Number(get().quantity)
        set({
            quantity: Math.max(0, i - 1)
        })
    },
    resetQuantity: () => {
        set({
            quantity: 0
        })
    }
}))