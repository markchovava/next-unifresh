"use client"


interface PropInterface{
    type?: 'button' | 'submit' | 'reset'
    name: string
    onClick?: () => void
    css?: string
}

export default function ButtonSecondary({
    type='button',
    name,
    onClick= () => {},
    css,
}: PropInterface) {
    
  return (
    <button 
        type={type} 
        onClick={onClick} 
        className={`${css} hover:text-blue-800 cursor-pointer border-b-4 border-dotted 
            font-medium pb-1 hover:border-b-transparent transition-all ease-in-out duration-200`}>
        {name}
    </button>
  )
}
