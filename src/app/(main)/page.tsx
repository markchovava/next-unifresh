import SpacerDefault from "@/_components/spacers/SpacerDefault";
import BannerMain from "./_components/banners/BannerMain";
import CarousePrimary from "./_components/carousels/CarouselPrimary";
import { ProductCategoryData } from "./_data/sample/ProductCategoryData";
import { ProductTypeData } from "./_data/sample/ProductTypeData";
import CardMain from "./_components/cards/CardMain";
import ButtonOnDefault from "./_components/buttons/ButtonOnDefault";
import TitleSecondary from "./_components/titles/TitleSecondary";
import TitleTertiary from "./_components/titles/TitleTertiary";
import { NoImageData } from "./_data/sample/NoImageData";
import DoubleSection from "./_components/sections/DoubleSection";
import IconDefault from "@/_components/icons/IconDefault";
import { AboutDeliveryData } from "./_data/sample/AboutData";
import SpacerPrimary from "./_components/spacers/SpacerPrimary";
import SliderSecondary from "./_components/sliders/SliderSecondary";
import StickerPrimary from "./_components/stickers/StickerPrimary";
import TitleDefault from "./_components/titles/TitleDefault";
import ButtonTertiary from "./_components/buttons/ButtonTertiary";
import ContactSection from "./_components/sections/ContactSection";
import CarouseProduct from "./_components/carousels/CarouselProduct";
import { ProductData } from "./_data/sample/ProductData";
import SpacerSecondary from "./_components/spacers/SpacerSecondary";




export default function Home() {
  return (
    <>
    

    <BannerMain />

    <div className="w-full lg:h-120 h-130">
      <SliderSecondary />
    </div>

    <section className="w-full bg-gray-50">
      <div className="mx-auto container__primary">
        <SpacerDefault />
        <TitleSecondary name='Latest Products' css='mb-3 text-blue-900' />
        <CarousePrimary data={ProductTypeData} />
        <SpacerDefault />
      </div>
    </section>

    <section>
      <SpacerDefault />
      <div className="container__primary">
        <TitleSecondary name='Latest Products' css='mb-3 text-blue-900' />
        <CarouseProduct data={ProductData} />
      </div>
      <SpacerDefault />
    </section>

    <SpacerDefault />
    <section className="w-full">
      <div className="container__primary mx-auto grid lg:grid-cols-3 grid-cols-1 gap-6">
        { ProductCategoryData.slice(0, 5).map((i, key) => (
          key == 0 ?
          <div key={key} className="lg:col-span-2 col-span-1 rounded-xl drop-shadow h-90 bg-emerald-200 overflow-hidden">
              <CardMain 
                label='the new'
                title={i.name} 
                href={i.href}
                image={i.image} />
          </div>
          :
          <div key={key} className="col-span-1 rounded-xl drop-shadow h-90 bg-blue-100"> 
              <CardMain 
                label='the new'
                title={i.name} 
                href={i.href}
                image={i.image} />
          </div>
        ))}
      </div>
    </section>
    <SpacerDefault />


    <section className="w-full">
      <div className="mx-auto container__primary lg:h-50 px-8 lg:py-4 py-10 rounded-xl text-white bg-blue-800 flex gap-6 lg:flex-row flex-col items-center justify-between">
        <div className="">
          <TitleTertiary
            name={<> Hurry Up!<br /> Sales Ends Soon</>} 
            css="text-green-200" />
        </div>
        <div className="">
          <TitleSecondary name='Test it out' css='' />
        </div>
        <div className="">
          <ButtonOnDefault name='Shop Now' />
        </div>
      </div>
    </section>

    <SpacerPrimary />
    <DoubleSection
        title='The topic'
        details={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, voluptate. 
            Dolorem minima, consectetur totam vel ullam consequatur! Aliquam delectus officiis 
            quos ullam quasi rerum eveniet saepe quisquam consequatur dolor. Ex. `}
        href='#'
        btnTitle="Shop Now"
        image={NoImageData}
        direction='left'
    />
   
    <SpacerPrimary />
    <section className="w-full">
      <div className="container__primary mx-auto grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-8">
            {AboutDeliveryData.map((i, key) => (
              <div key={key} className="w-full flex flex-col gap-2 items-center justify-center">
                <IconDefault 
                  type={i.type} 
                  css="text-5xl text-blue-800" />
                <p className="text-xl font-medium text-gray-800">
                  {i.name}
                </p>
              </div>
            ))}
      </div>
    </section>
    <SpacerPrimary />

    <DoubleSection
        title='The topic'
        details={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, voluptate. 
            Dolorem minima, consectetur totam vel ullam consequatur! Aliquam delectus officiis 
            quos ullam quasi rerum eveniet saepe quisquam consequatur dolor. Ex. `}
        href='#'
        btnTitle="Shop Now"
        image={NoImageData}
        direction='right'
    />
    <SpacerDefault />

    <section className="w-full h-100 bg-linear-to-br bg-green-700">
        <div className="container__primary mx-auto h-full text-white flex flex-col items-center justify-center">
            <StickerPrimary name="SUbtitle" css="mb-2" />
            <TitleDefault name="The title is working" css="mb-6" />
            <ButtonTertiary type='button' name="Shop Now" />
        </div>
    </section>

    <section className="w-full bg-olive-100">
      <SpacerDefault />
      <ContactSection />
       <SpacerDefault />
    </section>

    
    



    </>
  );
}

