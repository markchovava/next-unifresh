import { ProductImageInterface } from "./ProductImageEntity"

export interface ProductInterface {
    id: number,
    name: string;
    type: string;
    category: string;
    price: number;
    quantity: number;
    status: 'In Stock' | 'Out Of Stock';
    size: string;
    description: string;
    grade: string;
    unit: string;
    packageDate: string;
    origin: string;
    images: ProductImageInterface[]
}


export const ProductEntity: ProductInterface = {
    id: 0,
    name: '',
    type: '',      
    category: '',
    price: 0,
    quantity: 0,
    size: '',
    description: '',
    grade: '',
    status: 'In Stock',
    unit: '',
    packageDate: '',
    origin: '',
    images: []
}