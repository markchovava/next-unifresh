"use client"
import TitleNormal from '../../_components/titles/TitleNormal'
import SpacerTertiary from '../../_components/spacers/SpacerTertiary'

export default function CheckoutMainSection() {
  return (
    <div className='container__primary grid-cols-4 py-6 px-4 bg-gray-50 drop-shadow-lg'>
        <div className='col-span-3'>
            <TitleNormal name='Contact Information' />
            <SpacerTertiary />
            
        </div>
        <div className='col-span-1'></div>
    </div>
  )
}
