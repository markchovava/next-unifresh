"use client"

import { AnimatePresence, motion } from "motion/react"
import { LinkMainNavInterface } from "../../_data/entities/LinkMainNavEntity"
import { useMainNavStore } from "../../_store/useMainNavStore"
import IconDefault from "@/_components/icons/IconDefault"
import Link from "next/link"


interface TopNavItemInterface{
    data: LinkMainNavInterface
    onClick: () => void
}


export default function TopNavItem({ data, onClick }: TopNavItemInterface){
    const {id, name, href, isOpen, items} = data
    const { current } = useMainNavStore()
    const css = `${current.id === id ? 'text-blue-700' : ''} px-3 py-2 cursor-pointer flex items-center justify-center gap-1 ease-in-out transition-all duration-200 hover:text-blue-700`

    if(items.length > 0){
        return(
            <li className='relative'>
                <button onClick={onClick} className={css}>
                    {name}
                    <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        style={{ display: "flex" }}
                    >
                        <IconDefault type='down' css='' />
                    </motion.span>
                </button>

                <AnimatePresence>
                    {isOpen &&
                        <motion.ul
                            initial={{ opacity: 0, y: -6, scaleY: 0.95 }}
                            animate={{ opacity: 1, y: 0, scaleY: 1 }}
                            exit={{ opacity: 0, y: -6, scaleY: 0.95 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            style={{ transformOrigin: "top" }}
                            className='absolute text-sm top-[110%] left-0 border-t border-gray-300 w-[160%] z-20 pt-1 bg-white rounded-b-lg drop-shadow-lg'
                        >
                            {items.map((i, key) => (
                                <Link key={key} href={i.href}>
                                    <li className='px-3 pb-1 font-normal hover:underline hover:bg-gray-50 text-blue-800'>
                                        {i.name}
                                    </li>
                                </Link>
                            ))}
                        </motion.ul>
                    }
                </AnimatePresence>
            </li>
        )
    }
    else{
        return(
            <Link href={href}>
                <li className={css} onClick={onClick}>
                    {name}
                </li>
            </Link>
        )
    }
}