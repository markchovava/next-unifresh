"use client"

import IconDefault from "@/_components/icons/IconDefault"
import { useProductStore } from "@/app/(main)/_store/useProductStore"



export default function ProductQuantity() {
    const {
        quantity, 
        addQuantity, 
        minusQuantity, 
        setQuantity,
    } = useProductStore()

   
  return (
    <div className='rounded-lg h-12 border border-gray-300 flex items-center justify-start'>
        <button 
            onClick={() => minusQuantity()} 
            className='cursor-pointer h-full px-3 flex items-center justify-center'>
            <IconDefault 
                type='minus' 
                css='text-xl text-gray-600 hover:scale-110 ease-in-out duration-200 transition-all' />
        </button>
        <input 
            type='number' 
            name="quantity"
            min={0} 
            value={quantity}
            onChange={setQuantity}
            className='outline-none px-2 h-full w-20 border border-gray-300' />
        <button 
            onClick={() => addQuantity()} 
            className='cursor-pointer h-full px-3 flex items-center justify-center'>
            <IconDefault 
                type='plus' 
                css='text-xl text-gray-600 hover:scale-110 ease-in-out duration-200 transition-all' />
        </button>
    </div>
  )
}
