import { LinkMainNavInterface } from "../entities/LinkMainNavEntity";
import { ProductCategoryData } from "./ProductCategoryData";
import { ProductTypeData } from "./ProductTypeData";


export const LinkFooterNavData: LinkMainNavInterface[] = [
    {id: 1, name: 'Home', href: '/', isOpen: false, items: []},
    {id: 2, name: 'Our Shop', href: '/shop', isOpen: false, items: []},
    {id: 3, name: 'About Us', href: '', isOpen: false, items: []},
    {id: 4, name: 'Products', href: '', isOpen: false, items: ProductTypeData},
    {id: 5, name: 'Contact Us', href: '/contact', isOpen: false, items: []},
]

export const LinkMainNavData: LinkMainNavInterface[] = [
    {id: 1, name: 'Home', href: '/', isOpen: false, items: []},
    {id: 2, name: 'Our Shop', href: '/shop', isOpen: false, items: []},
    {id: 3, name: 'About Us', href: '', isOpen: false, items: []},
    {id: 4, name: 'Categories', href: '', isOpen: false, items: ProductCategoryData},
    {id: 5, name: 'Products', href: '', isOpen: false, items: ProductTypeData},
    {id: 6, name: 'Contact Us', href: '/contact', isOpen: false, items: []},
]

export const LinkMainTwoCategoryData: LinkMainNavInterface[] = [
    {
        id: 1, 
        name: ProductCategoryData[0].name, 
        href: ProductCategoryData[0].href, 
        isOpen: false, 
        items: [], 
        icon: 'fast'
    },
    {
        id: 2, 
        name: ProductCategoryData[5].name, 
        href: ProductCategoryData[5].href, 
        isOpen: false, 
        items: [], 
        icon: 'tag'
    },
]

export const LinkFooterSecondNavData: LinkMainNavInterface[] = [
    {id: 1, name: 'Sitemap', href: '#', isOpen: false, items: []},
    {id: 2, name: 'Terms Of Use', href: '#', isOpen: false, items: []},
    {id: 3, name: 'Cookie Policy', href: '#', isOpen: false, items: []},
]

