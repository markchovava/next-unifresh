"use client"
import IconDefault from "@/_components/icons/IconDefault"
import Link from "next/link"


interface CompInterface{
    href: string 
    type: string 
    css: string
}
export default function AccountCartNav({
    href, 
    type, 
    css
}:CompInterface){
    return(
        <Link href={href}>
            <button type="button"
                className={`${css} cursor-pointer px-4 group border rounded-lg border-gray-300 
                hover:border-blue-400 ease-in-out transition-all flex items-center 
                justify-center`}>
                <IconDefault 
                    type={type} 
                    css="text-xl text-gray-600 group-hover:text-blue-700" 
                />
            </button>
        </Link>
    )
}
