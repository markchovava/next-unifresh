"use client"

interface PropInterface{
    name: string
}

export default function ShopSticker({
    name
}: PropInterface) {

    const css = () => {
        switch(name) {
            case 'In Stock':
                return 'bg-green-600'
            case 'Out Of Stock':
                return 'bg-red-600'
            default:
                return 'bg-gray-600'
        }
    }

  return (
    <span className={`${css()} text-sm absolute z-10 top-[6%] left-[5%] text-white  px-2 py-1 rounded`}>
        {name}
    </span>
  )
}
