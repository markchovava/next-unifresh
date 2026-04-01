import ContactPage from './_components/ContactPage'
import PageTitle from '../_components/titles/PageTitle'



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Contact Us', href: '/contact'},
]

export default function page() {
  return (
    <>
    <div className='bg-gray-50'>
      <PageTitle 
          crumbs={CrumbsData} 
          title='Contact Us' />
      
      <ContactPage />
    </div>
    
    </>
  )
}
