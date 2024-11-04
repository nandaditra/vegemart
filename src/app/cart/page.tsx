import Header from "@/components/header/header";
import product from "@/assets/img/product/buncis.jpg"
import Image from "next/image";

export default function Cart(){
    return (<>
      <Header />

      <main>
        <div className="container mx-auto px-4 md:px-36">
            <h4 className="text-xl mt-5">Jumlah Item : 16</h4>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-3/4">
                    <div className="p-3 flex flex-row">
                        <div className="w-1/6">
                            <Image 
                               src={product}
                               width={300}
                               height={300}
                               alt="Product Image"
                            />
                        </div>
                        <div className="w-5/6 flex gap-5">
                            <div>
                                <h4 className="text-2xl">Bumbu Mati</h4>
                                <p>Rp19.000</p>
                            </div> 
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="drop-shadow w-full md:w-1/4 p-2 md:p-4 rounded-md border border-1">
                     <p className="text-gray-700 text-xs text-justify p-4">Di Vegemart, kami menyediakan berbagai metode pembayaran yang aman dan nyaman untuk memenuhi kebutuhan belanja Anda. Jika anda sudah yakin dengan item yang ditambahkan, silahkan lakukan pembayaran</p>
                     <button className="bg-green p-2 text-white rounded-md w-full">Bayar</button>
                </div>
            </div>
        </div>
      </main>
    </>)
}