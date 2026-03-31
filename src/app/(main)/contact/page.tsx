import BreadCrumbs from '../_components/breadcrumbs/BreadCrumbs'
import BannerSecondary from '../_components/banners/BannerSecondary'
import ContactPage from './_components/ContactPage'



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Contact Us', href: '/contact'},
]

export default function page() {
  return (
    <>
    <BannerSecondary name='Contact Us' />
    
    <div className='bg-gray-50'>
        <BreadCrumbs data={CrumbsData} />
        <ContactPage />
    </div>

    </>
  )
}
