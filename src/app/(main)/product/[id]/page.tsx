import BannerSecondary from '../../_components/banners/BannerSecondary'
import BreadCrumbs from '../../_components/breadcrumbs/BreadCrumbs';
import SpacerDefault from '../../_components/spacers/SpacerDefault';
import ProductMainSection from './_components/ProductMainSection';


interface PropInterface {
    params: Promise<{ 
      id: string
    }>
}

export default async function page({ params }: PropInterface) {
      const { id } = await params;

    const CrumbsData = [
        {id: 1, name: 'Home', href: '/'},
        {id: 2, name: 'Shop', href: '/shop'},
        {id: 2, name: 'Product', href: `/product/${id}`},
    ]

    return (
    <>
    
    <main className='bg-gray-50'>
        <BreadCrumbs data={CrumbsData} />
        <SpacerDefault />

        <ProductMainSection id={id} />

        <SpacerDefault />
    
           
    </main>
    </>
  )
}
