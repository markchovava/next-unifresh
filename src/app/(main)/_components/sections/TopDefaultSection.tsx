import LogoDefault from '../logos/LogoDefault'
import SearchMainForm from '../forms/SearchMainForm'
import { LinkShopData } from '../../_data/sample/LinkShopData'
import AccountCartNav from '../navs/AccountCartNav'


export default function TopDefaultSection() {
  return (
    <>
    <header className='lg:block hidden'>
        <section className="container__primary items-center justify-start flex gap-6 pt-10 pb-3">
        <LogoDefault />
        <SearchMainForm css="h-[2.8rem]" />
        
        <div className="flex items-center justify-end gap-3">
            {LinkShopData.map((i, key) => (
                <AccountCartNav 
                    key={key} 
                    href={i.href} 
                    type={i.type} 
                    css='h-[2.8rem]' />
            ))} 
        </div>
        </section>
    </header>
    </>
  )
}



