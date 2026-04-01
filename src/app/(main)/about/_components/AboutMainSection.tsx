"use client"


import DoubleSection from "../../_components/sections/DoubleSection"
import { NoImageData } from "../../_data/sample/NoImageData"
import { AboutDeliveryData } from "../../_data/sample/AboutData"
import IconDefault from "@/_components/icons/IconDefault"
import SpacerDefault from "../../_components/spacers/SpacerDefault"
import Spacer from "@/_components/spacers/Spacer"


export default function AboutMainSection() {
  return (
    <div>
        <DoubleSection
            title='The topic'
            details={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, voluptate. 
                Dolorem minima, consectetur totam vel ullam consequatur! Aliquam delectus officiis 
                quos ullam quasi rerum eveniet saepe quisquam consequatur dolor. Ex. `}
            btnTitle="Shop Now"
            image={NoImageData}
            direction='left'
        />
        
        <Spacer />
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

        <Spacer />      
        <DoubleSection
            title='The topic'
            details={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, voluptate. 
                Dolorem minima, consectetur totam vel ullam consequatur! Aliquam delectus officiis 
                quos ullam quasi rerum eveniet saepe quisquam consequatur dolor. Ex. `}
            btnTitle="Shop Now"
            image={NoImageData}
            direction='right'
        />
        <SpacerDefault />
    </div>
  )
}
