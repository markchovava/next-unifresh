export interface CheckoutInterface{
    name: string
    phone: string
    email: string
    address: string
    notes: string
    userid: string | number
    paymentMethod: string
    deliveryMethod: string
}


export const CheckoutEntity: CheckoutInterface = {
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
    userid: '',
    paymentMethod: '',
    deliveryMethod: '',
}