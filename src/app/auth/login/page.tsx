"use client"

import Header from "@/components/header/header"
import Link from "next/link"
import { useState } from "react"

interface User {
    email:string 
    password:string
}

export default function Login() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const submitForm = () => {
        
    }

    return (
        <div>
            <Header />

            <main>
                <div className="container mx-auto px-4 md:px-36">
                    <h1 className="text-green-black text-3xl text-center font-bold">Login</h1>
                    <form className="p-6 md:p-10 my-5 mx-auto md:w-2/5 border border-1 rounded-md">
                        <div className="my-2">
                            <label className="text-green-black">email</label><br/>
                            <input className="w-full p-2 rounded-md border border-2 focus:border-green-black" name="email"/>
                        </div>
                        <div className="my-2">
                            <label className="text-green-black">password</label><br/>
                            <input className="w-full p-2 rounded-md border border-2 focus:border-green-black" name="password"/>
                        </div>
                        <p className="text-sm text-gray-800 text-right"><Link href={'/forgot-password'}>Lupa Password</Link></p>
                        <button className="bg-green text-white rounded-md w-full p-2 font-bold my-2">Login</button>
                        <p className="text-sm text-center">Belum Mendaftar, <b className="text-green-black font-extrabold"><Link href="/auth/sign-up">Daftar</Link></b></p>
                    </form>
                </div>
            </main>
            
        </div>
    )
}

