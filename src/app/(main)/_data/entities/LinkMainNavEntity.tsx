export interface LinkMainNavInterface{
    id: string | number
    name: string
    href: string
    isOpen: boolean
    items: any[]
    icon?: string
}


export const LinkMainNavEntity: LinkMainNavInterface = {
    id: "",
    name: "",
    href: "",
    isOpen: false,
    items: [],
    icon: "",
}