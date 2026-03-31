"use client"


interface PropInterface{
    name: string
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void
    status?: boolean
}

export default function ButtonDefault({ 
    name,
    type='button',
    onClick = () => {},
    status = false
}: PropInterface) {
  return (
    <button
        type={type}
        onClick={onClick} 
        disabled={status}
        className={`px-8 py-4 ease-in-out duration-200 transition-all cursor-pointer text-gray-50
        rounded-xl bg-linear-to-br from-blue-500 to-blue-900 hover:bg-linear-to-br 
        hover:from-blue-600 hover:to-blue-900 hover:drop-shadow-xl`}>
        {name}
    </button>
  )
}
