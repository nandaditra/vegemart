import Header from "@/components/header/header";
import Image from "next/image";
import product from "@/assets/img/product/buncis.jpg"
import Footer from "@/components/footer/footer";

export default async function Products({
    params,
  }:{
    params: {productId:string}}){

    const { productId } = await params

    return (<>
      <Header />

      <main>
         <div className="container mx-auto px-4 md:px-36">
             <div className="flex flex-col md:flex-row my-10">
                  <div className="p-2 md:w-1/4">
                       <Image 
                         src={product}
                         width={400}
                         height={400}
                         alt="Vidio"
                         className="mx-auto"
                        />         
                  </div>
                  <div className="p-2 md:w-3/4">
                    <h4 className="text-2xl">Rp20.000</h4>
                    <h1 className="text-3xl">Bayam Hijau</h1>
                    <div className="flex text-gray-700 text-sm gap-3">
                       <span>Pt Abc Indonesia</span><span>Jakarta</span><span>-Offline</span>
                    </div>
                    <div className="my-3 justify-content">
                        <div className="my-2">
                        <h4 className="text-sm">Deskripsi</h4>
                        <p className="text-sm text-gray-400 font-regular">Buncis merupakan salah satu jenis tanaman sayuran polong yang dapat dikonsumsi dalam keadaan muda atau dikonsumsi bijinya. Biji buncis dapat dimasak untuk berbagai jenis makanan, misalnya sayur asam, rendang, sup, dan sebagainya.</p>
                        </div>
                        <div className="my-2">
                        <h4 className="text-sm">Kandungan Gizi</h4>
                        <p className="text-sm text-gray-400 font-regular"> protein, serat, kalsium, magnesium, zat besi, fosfor, kalium sodium, vitamin B, C, K, folat, dan beta karoten</p>
                        </div>
                    </div>

                    <button className="bg-green rounded-md text-white px-5 py-4 flex"><span className="material-symbols-outlined text-white">
                        shopping_cart
                        </span>
                        Masukkan Keranjang
                    </button>
                  </div>
             </div>

             <h4 className="text-2xl mt-4">Rekomendasi yang lainnya</h4>

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

      <Footer />
    </>)
    
    return 
}