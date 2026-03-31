export interface ContactInterface{
    name?: string
    email: string
    message: string
    phone?: string
}


export const ContactEntity: ContactInterface = {
    name: '',
    email: '',
    message: '',
    phone: '',
}