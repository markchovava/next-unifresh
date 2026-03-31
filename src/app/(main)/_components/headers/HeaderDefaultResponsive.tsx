"use client"
import LogoDefault from '../logos/LogoDefault'
import { LinkShopData } from '../../_data/sample/LinkShopData'
import AccountCartNav from '../navs/AccountCartNav'
import IconDefault from '@/_components/icons/IconDefault'
import { useMainNavStore } from '../../_store/useMainNavStore'
import { AnimatePresence, motion } from 'motion/react'



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
          <button 
            onClick={handleToggleMenu} 
            className='ml-3 cursor-pointer w-8 flex items-center justify-center'>
            <AnimatePresence mode="wait" initial={false}>
                { toggleMenu ?
                <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.2 }} >
                    <IconDefault type={'close'} css="text-4xl" />
                </motion.div>
                :
                (<motion.div
                    key="menu"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}>
                    <IconDefault type="menu" css="text-2xl" />
                </motion.div>
                )}
            </AnimatePresence>
          </button>
        </div>
      </section>
    </header>
    </>
  )
}
