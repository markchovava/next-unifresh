"use client"


interface PropInterface{
    name: string
    css?: string
}

export default function BannerSecondary({ 
    name, 
    css='bg-blue-800 text-white' 
}: PropInterface) {

  return (
    <section className={`h-60 ${css}`}>
        <div className={`container__primary mx-auto h-full 
            font-extrabold text-[3rem] flex items-center justify-center`}>
            {name}
        </div>
    </section>
  )
}
