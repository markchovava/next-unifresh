"use client"


interface PropInterface{
    name: string
    css: string
}

export default function TitleDefault({name, css='mb-6'}: PropInterface) {
  return (
    <p className={`${css} lg:text-[3rem] text-[2rem] lg:leading-13 leading-9 font-semibold`}>
        {name}
    </p>
  )
}
