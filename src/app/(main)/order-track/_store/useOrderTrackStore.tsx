"use client"

import { create } from "zustand"
import { OrderEntity, OrderInterface } from "../_data/entities/OrderEntity"
import { ChangeEvent } from "react"

interface PropInterface{
    search: string
    data: OrderInterface
    isLoading: boolean
    isSubmitting: boolean
    errors: OrderInterface
    isSearching: boolean
    setIsSearching: (i: boolean) => void
    setData: (i: OrderInterface) => void
    setSearch: ( e: React.ChangeEvent<HTMLInputElement> ) => void
    setInputValue: (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void
    resetData: () => void
    clearErrors: () => void
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: OrderInterface },
}


export const useOrderTrackStore = create<PropInterface>((set, get) => ({
    search: '',
    data: OrderEntity,
    isLoading: true,
    isSubmitting: false,
    errors: OrderEntity,
    isSearching: false,
    setIsSearching: (i) => {
        set({
            isSearching: i
        })
    },
    setData: (i) => {},
    setSearch: (e) => {
        const {name, value} = e.target
        set({
            search: value
        })
    },
    setInputValue: (e) => {
        const { name, value } = e.target;
        const currentData = get().data;
        const currentErrors = get().errors;
        set({
            data: {
                ...currentData,
                [name]: value
            },
            // Clear error for this field if it exists
            errors: currentErrors[name as keyof typeof currentErrors]
                ? { ...currentErrors, [name]: "" }
                : currentErrors
        });
    },
    resetData: () => {},
    clearErrors: () => {},
    validateField: (name, value) => {
        let error = ""
        switch(name){
            case "orderRef":
                if(!value.trim()){
                    error = "orderRef is required.";
                } 
                break;
            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...OrderEntity };
        let hasError = false;
        // Validate NAME
        const orderRefError = get().validateField("orderRef", data.orderRef);
        if (orderRefError) {
            errors.orderRef = orderRefError;
            hasError = true;
        }      
        
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },
 }))