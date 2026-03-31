"use client"

import Link from "next/link"
import ButtonSecondary from "../buttons/ButtonSecondary"
import TitleTertiary from "../titles/TitleTertiary"



interface PropInterface{
    title: string
    details: string
    href: string
    btnTitle: string
    image: string
    direction?: 'right' | 'left'
}

export default function DoubleSection({
    title,
    details,
    href,
    btnTitle="Shop Now",
    image,
    direction='left'
}: PropInterface) {

    switch(direction) {
        case 'left':
            return (
                <section className="w-full">
                    <div className="mx-auto container__primary lg:grid-cols-2 grid-cols-1 grid lg:gap-6 gap-10">
                        <div className="flex flex-col items-start justify-center">
                            <TitleTertiary
                                name={title} 
                                css="text-gray-800 mb-4" />
                            <p className="text-xl font-light mb-6">
                                {details}
                            </p>
                            <Link href={href}>
                                <ButtonSecondary 
                                css="text-blue-800"
                                name={btnTitle} />
                            </Link>
                        </div>
                    <div className="w-full lg:h-130 h-100 bg-gray-300 overflow-hidden rounded-xl drop-shadow">
                        <img src={image} alt="Image" className="object-cover w-full h-full" />
                    </div>
                    </div>
                </section>
            )
        case 'right':
            return (
                <section className="w-full">
                    <div className="mx-auto container__primary lg:grid-cols-2 grid-cols-1 grid lg:gap-8 gap-10">
                        <div className="w-full lg:h-130 h-100 bg-gray-300 overflow-hidden rounded-xl drop-shadow">
                            <img src={image} alt="Image" className="object-cover w-full h-full" />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <TitleTertiary
                                name={title} 
                                css="text-gray-800 mb-4" />
                            <p className="text-xl font-light mb-6">
                                {details}
                            </p>
                            <Link href={href}>
                                <ButtonSecondary 
                                css="text-blue-800"
                                name={btnTitle} />
                            </Link>
                        </div>
                    </div>
                </section>
            )
        default:
            return (
                <section className="w-full">
                    <div className="mx-auto container__primary lg:grid-cols-2 grid-cols-1 grid gap-6">
                    <div className="flex flex-col items-start justify-center">
                        <TitleTertiary
                            name={title} 
                            css="text-gray-800 mb-4" />
                        <p className="text-xl font-light mb-6">
                            {details}
                        </p>
                        <Link href={href}>
                            <ButtonSecondary 
                            css="text-blue-800"
                            name={btnTitle} />
                        </Link>
                    </div>
                    <div className="w-full h-130 bg-gray-300 overflow-hidden rounded-xl drop-shadow">
                        <img src={image} alt="Image" className="object-cover w-full h-full" />
                    </div>
                    </div>
                </section>
            )
    }

}
