"use client"


interface PropInterface{
    name: string
    quantity?: number
    onClick?: () => void
}

export default function AsideItem({
    name,
    quantity,
    onClick,
}: PropInterface) {

  return (
    <li onClick={onClick} className='group cursor-pointer flex items-center justify-between'>
        <span className={`border-b-2 border-transparent 
        group-hover:text-blue-700 group-hover:border-b-blue-800 pb-[0.5px]`}>
            {name}
        </span>
        {quantity &&
        <span className='group-hover:text-blue-800'>
            [{quantity}]
        </span>
        }
    </li>
  )
}
