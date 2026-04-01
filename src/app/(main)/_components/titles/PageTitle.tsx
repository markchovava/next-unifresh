"use client"

import BreadCrumbs from "../breadcrumbs/BreadCrumbs"
import TitleSecondary from "./TitleSecondary"


interface PropInterface {
    crumbs: any[]
    title: string
}

export default function PageTitle({
    title, 
    crumbs
}: PropInterface) {

    return(
        <>
            <div className='bg-gray-50'>
                <BreadCrumbs data={crumbs} />
                <div className="h-6" />
                <div className="container__primary border-b border-gray-300">
                    <TitleSecondary name={title} css="mb-2 text-blue-900" />
                </div>
                <div className="h-6" />
            </div>
        </>
    )
}

  
