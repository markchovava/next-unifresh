'use client'
import IconDefault from '@/_components/icons/IconDefault'
import { useShopStore } from '../../_store/useShopStore'



interface PropInterface{
    css?: string
}

export default function SearchMainForm({ css }: PropInterface) {
    const { 
        search, 
        setInputValue, 
        isSearching, 
        setIsSearching
    } = useShopStore()

  return (
    <div className={`${css} flex-1 flex items-center justify-start`}>
        <input 
            type="text" 
            name="search"
            value={search}
            onChange={setInputValue}
            placeholder={'Enter Product Name here'}
            className={`px-3 h-full flex-1 border border-gray-300 
            focus:border-gray-400 rounded-l-lg outline-none`} />
        <button 
            type="submit" 
            disabled={isSearching}
            className={`border border-blue-800 cursor-pointer h-full bg-linear-to-br from-blue-700 
            ease-initial transition-all
            to-blue-900 hover:bg-linear-to-br hover:from-blue-700 hover:drop-shadow-lg 
            hover:to-blue-950 px-5 rounded-r-lg`}>
            {isSearching ? 
            <IconDefault type="load" css="text-xl text-white animate-pulse" />
            :
            <IconDefault type="search" css="text-lg text-white" />
            }
        </button>
    </div>
  )
}
