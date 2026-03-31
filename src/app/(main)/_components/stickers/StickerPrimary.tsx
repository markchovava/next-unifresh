"use client"


interface PropInterface{
    name: string
    css: string
}

export default function StickerPrimary({
    name, 
    css
}: PropInterface) {
  return (
    <p className={`tracking-widest uppercase ${css}`}>{name}</p>
  )
}
