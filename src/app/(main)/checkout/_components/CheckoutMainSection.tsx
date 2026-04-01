"use client"
import TitleNormal from '../../_components/titles/TitleNormal'
import SpacerTertiary from '../../_components/spacers/SpacerTertiary'
import { useCheckoutStore } from '../../_store/useCheckoutStore'
import TextInput from '../../_components/forms/inputs/TextInput'
import TextArea from '../../_components/forms/textareas/TextArea'
import ButtonDefault from '../../_components/buttons/ButtonDefault'

export default function CheckoutMainSection() {
  const { 
    data, 
    errors, 
    setInputValue 
  } = useCheckoutStore()

  return (
    <div className='container__primary grid lg:grid-cols-3 grid-cols-1 gap-8'>
        <div className='py-6 px-4 lg:col-span-2 col-span-1 rounded-xl bg-white drop-shadow-lg'>
            <TitleNormal 
              name='Contact Information' 
              css='text-blue-900' />
            <SpacerTertiary />
            <TextInput 
              type='text'
              label='Name' 
              name='name'
              value={data.name}
              placeholder='Enter Name here.'
              onChange={setInputValue} 
              error={errors.name}
            />

            <TextInput 
              type='text'
              label='Phone Number' 
              name='phone'
              value={data.phone}
              placeholder='Enter Phone Number here.'
              onChange={setInputValue} 
              error={errors.phone}
            />

            <TextInput 
              type='text'
              label='Email' 
              name='email'
              value={data.email}
              placeholder='Enter Email here.'
              onChange={setInputValue} 
              error={errors.email}
            />

            <TextArea 
              label='Address' 
              name='address'
              value={data.address}
              placeholder='Enter Address here.'
              onChange={setInputValue} 
              error={errors.address}
            />
            <hr className='border-b border-gray-200 my-4' />
            <TextArea 
              label='Notes' 
              name='notes'
              value={data.notes}
              placeholder='Enter Notes here.'
              onChange={setInputValue} 
              error={errors.notes}
            />

            
        </div>
        <div className='col-span-1 bg-white drop-shadow-lg py-6 px-4 rounded-xl'>
            <TitleNormal 
              name='Order Information' 
              css='text-blue-900' 
            />
            <SpacerTertiary />
            <section className='mb-4'>
              <div className='font-bold text-sm w-full border-gray-300 bg-gray-200 flex items-center justify-start'>
                <div className='w-[60%] border-r border-white px-2 py-1'>
                  DETAILS
                </div>
                <div className='w-[40%] px-2 py-1'>
                  TOTALS
                </div>
              </div>
              {[...Array(5)].map((i, key) => (
                  <TableRow 
                    key={key} 
                    name='Product Name' 
                    quantity={5} 
                    price={3} 
                    total={15.00} 
                  />
              ))}
            </section>
            <section className='mb-6'>
              <ul className='list-disc pl-6 font-light'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, atque.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, atque.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, atque.</li>
              </ul>
            </section>
            <section className='mb-6'>
              <h6 className='font-semibold text-blue-900'>
                  Payment Method
              </h6>
              <label className='flex items-center justify-start gap-2'>
                <input type='radio' name='paymentMethod' />
                Cash on Delivery
              </label>
              <label className='flex items-center justify-start gap-2'>
                <input type='radio' name='paymentMethod' />
                Pay Now
              </label>
            </section>
            <section className='w-full'>
              <ButtonDefault name='Shop Now' css='py-4 px-4 w-full' />
            </section>
        </div>

    </div>
  )
}



interface pInterface{
  name?: string
  price?: string | number
  quantity?: string | number
  total?: string | number
}

function TableRow({
  name= 'Product Name',
  quantity = 6,
  price = 3.00,
  total = 18.00,
}: pInterface){
  return (
    <div className='text-sm w-full border border-gray-300 flex items-center justify-start'>
      <div className='w-[60%] font-light border-r border-gray-300 px-2 py-1'>
        <p>{name}</p>
        <p>${price} * {quantity}</p>
      </div>
      <div className='w-[40%] px-2 py-1 text-normal'>
        ${total}
      </div>
    </div>
  )
}
