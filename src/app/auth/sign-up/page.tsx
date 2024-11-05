"use client"

import Header from "@/components/header/header";
import Link from "next/link";
import { useState } from "react";


export default function SignUp() {
    const [name, setName] = useState<String>("")
    const [email, setEmail] = useState<String>("")
    const [password, setPassword] = useState<String>("") 
    const [confirmPassword, setConfirmPassword] = useState<String>("")

    // async function submitForm() {
    //     event.preventDefault();
    // }
    
    return (
        <div>
            <Header />

            <main className="bg-[url('@/assets/img/auth/signup.jpg')] bg-cover bg-no-repeat">
                <div className="container mx-auto px-4 py-20 md:px-36"> 
                        <form className="p-6 md:p-10 ml-auto md:w-2/5 border border-1 rounded-md bg-white">
                            <h1 className="text-green-black text-3xl text-center font-bold">Daftar</h1>
                            <div className="my-2">
                                <label className="text-green-black">name</label><br/>
                                <input className="w-full p-2 rounded-md border border-2 focus:border-green-black" name="name"/>
                            </div>
                            <div className="my-2">
                                <label className="text-green-black">email</label><br/>
                                <input className="w-full p-2 rounded-md border border-2 focus:border-green-black" name="email"/>
                            </div>
                            <div className="my-2">
                                <label className="text-green-black">password</label><br/>
                                <input className="w-full p-2 rounded-md border border-2 focus:border-green-black" name="password"/>
                            </div>
                            <div className="my-2">
                                <label className="text-green-black">confirm password</label><br/>
                                <input className="w-full p-2 rounded-md border border-2 focus:border-green-black" name="confirm-password"/>
                            </div>
                            <button className="bg-green text-white rounded-md w-full p-2 font-bold my-2">Daftar</button>
                            <p className="text-sm text-center">Sudah punya akun, <b className="text-green-black font-extrabold"><Link href="/auth/login">Masuk</Link></b></p>
                        </form>
                </div>
            </main>

        </div>
    )
}