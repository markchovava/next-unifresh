"use client"

import { useContactStore } from "../../_store/useContactStore"
import ButtonDefault from "../buttons/ButtonDefault"
import TextInput from "./inputs/TextInput"
import TextArea from "./textareas/TextArea"

export default function ContactForm() {
    const {
        data, 
        isSubmitting, 
        setInputValue, 
        setIsSubmitting,
        errors
    } = useContactStore()
    
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {}

  return (
    <form onSubmit={handleSubmit}>
        <TextInput 
            label='Name'
            type='text'
            placeholder='Enter Name here.'
            name='name' 
            onChange={setInputValue} 
            value={data.name ?? ''} 
            error={errors.name}
        />
        <TextInput 
            label='Email'
            type='text'
            placeholder='Enter Email here.'
            name='email' 
            onChange={setInputValue} 
            value={data.email ?? ''} 
            error={errors.email}
        />
        <TextInput 
            label='Phone'
            type='text'
            placeholder='Enter Phone here.'
            name='phone' 
            onChange={setInputValue} 
            value={data.phone ?? ''} 
            error={errors.phone}
        />
        <TextArea
            label='Message'
            placeholder='Enter Message here.'
            name='message' 
            onChange={setInputValue} 
            value={data.message ?? ''} 
            error={errors.message}
        />
        <ButtonDefault 
            name='Submit' 
            type='submit' 
        />
    </form>
  )
}
