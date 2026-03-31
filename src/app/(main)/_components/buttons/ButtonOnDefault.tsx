"use client"


interface PropInterface{
    name: string
}

export default function ButtonOnDefault({ 
    name 
}: PropInterface) {
  return (
    <button 
        className={`px-8 py-4 ease-in-out duration-200 transition-all cursor-pointer text-blue-900
        rounded-xl bg-linear-to-br from-white to-gray-200 hover:bg-linear-to-br 
        hover:from-gray-50 hover:to-gray-300 hover:drop-shadow-xl`}>
        {name}
    </button>
  )
}
