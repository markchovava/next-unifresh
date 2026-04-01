"use client"

import IconDefault from "@/_components/icons/IconDefault";



interface PropInterface{
    css?: string
    value: string
    status: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({
    css,
    value,
    onChange,
    status
}: PropInterface) {
  return (
    <div className={`${css} flex-1 flex items-center justify-start`}>
        <input 
            type="text" 
            name="search"
            value={value}
            onChange={onChange}
            placeholder={'Enter Product Name here'}
            className={`px-3 h-full flex-1 border border-gray-300 
            focus:border-gray-400 rounded-l-lg outline-none`} />
        <button 
            type="submit" 
            disabled={status}
            className={`border border-blue-800 cursor-pointer h-full bg-linear-to-br from-blue-700 
            ease-initial transition-all
            to-blue-900 hover:bg-linear-to-br hover:from-blue-700 hover:drop-shadow-lg 
            hover:to-blue-950 px-5 rounded-r-lg`}>
            {status ? 
            <IconDefault type="load" css="text-xl text-white animate-pulse" />
            :
            <IconDefault type="search" css="text-lg text-white" />
            }
        </button>
    </div>
  )
}
