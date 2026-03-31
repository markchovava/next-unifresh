"use client"

import IconDefault from "@/_components/icons/IconDefault"
import { useShopStore } from "../../_store/useShopStore"


export default function SearchForm() {
    const { 
        search, 
        setInputValue, 
        isSearching, 
        setIsSearching,
    } = useShopStore()

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //
    }

  return (
    <form onSubmit={handleSearch} className='w-full flex items-center justify-start h-12 overflow-hidden'>
        <input 
            name="search"
            value={search}
            onChange={setInputValue}
            placeholder='Enter Name here.' 
            className='flex-1 px-3 border rounded-l-xl h-full border-gray-300 focus:border-gray-400 outline-none' 
            type='text' />
        <button 
            type='submit' 
            disabled={isSearching}
            className={`cursor-pointer border border-blue-700 rounded-r-xl text-white h-full px-6 bg-linear-to-br 
            from-blue-600 to-blue-800 hover:bg-linear-to-br hover:from-blue-600 hover:to-blue-900`}>
            {isSearching ?
                <IconDefault 
                    type='load' 
                    css='text-lg animate-pulse' />
            :
                <IconDefault 
                    type='search' 
                    css='text-lg' />
            }
        </button>
    </form>
  )
}
