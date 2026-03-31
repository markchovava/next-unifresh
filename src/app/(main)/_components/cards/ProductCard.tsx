import ShopSticker from '../stickers/ShopSticker'
import { NoImageData } from '../../_data/sample/NoImageData'
import { TrimString } from '@/_utils/StringManipulation'
import Link from 'next/link'



interface PropInterface{
    id?: number
    image?: string
    category: string
    name: string
    price: number
    status: string
}

export default function ProductCard({
    id,
    category,
    name,
    price,
    image,
    status
}: PropInterface) {
  return (
    <div className='group rounded-lg overflow-hidden w-full bg-white drop-shadow'>
        <div className='relative aspect-5/4 bg-gray-200 overflow-hidden border-b border-gray-100'>
            <figure className='absolute z-5 w-full h-full top-0 left-0'>
            <img src={image ?? NoImageData} className='group-hover:scale-110 ease-in-out duration-200 transition-all w-full h-full object-cover' />
            </figure>
            <ShopSticker name={status} />
        </div>
        <div className='px-2 pt-2 pb-3'>
            <p className='text-xs text-gray-700 mb-1 uppercase'>{category}</p>
            <Link href={`/product/${id}`}>
                <p className='font-medium mb-2 text-gray-800 hover:underline hover:text-blue-800'>
                    {TrimString(name, 20)}
                </p>
            </Link>
            <div className='flex items-center justify-between'>
            <p className='font-medium text-blue-800 text-xl'>${price.toFixed(2)}</p>
            <button 
                type='button' 
                className={`cursor-pointer rounded-lg px-2 py-2 text-sm border border-blue-700 
                text-blue-800 hover:bg-linear-to-br hover:text-white hover:from-blue-600 hover:to-blue-900`}>
                Add to Cart
            </button>
            </div>
        </div>
    </div>
  ) 
}
