"use client"
import Link from 'next/link'
import { useMainNavStore } from '../../_store/useMainNavStore'
import { LinkMainNavInterface } from '../../_data/entities/LinkMainNavEntity'
import { useEffect } from 'react'
import { LinkMainNavData, LinkMainTwoCategoryData } from '../../_data/sample/LinkMainNavData'
import IconDefault from '@/_components/icons/IconDefault'
import { AnimatePresence, motion } from 'motion/react'
import TopNavItem from '../navs/TopNavItem'




export default function TopNavSection() {
    const { 
        navList, 
        setNavList, 
        setCurrent,
        setIsOpen,
    } = useMainNavStore()

    useEffect(() => {
        if(LinkMainNavData) {
            setNavList(LinkMainNavData)
        }
    }, [setNavList])

    const handleClick = (i: LinkMainNavInterface) => {
        setIsOpen(i, !i.isOpen)
        setCurrent(i)
    }


  return (
    <section className='lg:block hidden w-full border-b border-gray-400'>
        <div className='container__primary flex items-center justify-between'>
            <ul className='flex items-center justify-start gap-2 font-medium text-gray-800'>
                {navList.map((i, key) => (
                    <TopNavItem key={key} data={i} onClick={() => handleClick(i)} />
                ))}   
            </ul>

            <ul className='flex items-center justify-end text-gray-400 font-medium'>
                {LinkMainTwoCategoryData.map((i, key) => (
                    <Link href={i.href} key={key}>
                        <li className='flex items-center justify-center gap-1 border-r border-gray-300 px-3'>
                            {i.icon &&
                                <IconDefault type={i.icon} css={`${ (key+1) % 2 == 0 ? 'text-blue-600' : 'text-green-600' } text-lg `} />
                            }
                            <span className='hover:text-gray-700 ease-in-out transition-all duration-200'>
                                {i.name}
                            </span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    </section>
  )
}




