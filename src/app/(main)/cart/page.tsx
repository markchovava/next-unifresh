import SpacerDefault from "@/_components/spacers/SpacerDefault"
import BreadCrumbs from "../_components/breadcrumbs/BreadCrumbs"
import CartMainSection from "./_components/CartMainSection"


const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Shop', href: '/shop'},
    {id: 3, name: 'Cart', href: `/cart`},
]


export default function page() {
  return (
    <>
    <main className='bg-gray-50'>
        <BreadCrumbs data={CrumbsData} />
        <SpacerDefault />

        <CartMainSection />

        <SpacerDefault />
    </main>
    </>
  )
}
