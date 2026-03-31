"use client"

import { create } from "zustand"
import { ProductInterface } from "../_data/entities/ProductEntity"



interface PropInterface{
    search: string
    productList: ProductInterface[],
    isSearching: boolean
    error: string
    sortValue: string
    setProductList: (i: ProductInterface[]) => void
    setSortValue: (e: React.ChangeEvent<HTMLSelectElement>) => void
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void
    setIsSearching: (i: boolean) => void
}

export const useShopStore = create<PropInterface>((set, get) => ({
    search: '',
    error: '',
    productList: [],
    isSearching: false,
    sortValue: 'Default',
    setProductList: (i) => {
        set({
            productList: i
        })
    },
    setSortValue: (e) => {
        const { value } = e.target;
        set({
            sortValue: value
        })
    },
    setInputValue: (e) => {
        const { name, value } = e.target;
        set({
            [name]: value,
            error: '',
        });
    },
    setIsSearching: (i) => {
        set({
            isSearching: i
        })
    }
}))