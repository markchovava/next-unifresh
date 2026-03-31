import SpacerDefault from '../spacers/SpacerDefault'
import LogoDefault from '../logos/LogoDefault'
import TitleSmall from '../titles/TitleSmall'
import IconDefault from '@/_components/icons/IconDefault'
import Link from 'next/link'
import { AppInfoData } from '../../_data/sample/AppInfoData'
import { ProductCategoryData } from '../../_data/sample/ProductCategoryData'
import { LinkFooterSecondNavData, LinkMainNavData } from '../../_data/sample/LinkMainNavData'


export default function Footer() {
  return (
    <>
    <section className="w-full">
      <SpacerDefault />
      <section className="mb-8 container__primary mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="">
          <LogoDefault />
        </div>
        {/*  */}
        <div>
            <TitleSmall 
                name='Categories' 
                css="text-blue-900 mb-3" />
            <ul className='text-gray-600'>
                {ProductCategoryData.map((i, key) => (
                    <Link key={key} 
                        href={i.href} 
                        className='flex'>
                        <li className={`border-b-2 border-transparent border-dotted 
                            pb-0.5 transition-all duration-200 ease-in-out 
                            hover:border-blue-700 hover:text-blue-700`}>
                            {i.name}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>

        {/*  */}
        <div>
            <TitleSmall 
                name='Our Links' 
                css="text-blue-900 mb-3" />
            <ul className='text-gray-600'>
                {LinkMainNavData.map((i, key) => (
                    <Link key={key} 
                        href={i.href} 
                        className='flex'>
                        <li className={`border-b-2 border-transparent border-dotted 
                            pb-0.5 transition-all duration-200 ease-in-out 
                            hover:border-blue-700 hover:text-blue-700`}>
                            {i.name}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>

        {/*  */}
        <div className="w-full">
            <TitleSmall 
                name='Follow us' 
                css="text-blue-800 mb-3" />
            <div className='flex items-center justify-start gap-3'>
                {AppInfoData.links.map((i, key) => (
                    <Link 
                        key={key} 
                        href={i.href}>
                        <IconDefault 
                            type={i.type} 
                            css={`${i.css} text-xl hover:scale-110 
                                transtion-all ease-in-out duration-200`} />
                    </Link>
                ))}
            </div>
        </div>
      </section>
    </section>
    
    <footer className='w-full '>
      <section className={`border-t border-gray-300 pt-4 
        container__primary mx-auto flex lg:flex-row flex-col gap-4
        items-center justify-between`}>
        <ul className='flex items-center justify-start gap-3 text-gray-700 text-sm'>
            {LinkFooterSecondNavData.map((i, key) => (
                <Link key={key} href={i.href}>
                    <li className='ease-in-out transition-all duration-200 border-b border-transparent pb-[0.5px] hover:border-b hover:border-b-gray-700'>
                        {i.name}
                    </li>
                </Link>
            ))}
        </ul>

        <p className="text-gray-500 text-sm text-center md:text-right">
            This website is developed and maintained by FL Designers © {new Date().getFullYear()}
        </p>
      </section>
      <SpacerDefault />
    </footer>
    </>
  )
}
