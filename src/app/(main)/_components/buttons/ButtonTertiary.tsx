"use client"


interface PropInterface{
    type: 'button' | 'submit' | 'reset'
    name?: string
    onClick?: () => void
}

export default function ButtonTertiary({ 
    type, 
    name = "Button", 
    onClick = () => {}
}: PropInterface) {

  return (
    <button 
        onClick={onClick} 
        type={type} 
        className={`px-10 py-4 cursor-pointer rounded-xl border transition-all ease-in-out 
        duration-200 hover:drop-shadow-xl text-white border-white hover:bg-white hover:text-gray-800`}>
        {name}
    </button>
  )
}
