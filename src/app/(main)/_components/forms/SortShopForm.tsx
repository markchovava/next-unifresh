"use client"
import { ShopSortData } from '../../_data/sample/ShopData'
import { useShopStore } from '../../_store/useShopStore'


export default function SortShopForm() {
    const { 
      sortValue, 
      setSortValue
    } = useShopStore()
  return (
    <div className='mt-4 w-full rounded-lg px-3 py-2 bg-gray-200 flex items-center justify-between'>
        <p className='text-gray-800'>Showing 1-20 of 50 results.</p>
        <select
            value={sortValue}
            onChange={setSortValue}
            className='border py-2 px-1 rounded-lg border-gray-400 outline-none focus:border-gray-500 '>
            {ShopSortData.map((i, key) => (
            <option key={key} value={i.value}>{i.name}</option>
            ))}
        </select>
    </div>
  )
}
