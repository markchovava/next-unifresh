"use client"
import LogoDefault from '../logos/LogoDefault'
import { LinkShopData } from '../../_data/sample/LinkShopData'
import AccountCartNav from '../navs/AccountCartNav'
import IconDefault from '@/_components/icons/IconDefault'
import { useMainNavStore } from '../../_store/useMainNavStore'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useEffect } from 'react'
import { LinkMainNavData } from '../../_data/sample/LinkMainNavData'
import { LinkMainNavInterface } from '../../_data/entities/LinkMainNavEntity'

export default function HeaderDefaultResponsive() {
    const { toggleMenu, setToggleMenu } = useMainNavStore()

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <>
            <header className='w-full lg:hidden block'>
                <section className='container__primary flex items-center justify-between pt-4'>
                    <LogoDefault />
                    <div className='flex items-center justify-end gap-2'>
                        {LinkShopData.map((i, key) => (
                            <AccountCartNav
                                key={key}
                                href={i.href}
                                type={i.type}
                                css='h-[2.8rem]' />
                        ))}
                        <ButtonMenu
                            onClick={handleToggleMenu}
                            status={toggleMenu}
                        />
                    </div>
                </section>
            </header>

            <MainNav />
        </>
    )
}


function MainNav() {
    const { 
      toggleMenu, 
      setToggleMenu, 
      navList, 
      setNavList, 
      setCurrent, 
      setIsOpen 
    } = useMainNavStore()

    useEffect(() => {
        if (LinkMainNavData) {
            setNavList(LinkMainNavData)
        }
    }, [setNavList])

    const handleItemClick = (i: LinkMainNavInterface) => {
        setIsOpen(i, !i.isOpen)
        setCurrent(i)
    }

    const handleCloseMenu = () => {
        setToggleMenu(false)
    }

    return (
        <AnimatePresence>
            {toggleMenu && (
                <section className="fixed inset-0 z-50 pointer-events-auto">
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        onClick={handleCloseMenu}
                        className="absolute z-10 inset-0 bg-black/50"
                    />

                    <motion.div
                        key="panel"
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 260, damping: 30, mass: 0.9 }}
                        className={`w-[80%] absolute right-4 top-8 bottom-8 z-20 bg-white 
                          rounded-xl shadow-lg flex flex-col overflow-hidden`}>

                        {/* Fixed header */}
                        <div className='flex-shrink-0 flex items-center justify-end px-3 pt-3 pb-3 border-b border-gray-300'>
                            <ButtonMenu
                                onClick={handleCloseMenu}
                                status={toggleMenu}
                            />
                        </div>

                        {/* Scrollable nav list */}
                        <ul className='w-full font-medium overflow-y-auto flex-1'>
                            {navList.map((i, key) => (
                                <NavItem
                                    key={key}
                                    isOpen={i.isOpen}
                                    onClick={() => handleItemClick(i)}
                                    onLinkClick={handleCloseMenu}
                                    href={i.href}
                                    items={i.items}
                                    name={i.name}
                                />
                            ))}
                        </ul>
                    </motion.div>
                </section>
            )}
        </AnimatePresence>
    )
}


interface niInterface {
    href: string
    name: string
    items: any[]
    isOpen: boolean
    onClick: () => void
    onLinkClick: () => void  
}

function NavItem({ 
    href, 
    name, 
    items, 
    isOpen, 
    onClick, 
    onLinkClick 
}: niInterface) {
    if (items.length > 0) {
        return (
            <li className="text-xl relative">
                <button
                    onClick={onClick}
                    className="hover:bg-gray-100 cursor-pointer w-full border-b border-gray-300 flex items-center justify-between py-3 px-8 transition-colors duration-200"
                >
                    {name}
                    <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                        <IconDefault type="down" />
                    </motion.span>
                </button>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.ul
                            key="dropdown"
                            initial={{ opacity: 0, y: -6, scaleY: 0.95 }}
                            animate={{ opacity: 1, y: 0, scaleY: 1 }}
                            exit={{ opacity: 0, y: -6, scaleY: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            style={{ originY: 0 }}
                            className="w-full bg-gray-50 font-normal shadow-md"
                        >
                            {items.map((i, key) => (
                                <motion.li
                                    key={key}
                                    initial={{ opacity: 0, x: -6 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: key * 0.05, duration: 0.2 }}
                                    className="border-b border-gray-300"
                                    onClick={onLinkClick}>
                                    <Link
                                        href={i.href}
                                        className="block pl-12 py-3 hover:bg-gray-200 transition-colors duration-150"
                                    >
                                        {i.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </li>
        )
    } else {
        return (
            <li 
              onClick={onLinkClick} 
              className="text-xl border-b border-gray-300">
                <Link
                    href={href}
                    className="block py-3 px-8 hover:bg-gray-100 transition-colors duration-200"
                >
                    {name}
                </Link>
            </li>
        )
    }
}


interface pInterface {
    onClick: () => void
    status: boolean
}

function ButtonMenu({ onClick, status }: pInterface) {
    return (
        <button
            onClick={onClick}
            className='ml-3 cursor-pointer w-8 flex items-center justify-center'>
            <AnimatePresence mode="wait" initial={false}>
                {status ?
                    <motion.div
                        key="close"
                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        transition={{ duration: 0.2 }}>
                        <IconDefault type={'close'} css="text-4xl" />
                    </motion.div>
                    :
                    <motion.div
                        key="menu"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}>
                        <IconDefault type="menu" css="text-2xl" />
                    </motion.div>
                }
            </AnimatePresence>
        </button>
    )
}