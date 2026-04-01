"use client"

import SearchInput from "../../_components/forms/inputs/SearchInput"
import TitleTertiary from "../../_components/titles/TitleTertiary"
import { useOrderTrackStore } from "../_store/useOrderTrackStore"


export default function OrderTrackSection() {
    const {search, isSearching, setSearch} = useOrderTrackStore()
  return (
    <div>
        <section className='mx-auto w-[60%]'>
            <TitleTertiary name='Search Order By Ref' css="text-blue-900 mb-2" />
            <SearchInput 
                css={`w-full h-12`} 
                value={search} 
                onChange={setSearch} 
                status={isSearching} 
            />
        </section>

        <section className="container__primary">
            <div></div>
        </section>
    </div>
  )
}
