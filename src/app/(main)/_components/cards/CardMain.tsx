import React from 'react'
import StickerDefault from '../stickers/StickerDefault'
import Link from 'next/link'
import ButtonSecondary from '../buttons/ButtonSecondary'


interface PropInterface{
    label: string
    title: string
    href: string
    image: string
}

export default function CardMain({
    label, 
    title, 
    href, 
    image,
}: PropInterface) {
  return (
    <div className="w-full h-full flex items-center justify-between gap-4">
        <div className="w-[60%] pl-[5%] flex flex-col justify-center items-start">
        <StickerDefault name={label} css="mb-4" />
        <h6 className="mb-6 font-medium text-4xl">
            {title}
        </h6>
        <Link href={href}>
            <ButtonSecondary name='Shop Now' />
        </Link>
        </div>
        <div className="w-[40%] h-full flex items-end justify-end overflow-hidden">
        <img 
            src={`/assets/images/no_photo.jpg`} 
            alt='Image' 
            className="object-contain -mr-6" />
        </div>
    </div>
  )
}
