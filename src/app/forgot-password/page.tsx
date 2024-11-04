"use client"

import Header from "@/components/header/header";
import { useState } from "react";

export default function ForgotPassword() {
    const [email ,setEmail] = useState<String>("") 

    async function forgotPassword() {
        
    }
    
    return (
        <div>
            <Header />

            <main>
                <div className="container mx-auto md:px-36">
                    <h1 className="text-green-black text-3xl text-center font-bold">Lupa Password</h1>
                    <form className="p-6 md:p-10 my-5 mx-auto md:w-2/5 border border-1 rounded-md">
                        <div className="my-2">
                            <label className="text-green-black">email</label><br/>
                            <input className="w-full p-2 rounded-md border border-2 focus:border-green-black" name="email"/>
                        </div>
                        <button className="bg-green text-white rounded-md w-full p-2 font-bold my-2">Lupa Password</button>
                    </form>
                </div>
            </main>

        </div>
    )
}