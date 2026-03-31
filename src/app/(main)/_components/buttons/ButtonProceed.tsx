"use client"


interface PropInterface{
    name: string
    onClick?: () => void
}


export default function ButtonProceed({
    name,
    onClick = () => {}
}: PropInterface) {
  return (
    <button 
        onClick={onClick} 
        className={`cursor-pointer w-full py-4 rounded-xl text-white bg-linear-to-br from-blue-600 to-blue-900 hover:bg-linear-to-br 
        hover:from-blue-600 hover:to-blue-950`}>
        {name}
    </button>
  )
}
