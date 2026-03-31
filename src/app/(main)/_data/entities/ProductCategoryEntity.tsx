export interface ProductCategoryInterface{
    id: string | number
    name: string
    slug: string
    href: string
    image: string
    priority: string | number
    userId: string | number
    createdAt: string
    updatedAt: string
    quantity?: number
}

export const ProductCategoryEntity: ProductCategoryInterface = {
    id: "",
    name: "",
    slug: "",
    href: "",
    image: "",
    priority: "",
    userId: "",
    createdAt: "",
    updatedAt: "",
    quantity: 0,
}