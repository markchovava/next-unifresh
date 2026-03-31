"use client"


interface PropInterface{
    name: string
    css?: string
}

export default function TitleNormal({
    name,
    css
}: PropInterface) {
  return (
    <p className={` ${css} text-2xl font-semibold`}>
        {name}
    </p>
  )
}
