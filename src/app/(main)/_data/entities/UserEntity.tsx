export interface UserInterface{
    id: string | number
    name: string
    password: string
    phone: string
    email: string
    address: string
    createdAt: string
    updatedAt: string
}


export const UserEntity: UserInterface = {
    id: "",
    name: "",
    password: "",
    phone: "",
    email: "",
    address: "",
    createdAt: "",
    updatedAt: "",
}