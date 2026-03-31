"use client"

import { create } from "zustand"
import { LinkMainNavEntity, LinkMainNavInterface } from "../_data/entities/LinkMainNavEntity"


interface PropInterface{
    toggleMenu: boolean
    navList: LinkMainNavInterface[]
    current: LinkMainNavInterface
    setToggleMenu: (i: boolean) => void
    setNavList: (i: LinkMainNavInterface[]) => void
    setCurrent: (i: LinkMainNavInterface) => void
    setIsOpen: (i: LinkMainNavInterface, bool: boolean) => void
}


export const useMainNavStore = create<PropInterface>((set, get) => ({
    toggleMenu: false,
    navList: [],
    current: LinkMainNavEntity,
    setToggleMenu: (i) => {
        set({
            toggleMenu: i
        })
    },
    setNavList: (i) => {
        set({
            navList: i
        })
    },
    setCurrent: (i) => {
        set({
            current: i
        })
    },
    setIsOpen: (i, bool) => {
        const list = get().navList
        set({
            navList: list.map((a) => (a.id === i.id ? {...a, isOpen: bool} : {...a, isOpen: false}))
        })
    },
}))