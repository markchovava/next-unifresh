"use client"

import { ReactNode } from "react"


interface PropInterface{
    name: string | ReactNode
    css?: string
}

export default function TitleSecondary({name, css='mb-4'}: PropInterface) {
  return (
    <p className={`${css} lg:text-[2rem] text-[1.5rem] lg:leading-9 leading-7 font-semibold`}>
        {name}
    </p>
  )
}
