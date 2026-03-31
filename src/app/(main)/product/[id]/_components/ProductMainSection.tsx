"use client" 

import ProductQuantity from './ProductQuantity'
import TitleNormal from '@/app/(main)/_components/titles/TitleNormal'
import SpacerTertiary from '@/app/(main)/_components/spacers/SpacerTertiary'
import SpacerDefault from '@/app/(main)/_components/spacers/SpacerDefault'
import { ProductData } from '@/app/(main)/_data/sample/ProductData'
import ProductCard from '@/app/(main)/_components/cards/ProductCard'
import { useProductStore } from '@/app/(main)/_store/useProductStore'
import { ReactNode, useEffect } from 'react'
import { formatDate } from '@/_utils/formatDate'


interface PropInterface{
    id: number | string
}

export default function ProductMainSection({id}: PropInterface) {
    const uid = Number(id)
    const mData = ProductData.find(i => i.id == uid)
    const { data, setData } = useProductStore()
    useEffect(() => {
        if(mData) {
            setData(mData)
        }
    }, [setData])
  return (
    <>
    <section className='w-full'>
        <div className='mx-auto container__primary grid md:grid-cols-3 gap-8 '>
            {/* LEFT */}
            <div className='col-span-2 md:order-1 order-2'>
                <figure className='w-full h-110 bg-gray-300 rounded-xl mb-4'></figure>
                <div className='flex flex-wrap gap-4'>
                    <figure className='h-20 cursor-pointer aspect-5/4 bg-gray-400 rounded-lg'></figure>
                    <figure className='h-20 cursor-pointer aspect-5/4 bg-gray-400 rounded-lg'></figure>
                    <figure className='h-20 cursor-pointer aspect-5/4 bg-gray-400 rounded-lg'></figure>
                </div>
                <SpacerDefault />
                <TitleNormal name='Description' css='text-blue-800' />
                <SpacerTertiary />
                <div className='text-md font-light'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto eaque nesciunt 
                    ducimus inventore quae fugit, culpa accusamus ex dignissimos aperiam corporis quidem 
                    voluptatum nostrum sequi in! Natus porro reprehenderit illo.
                </div>
                <SpacerTertiary />
                <TitleNormal 
                    name='Additional Information' 
                    css='text-blue-800 mb-3' />
                <section>
                    <div className='bg-gray-200 text-gray-700 flex items-center justify-start font-semibold'>
                        <div className='w-[60%] p-2 border-r border-gray-400'>NAME</div>
                        <div className='w-[40%] p-2'>DETAILS</div>
                    </div>
                    <div className=' flex items-center justify-start border-b border-gray-300'>
                        <div className='w-[60%] p-2 '>NAME</div>
                        <div className='w-[40%] p-2'>DETAILS</div>
                    </div>
                    <div className=' flex items-center justify-start border-b border-gray-300'>
                        <div className='w-[60%] p-2 '>NAME</div>
                        <div className='w-[40%] p-2'>DETAILS</div>
                    </div>
                </section>
                
                <SpacerDefault />
                <TitleNormal 
                    name='Delivery & Returns' 
                    css='text-blue-800' />
                <SpacerTertiary />
                <div className='text-md font-light'>
                    <p className='mb-4'>
                        Lorem ipsum, dolor sit amet cectetur adipisicing elit. Iusto eaque nesciunt 
                        ducimus inventore quae fugit,lpa accusamus ex dignissimos aperiam corporis quidem 
                        voluptatum nostrum sequi in! Natus porro reprehenderit illo.
                    </p>
                    <p className='mb-4'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto eaque nesciunt 
                        ducimus inventore quae fugit, culpa accusamus ex dignissimos aperiam corporis quidem 
                        voluptatum nostrum sequi in! Natus porro reprehenderit illo.
                    </p>
                </div>
            </div>

            {/* RIGHT */}
            <div className='col-span-1 h-full pt-10 md:order-2 order-1'>
                <p className='text-[1.6rem] font-semibold text-gray-800 mb-2'>{data.name}</p>
                <p className='text-[2rem] font-bold text-blue-800 mb-2'>{data.price ? '$' + data.price.toFixed(2) : 'Not Added'}</p>
                <Record label='Category' value={data.category} />
                <Record label='Type' value={data.type} />
                <Record label='Package Date' value={data.packageDate} />
                <Record label='Measuring Unit' value={data.unit} />
                <Record label='Grade' value={data.grade} />
                <div className='flex items-center justify-between gap-6 mb-4 mt-6'>
                    <ProductQuantity />
                    <button className={`flex-1 rounded-lg cursor-pointer px-8 py-3 text-white bg-linear-to-br from-blue-600 to-blue-900 hover:bg-linear-to-br hover:from-blue-600 hover:to-blue-950`}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

        <div className='mx-auto container__primary '>
            <SpacerDefault />
            <div className='w-full border-b border-gray-300' />
            <SpacerDefault />
            <TitleNormal name='You may also like' css='text-blue-800' />
            <SpacerTertiary />
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-8'>
                {ProductData.slice(0, 4).map((i, key) => (
                    <ProductCard
                        key={key}
                        id={i.id}
                        category={i.category}
                        name={i.name}
                        price={i.price}
                        status={i.status}
                    />
                ))}
            </div>
            <SpacerDefault />
        </div>
    </section>
    </>
  )
}


interface pInterface{
    label: string
    value: ReactNode
}

function Record({label, value}: pInterface){
    return(
        <div className='mb-3'>
            <p className='text-sm'>{label}:</p>
            <p className='text-xl'>{value}</p>
        </div>
    )
}
