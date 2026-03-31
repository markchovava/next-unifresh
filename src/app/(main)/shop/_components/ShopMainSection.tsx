"use client"
import TitleSmall from '../../_components/titles/TitleSmall'
import SortShopForm from '../../_components/forms/SortShopForm'
import SearchForm from '../../_components/forms/SearchForm'
import { useShopStore } from '../../_store/useShopStore'
import { useEffect } from 'react'
import ProductCard from '../../_components/cards/ProductCard'
import { ProductData } from '../../_data/sample/ProductData'
import IconDefault from '@/_components/icons/IconDefault'
import ButtonPaginate from '../../_components/buttons/ButtonPaginate'



export default function ShopMainSection() {
  const { setProductList, productList } = useShopStore()

  useEffect(() => {
    setProductList(ProductData)
  }, [setProductList])

  return (
    <>
    <TitleSmall
        name='Search Product:' 
        css="text-blue-800 mb-1" />
    <SearchForm />
    <SortShopForm />

    <section className='w-full grid lg:grid-cols-4 grid-cols-2 pt-6 gap-6'>
      {productList.map((i, key) => (
        <ProductCard
          key={key}
          id={i.id}
          category={i.category}
          name={i.name}
          price={i.price}
          status={i.status}
        />
      ))}
    </section>
    <section className='flex items-center justify-end gap-3 pt-8'>
        <ButtonPaginate name='Prev' />
        <ButtonPaginate name='Next' />
    </section>
    </>
  )
}
