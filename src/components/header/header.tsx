"use client"

import Image from "next/image";
import logo from "@/assets/img/logo/vegemart.png"
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header(){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [auth, setAuth] = useState<boolean>(false)

    const tabNavigation =() => {
        setIsOpen(isOpen=> !isOpen)
    }

    return (
        <header className="sticky top-0 block z-10">
            <div className="container mx-auto px-4 md:px-36 flex flex-col md:flex-row bg-white ">
                <div className="flex flex-row">
                    <Link href={"/"} >
                        <Image 
                            src={logo}
                            height={200}
                            width={400}
                            className="w-2/3 md:w-full"
                            alt="Vegemart Logo"
                        />
                   </Link>
                <div className="ms-auto md:hidden text-green p-1 my-auto" onClick={tabNavigation}>
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </div>
                </div>
                <div className={ isOpen ? "block" :"hidden md:ms-auto md:block"}>
                    <ul className="flex flex-col md:flex-row text-green font-regular text-md md:text-lg">
                        <li className="px-2 py-2 md:px-2 md:py-3 hover:font-semibold hover:text-green-black"><Link href={'/categories/paling-laris'}>paling laris</Link></li>
                        <li className="px-2 py-2 md:px-2 md:py-3 hover:font-semibold hover:text-green-black"><Link href={'/categories/sayur'}>sayur</Link></li>
                        <li className="px-2 py-2 md:px-2 md:py-3 hover:font-semibold hover:text-green-black"><Link href={'/categories/bumbu'}>bumbu</Link></li>
                        <li className="px-2 py-2 md:px-2 md:py-3 hover:font-semibold hover:text-green-black"><Link href={'/categories/daging'}>daging</Link></li>
                        <div className="hidden">
                        <li className="px-2 py-2 md:px-2 md:py-3 hover:font-semibold hover:text-green-black"><Link href={'/cart'}>Cart</Link></li>
                        <li className="px-2 py-2 md:px-2 md:py-3 hover:font-semibold hover:text-green-black"><Link href={'/profile'}>Profil</Link></li>
                        </div>
                        <li className="px-2 py-2 md:px-2 md:py-3 hover:font-semibold hover:text-green-black"><Link href={'/auth/login'}>login</Link></li>
                        <li className="px-2 py-2 md:px-2 md:py-3 hover:font-semibold hover:text-green-black"><Link href={'/auth/sign-up'}>sign up</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}