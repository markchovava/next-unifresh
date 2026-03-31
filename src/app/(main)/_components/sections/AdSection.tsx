"use client"

import TitleTertiary from '../titles/TitleTertiary'
import TitleSecondary from '../titles/TitleSecondary'
import ButtonOnDefault from '../buttons/ButtonOnDefault'
import Link from 'next/link'
import { ReactNode } from 'react'



interface PropInterface{
    leftTitle: string | ReactNode
    centerTitle: string | ReactNode
    btnTitle?: string 
    href?: string
}

export default function AdSection({
    leftTitle,
    centerTitle,
    btnTitle='Shop Now',
    href='#'
}: PropInterface) {

  return (
    <section className="w-full">
        <div className={`mx-auto container__primary lg:h-50 px-8 lg:py-4 py-10 rounded-xl 
            text-white bg-blue-800 flex gap-6 lg:flex-row flex-col items-center 
            justify-between`}>
            <div className="">
                <TitleTertiary
                    name={leftTitle} 
                    css="text-green-200" />
            </div>
            <div className="">
                <TitleSecondary name={centerTitle} css='' />
            </div>
            <div className="">
                <Link href={href ?? '#'}>
                    <ButtonOnDefault name={btnTitle} />
                </Link>
            </div>
        </div>
    </section>
  )
}
