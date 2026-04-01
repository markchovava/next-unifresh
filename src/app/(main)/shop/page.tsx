import SpacerDefault from '../_components/spacers/SpacerDefault'
import CarousePrimary from '../_components/carousels/CarouselPrimary'
import { ProductTypeData } from '../_data/sample/ProductTypeData'
import ShopAside from '../_components/asides/ShopAside'
import ShopMainSection from './_components/ShopMainSection'
import PageTitle from '../_components/titles/PageTitle'




const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Shop', href: '/contashop'},
]


export default function page() {
  return (
    <>
    <main className='w-full bg-gray-50'>
        
        <PageTitle
            crumbs={CrumbsData} 
            title='Our Shop' />
    
        <div className="mx-auto container__primary">
        <CarousePrimary data={ProductTypeData} />
        <SpacerDefault />
        </div>
  

        <section className='container__primary grid lg:grid-cols-4 grid-cols-1 gap-6'>
            <div className='lg:col-span-1 bg-gray-50 drop-shadow-lg px-4 pt-5 pb-10'>
              <ShopAside />
            </div>
            <div className='lg:col-span-3 pt-5'>
              <ShopMainSection />
            </div>

        </section>

        <SpacerDefault />
    </main>

    </>
  )
}
