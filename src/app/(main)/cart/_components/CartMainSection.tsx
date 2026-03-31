"use client"

import { ReactNode } from "react"
import ButtonProceed from "../../_components/buttons/ButtonProceed"

export default function CartMainSection() {
  return (
    <>
    <section className="container__primary mx-auto flex items-center justify-end py-12">
        <button className={`border cursor-pointer border-green-700 text-green-700 
            hover:bg-linear-to-br hover:from-green-700 hover:to-green-900 ease-in-out duration-200 transition-all
            hover:text-white px-6 py-2 rounded-lg`}>
            Continue Shopping
        </button>
    </section>

    {/* DESKTOP */}
    <section className="lg:block hidden container__primary mx-auto">
        <div className="w-full flex items-center justify-start bg-gray-200 rounded-t-lg font-medium text-lg">
            <div className="w-[50%] py-2 px-3 border-r border-gray-300">NAME</div>
            <div className="w-[25%] py-2 px-3 border-r border-gray-300">QUANTITY</div>
            <div className="w-[25%] py-2 px-3">TOTAL</div>
        </div>
        <div className="w-full flex items-center justify-start border border-gray-200 ">
            <div className="w-[50%] py-2 px-3 border-r border-gray-300">NAME</div>
            <div className="w-[25%] py-2 px-3 border-r border-gray-300 text-end">
                <input type="number" 
                placeholder="Enter Quantity here" min={0} className="w-full border border-gray-300 focus:border-gray-400 px-3 py-2 rounded-lg outline-none" />
            </div>
            <div className="w-[25%] py-2 px-3 text-end">TOTAL</div>
        </div>
        <div className="w-full flex items-center justify-start border border-gray-200 ">
            <div className="w-[50%] py-2 px-3 border-r border-gray-300">NAME</div>
            <div className="w-[25%] py-2 px-3 border-r border-gray-300 text-end">QUANTITY</div>
            <div className="w-[25%] py-2 px-3 text-end">TOTAL</div>
        </div>
        {/* TOTALS */}
        <div className="w-full flex items-center justify-start mb-8">
            <div className="w-[50%] py-2 px-3 "></div>
            <div className="w-[25%] py-2 px-3 rounded-bl-lg border-x border-b border-gray-300 font-bold text-end">
                4kg
            </div>
            <div className="w-[25%] py-2 px-3 border-b border-r rounded-br-lg bg-blue-700 text-white flex items-center justify-end">
                <span className="font-bold">$20.00</span>
            </div>
        </div>
        <div className="w-full flex items-center justify-start ">
            <div className="w-[50%] py-2 px-3 "></div>
            <div className="w-[50%] ">
                <ButtonProceed name='Proceed to Checkpout' />
            </div>
        </div>
    </section>

    <section className="lg:hidden block container__primary mx-auto space-y-4">
        <div className="w-full bg-gray-50 drop-shadow-2xl px-4 py-4 rounded-xl">
            <RecordResponse label='Product Name' value='The Product Name' />
            <RecordResponse label='Quantity' value={<input type="number" min={0} className="w-full border border-gray-300 px-3 py-2 rounded-lg outline-none" />} />
            <RecordResponse label='Price' value='$20.00' />
            <RecordResponse label='Total' value={<b>$20.00</b>} />
        </div>
        <div className="w-full bg-gray-50 drop-shadow-2xl px-4 py-4 rounded-xl">
            <RecordResponse label='Product Name' value='The Product Name' />
            <RecordResponse label='Quantity' value={<input type="number" min={0} className="w-full border border-gray-300 px-3 py-2 rounded-lg outline-none" />} />
            <RecordResponse label='Price' value='$20.00' />
            <RecordResponse label='Total' value={<b>$20.00</b>} />
        </div>
        <ButtonProceed name='Proceed to Checkpout' />
    </section>

    </>
  )
}


interface pInterface{
    label: string
    value: ReactNode
}
function RecordResponse({label, value}: pInterface){
    return(
        <div className="mb-3">
            <p className="text-sm">{label}:</p>
            <p className="text-lg">{value}</p>
        </div>
    )
}



