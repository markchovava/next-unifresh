"use client"


import TitleSecondary from '../titles/TitleSecondary'
import IconDefault from '@/_components/icons/IconDefault'
import { AppInfoData } from '../../_data/sample/AppInfoData'
import ContactForm from '../forms/ContactForm'



export default function ContactSection() {

  return (
    <div className="container__primary mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-12">
        <div className="">
            <TitleSecondary 
                name='Contact Us' 
                css="mb-6" 
            />
            <ContactForm />
        </div>
        <div className="">
            <TitleSecondary 
                name='Where you can find us?' 
                css="mb-6" 
            />
            <ul className='ml-2'>
                <li className='mb-3 flex items-center justify-start gap-2'>
                    <IconDefault type='phone' css='text-md text-blue-700' />
                    {AppInfoData.phone}
                </li>
                <li className='mb-3 flex items-center justify-start gap-2'>
                    <IconDefault type='address' css='text-md text-blue-700' />
                    {AppInfoData.address}
                </li>
                <li className='mb-3 flex items-center justify-start gap-2'>
                    <IconDefault type='email' css='text-md text-blue-700' />
                    {AppInfoData.email}
                </li>
            </ul>
            <div className='w-full overflow-hidden rounded-xl lg:h-100 h-80 drop-shadow bg-gray-200 flex items-center justify-center'>
                Google Maps
            </div>
        </div>
    </div>
  )
}
