import React from 'react'
import StickerPrimary from '../stickers/StickerPrimary'
import TitleDefault from '../titles/TitleDefault'
import ButtonDefault from '../buttons/ButtonDefault'


export default function BannerMain() {
  return (
    <section className="w-full lg:h-136 h-100 bg-linear-to-br from-blue-50 to-blue-200 overflow-hidden flex items-center justify-between">
      <div className="ml-[4%] lg:w-[50%] w-[75%] flex flex-col items-start justify-center">
        <StickerPrimary name="Test it out" css="mb-2" />
        <TitleDefault
          name="Text is testing Text is testing Text is testing" 
          css="mb-6" />
        <ButtonDefault name='Shop Now' />
      </div>
      <div></div>
    </section>
  )
}
