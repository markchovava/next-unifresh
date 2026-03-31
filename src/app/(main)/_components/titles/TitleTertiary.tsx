"use client"

import { ReactNode } from "react"


interface PropInterface{
    name: string | ReactNode
    css?: string
}

export default function TitleTertiary({
    name, 
    css='mb-3'
}: PropInterface) {

  return (
    <p className={`${css} lg:text-[1.5rem] text-[1.3rem] lg:leading-7 leading-7 font-semibold`}>
        {name}
    </p>
  )
}
