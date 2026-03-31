"use client"
import IconDefault from '@/_components/icons/IconDefault'


interface PropInterface{
    onClick?: () => void
    name: string
}

export default function ButtonPaginate({
    name='Button', 
    onClick
}: PropInterface) {

    switch(name){
        case 'Next':
            return (
                <button onClick={onClick} className={`ease-in-out duration-200 transition-all cursor-pointer border border-gray-500 
                    hover:bg-gray-600 hover:text-white hover:drop-shadow-lg px-3 py-1 rounded-lg flex items-center 
                    justify-center gap-1 `}>
                    {name}
                    <IconDefault type='right' /> 
                </button>
            )
        case 'Prev':
            return(
                <button onClick={onClick} className={`ease-in-out duration-200 transition-all cursor-pointer border border-gray-500 
                    hover:bg-gray-600 hover:text-white hover:drop-shadow-lg px-3 py-1 rounded-lg flex items-center 
                    justify-center gap-1 `}>
                    <IconDefault type='left' /> 
                    {name}
                </button>
            )
        default: 
            return(
                <button className={`ease-in-out duration-200 transition-all cursor-pointer border border-gray-500 
                    hover:bg-gray-600 hover:text-white hover:drop-shadow-lg px-3 py-1 rounded-lg flex items-center 
                    justify-center gap-1 `}>
                    {name}
                </button>
            )
    }

}
