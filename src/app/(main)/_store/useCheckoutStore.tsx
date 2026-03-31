"use client"

import { create } from "zustand"
import { CheckoutEntity, CheckoutInterface } from "../_data/entities/CheckoutEntity"


interface PropInterface{
    data: CheckoutInterface,
    isLoading: boolean,
    isSubmitting: boolean,
    errors: CheckoutInterface
    setData: (i: CheckoutInterface) => void
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void
    resetData: () => void
    clearErrors: () => void
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: CheckoutInterface },
}


export const useClientStore = create<PropInterface>((set, get) => ({
    data: CheckoutEntity,
    isLoading: true,
    isSubmitting: false,
    errors: CheckoutEntity,
    setData: (i) => {},
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
            case "name":
                if(!value.trim()){
                    error = "Name is required.";
                } 
                break;
            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...CheckoutEntity };
        let hasError = false;
        // Validate NAME
        const nameError = get().validateField("name", data.name);
        if (nameError) {
            errors.name = nameError;
            hasError = true;
        }      
        
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },
 }))