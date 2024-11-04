"use client"

import Image from "next/image";
import product from "@/assets/img/product/buncis.jpg"
import Header from "@/components/header/header";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [specialProduct, setSpecialProduct] = useState<any[]>()
  const [promo, setPromo] = useState<any[]>()
  const [extramami, setExtraMami] = useState<any[]>()  
  const [sayur, setSayur] = useState<any[]>()  

  async function Search(keyword:string){
       if(!keyword) return 
  }

  return (
    <div>
      <Header />

      <main className="py-5">
         <div className="container mx-auto px-4 md:px-36">
              <form className="flex gap-2">
                  <div className="flex border border-1 rounded-md w-full">
                    <span className="material-symbols-outlined text-green-black m-auto px-3">
                        search
                    </span>
                    <input className="p-1 md:p-2 w-full focus:outline-none"/>
                  </div>
                  <button className="bg-green text-white md:text-md px-4 md:px-8 rounded-md">Search</button>
              </form>
         </div>

         <div className="container mx-auto px-4 md:px-36 py-8">
             <div className="relative pb-3">
                <h1 className="text-2xl md:text-4xl font-bold text-green-black">Spesial Product</h1>
                <button className="bg-green text-white px-4 rounded-md absolute right-0">lainnya</button>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-5 gap-2 my-5">
                 <div className="border border-1 rounded-md">
                     <Image 
                        src={product}
                        alt="Image picture"
                        width={500}
                        height={500}
                        className="p-2"
                     />
                     <div className="p-3">
                        <p>Buncis</p>
                        <h4 className="text-xl">Rp16.000</h4>
                     </div>
                 </div>
                 <div className="border border-1 rounded-md">
                     <Image 
                        src={product}
                        alt="Image picture"
                        width={500}
                        height={500}
                        className="p-2"
                     />
                     <div className="p-3">
                        <p>Buncis</p>
                        <h4 className="text-xl">Rp16.000</h4>
                     </div>
                 </div>
                 <div className="border border-1 rounded-md">
                     <Image 
                        src={product}
                        alt="Image picture"
                        width={500}
                        height={500}
                        className="p-2"
                     />
                     <div className="p-3">
                        <p>Buncis</p>
                        <h4 className="text-xl">Rp16.000</h4>
                     </div>
                 </div>
                 <div className="border border-1 rounded-md">
                     <Image 
                        src={product}
                        alt="Image picture"
                        width={500}
                        height={500}
                        className="p-2"
                     />
                     <div className="p-3">
                        <p>Buncis</p>
                        <h4 className="text-xl">Rp16.000</h4>
                     </div>
                 </div>
                 <div className="border border-1 rounded-md">
                     <Image 
                        src={product}
                        alt="Image picture"
                        width={500}
                        height={500}
                        className="p-2"
                     />
                     <div className="p-3">
                        <p>Buncis</p>
                        <h4 className="text-xl">Rp16.000</h4>
                     </div>
                 </div>
             </div>
         </div>

         <div className="container mx-auto px-4 md:px-36">
             <div className="relative pb-3">
                <h1 className="text-2xl md:text-4xl font-bold text-green-black">Promo 10.10</h1>
                <button className="bg-green text-white px-4 rounded-md absolute right-0">lainnya</button>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-5 gap-2 my-5">
                 <div className="border border-1 rounded-md">
                     <Image 
                        src={product}
                        alt="Image picture"
                        width={500}
                        height={500}
                        className="p-2"
                     />
                     <div className="p-3">
                        <p>Buncis</p>
                        <h4 className="text-xl">Rp16.000</h4>
                     </div>
                 </div>
                 <div className="border border-1 rounded-md">
                     <Image 
                        src={product}
                        alt="Image picture"
                        width={500}
                        height={500}
                        className="p-2"
                     />
                     <div className="p-3">
                        <p>Buncis</p>
                        <h4 className="text-xl">Rp16.000</h4>
                     </div>
                 </div>
                 <div className="border border-1 rounded-md">
                     <Image 
                        src={product}
                        alt="Image picture"
                        width={500}
                        height={500}
                        className="p-2"
                     />
                     <div className="p-3">
                        <p>Buncis</p>
                        <h4 className="text-xl">Rp16.000</h4>
                     </div>
                 </div>
                 <div className="border border-1 rounded-md">
                     <Image 
                        src={product}
                        alt="Image picture"
                        width={500}
                        height={500}
                        className="p-2"
                     />
                     <div className="p-3">
                        <p>Buncis</p>
                        <h4 className="text-xl">Rp16.000</h4>
                     </div>
                 </div>
                 <div className="border border-1 rounded-md">
                     <Image 
                        src={product}
                        alt="Image picture"
                        width={500}
                        height={500}
                        className="p-2"
                     />
                     <div className="p-3">
                        <p>Buncis</p>
                        <h4 className="text-xl">Rp16.000</h4>
                     </div>
                 </div>
             </div>
         </div>

         <div className="container mx-auto px-4 md:px-36 py-8">
             <div className="relative pb-3">
                <h1 className="text-2xl md:text-4xl font-bold text-green-black">Paket Extra Mami</h1>
                <button className="bg-green text-white px-4 rounded-md absolute right-0">lainnya</button>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-5 gap-2 my-5">
                 <div className="border border-1 rounded-md">
                     <Image 
                        src={product}
                        alt="Image picture"
                        width={500}
                        height={500}
                        className="p-2"
                     />
                     <div className="p-3">
                        <p>Buncis</p>
                        <h4 className="text-xl">Rp16.000</h4>
                     </div>
                 </div>
                 <div className="border border-1 rounded-md">
                     <Image 
                        src={product}
                        alt="Image picture"
                        width={500}
                        height={500}
                        className="p-2"
                     />
                     <div className="p-3">
                        <p>Buncis</p>
                        <h4 className="text-xl">Rp16.000</h4>
                     </div>
                 </div>
                 <div className="border border-1 rounded-md">
                     <Image 
                        src={product}
                        alt="Image picture"
                        width={500}
                        height={500}
                        className="p-2"
                     />
                     <div className="p-3">
                        <p>Buncis</p>
                        <h4 className="text-xl">Rp16.000</h4>
                     </div>
                 </div>
                 <div className="border border-1 rounded-md">
                     <Image 
                        src={product}
                        alt="Image picture"
                        width={500}
                        height={500}
                        className="p-2"
                     />
                     <div className="p-3">
                        <p>Buncis</p>
                        <h4 className="text-xl">Rp16.000</h4>
                     </div>
                 </div>
                 <div className="border border-1 rounded-md">
                     <Image 
                        src={product}
                        alt="Image picture"
                        width={500}
                        height={500}
                        className="p-2"
                     />
                     <div className="p-3">
                        <p>Buncis</p>
                        <h4 className="text-xl">Rp16.000</h4>
                     </div>
                 </div>
             </div>
         </div>

         <div className="container mx-auto px-4 md:px-36 py-8">
             <div className="relative pb-3">
                <h1 className="text-2xl md:text-4xl font-bold text-green-black">Dapur Sayur </h1>
                <button className="bg-green text-white px-4 rounded-md absolute right-0">lainnya</button>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-5 gap-2 my-5">
                 <div className="border border-1 rounded-md">
                     <Image 
                        src={product}
                        alt="Image picture"
                        width={500}
                        height={500}
                        className="p-2"
                     />
                     <div className="p-3">
                        <p>Buncis</p>
                        <h4 className="text-xl">Rp16.000</h4>
                     </div>
                 </div>
                 <div className="border border-1 rounded-md">
                     <Image 
                        src={product}
                        alt="Image picture"
                        width={500}
                        height={500}
                        className="p-2"
                     />
                     <div className="p-3">
                        <p>Buncis</p>
                        <h4 className="text-xl">Rp16.000</h4>
                     </div>
                 </div>
                 <div className="border border-1 rounded-md">
                     <Image 
                        src={product}
                        alt="Image picture"
                        width={500}
                        height={500}
                        className="p-2"
                     />
                     <div className="p-3">
                        <p>Buncis</p>
                        <h4 className="text-xl">Rp16.000</h4>
                     </div>
                 </div>
                 <div className="border border-1 rounded-md">
                     <Image 
                        src={product}
                        alt="Image picture"
                        width={500}
                        height={500}
                        className="p-2"
                     />
                     <div className="p-3">
                        <p>Buncis</p>
                        <h4 className="text-xl">Rp16.000</h4>
                     </div>
                 </div>
                 <div className="border border-1 rounded-md">
                     <Image 
                        src={product}
                        alt="Image picture"
                        width={500}
                        height={500}
                        className="p-2"
                     />
                     <div className="p-3">
                        <p>Buncis</p>
                        <h4 className="text-xl">Rp16.000</h4>
                     </div>
                 </div>
             </div>
         </div>
      </main>

      <footer>

      </footer>
    </div>
  );
}
