import IconDefault from '@/_components/icons/IconDefault'
import Link from 'next/link'
import { LinkSocialData } from '../../_data/sample/LinkSocialData'




export default function TopSection() {
  return (
    <>
    <header className="lg:block hidden w-full relative bg-blue-800 text-gray-50 text-sm py-3">
      <section className="container__primary flex lg:flex-row flex-col lg:gap-0 gap-3 items-center justify-between">
        <p className="flex items-center justify-start gap-1 ">
          <IconDefault type='phone' />
          <span>Call us on: +263 782210021</span>
        </p>
       
        <p>Get Free Delivery on Orders Over $100 - Shop Now!</p>
        <div className="flex items-center justify-end gap-2">
          {LinkSocialData.map((i, key) => (
            <Link
              className="group"
              key={key} 
              href={i.href}>
                <IconDefault 
                  type={i.name} 
                  css="text-md group-hover:scale-110 ease-initial duration-200 transition-all" />
            </Link>
          )) }
        </div>
      </section>
    </header>

    {/* MOBILE */}
    <header className='block lg:hidden bg-blue-800 text-gray-50 text-sm py-3'>
     
      <section className="container__primary flex items-center justify-between pb-3">
        <p className="flex items-center justify-start gap-1 ">
          <IconDefault type='phone' />
          <span>Call us on: +263 782210021</span>
        </p>
        <div className="flex items-center justify-end gap-2">
          {LinkSocialData.map((i, key) => (
            <Link
              className="group"
              key={key} 
              href={i.href}>
                <IconDefault 
                  type={i.name} 
                  css="text-md group-hover:scale-110 ease-initial duration-200 transition-all" />
            </Link>
          )) }
        </div>
      </section>
       <section className='container__primary text-center mb-2'>
          <p className=''>Get Free Delivery on Orders Over $100 - Shop Now!</p>
      </section>
    </header>
    </>
  )

}
