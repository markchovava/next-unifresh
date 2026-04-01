'use client'
import IconDefault from '@/_components/icons/IconDefault'
import { useShopStore } from '../../_store/useShopStore'
import SearchInput from './inputs/SearchInput'



interface PropInterface{
    css?: string
}

export default function SearchMainForm({ css }: PropInterface) {
    const { 
        search, 
        setInputValue, 
        isSearching, 
        setIsSearching
    } = useShopStore()

  return (
    <>
        <SearchInput 
            css={css} 
            value={search} 
            onChange={setInputValue} 
            status={isSearching} 
        />
    </>
  )
}
