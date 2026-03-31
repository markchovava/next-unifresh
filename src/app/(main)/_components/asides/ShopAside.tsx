import React from 'react'
import TitleSmall from '../titles/TitleSmall'
import { StockData } from '../../_data/sample/ShopData'
import AsideItem from '../items/AsideItem'
import { ProductCategoryData } from '../../_data/sample/ProductCategoryData'
import { ProductTypeData } from '../../_data/sample/ProductTypeData'

export default function ShopAside() {
  return (
    <>
    <TitleSmall
      name='Availability' 
      css="text-blue-800 mb-3" />
    <ul className=' text-gray-700 space-y-1'>
      {StockData.map((i, key) => (
        <AsideItem key={key} name={i.name} quantity={i.quantity} />
      ))}
    </ul>

    <hr className='border-b border-gray-300 my-6' />
     <TitleSmall
      name='Categories' 
      css="text-blue-800 mb-3" />
    <ul className=' text-gray-700 space-y-1'>
      {ProductCategoryData.map((i, key) => (
        <AsideItem 
          key={key} 
          name={i.name} 
          quantity={i.quantity} />
      ))}
    </ul>

    <hr className='border-b border-gray-300 mt-5 mb-4' />
    <TitleSmall
      name='Product Types' 
      css="text-blue-800 mb-3" />
    <ul className=' text-gray-700 space-y-1'>
      {ProductTypeData.map((i, key) => (
        <AsideItem 
          key={key} 
          name={i.name} 
          quantity={i.quantity} />
      ))}
    </ul>
    </>
  )
}

