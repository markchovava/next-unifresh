"use client"
import { motion, type Variants } from "motion/react"
import TitleDefault from '../titles/TitleDefault'
import ButtonDefault from '../buttons/ButtonDefault'
import StickerPrimary from "../stickers/StickerPrimary"

const fadeUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  },
})

export default function BannerMain() {
  return (
    <section className="w-full lg:h-136 h-100 bg-linear-to-br from-blue-50 to-blue-200 overflow-hidden flex items-center justify-between">
      <div className="ml-[4%] lg:w-[50%] w-[75%] flex flex-col items-start justify-center">

        <motion.div variants={fadeUp(0)} initial="hidden" animate="visible" className="mb-3">
          <StickerPrimary name="Test it out" css='text-blue-900' />
        </motion.div>

        <motion.div variants={fadeUp(0.15)} initial="hidden" animate="visible" className="mb-4">
          <TitleDefault name="Text is testing Text is testing Text is testing" />
        </motion.div>

        <motion.div variants={fadeUp(0.3)} initial="hidden" animate="visible">
          <ButtonDefault name="Shop Now" />
        </motion.div>

      </div>
      <div></div>
    </section>
  )
}