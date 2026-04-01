import SpacerDefault from "@/_components/spacers/SpacerDefault"
import BreadCrumbs from "../_components/breadcrumbs/BreadCrumbs"
import OrderTrackSection from "./_components/OrderTrackSection"



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Shop', href: '/shop'},
    {id: 3, name: 'Order Track', href: `/order-track`},
]

export default function page() {
  return (
    <main className='bg-gray-50'>
        <BreadCrumbs data={CrumbsData} />
        <SpacerDefault />
        <OrderTrackSection />
        <SpacerDefault />
    </main>
  )
}
