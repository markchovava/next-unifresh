import React from 'react'
import BreadCrumbs from '../_components/breadcrumbs/BreadCrumbs'
import SpacerDefault from '@/_components/spacers/SpacerDefault'
import CheckoutMainSection from './_components/CheckoutMainSection'



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Shop', href: '/shop'},
    {id: 2, name: 'Cart', href: '/cart'},
    {id: 3, name: 'Checkout', href: `/checkout`},
]

export default function page() {
  return (
    <>
    <main className='bg-gray-50'>
      <BreadCrumbs data={CrumbsData} />
       <SpacerDefault />
       <CheckoutMainSection />
       <SpacerDefault />
    </main>
    </>
  )
}
