"use client"


interface PropInterface{
    name: string
    css?: string
}

export default function TitleSmall({
    name,
    css
}: PropInterface) {
  return (
    <p className={` ${css} text-lg font-semibold`}>
        {name}
    </p>
  )
}
