"use client"

import { create } from "zustand"
import { ContactEntity, ContactInterface } from "../_data/entities/ContactEntity"


interface PropInterface{
    data: ContactInterface
    isSubmitting: boolean
    errors: ContactInterface
    resetData: () => void
    setData: (i: ContactInterface) => void
    setIsSubmitting: (i: boolean) => void
    setError: (name: string, value: string) => void
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void
    clearErrors: () => void
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: ContactInterface },
}


export const useContactStore = create<PropInterface>((set, get) => ({ 
    data: ContactEntity,
    isSubmitting: false,
    errors: ContactEntity,
    resetData: () => {
        set({
            data: ContactEntity
        })
    },
    setData: (i) => {
        set({
            data: i
        })
    },
    setIsSubmitting: (i) => {
        set({
            isSubmitting: i
        })
    },
    setError: (name, value) => {
        const i = get().data
        set({
            data: {...i, [name]: value}
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
    clearErrors: () => {
        set({
            errors: ContactEntity,
        })
    },
    validateField: (name, value) => {
        let error = ""
        switch(name){
            case "email":
                if(!value.trim()){
                    error = "Email is required.";
                } 
                break;
            case "message":
                if (!value.trim()) {
                    error = "Message is required.";
                }
                break;
            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...ContactEntity };
        let hasError = false;
        // Validate EMAIL
        const emailError = get().validateField("email", data.email);
        if (emailError) {
            errors.email = emailError;
            hasError = true;
        }
        // Validate message
        const messageError = get().validateField("message", data.message);
        if (messageError) {
            errors.message = messageError;
            hasError = true;
        }
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },
}))