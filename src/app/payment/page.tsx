"use client"

import Header from "@/components/header/header";
import { useState } from "react";

export default function Payment(){
    const [payment, setPayment] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")

    async function PaymentBill() {
        
    }

    console.log(payment)

    return (
        <>
        <Header />

        <main>
            <div className="container mx-auto px-4 md:px-36 ">
                <div className="flex flex-col md:flex-row gap-5">
                <div className="text-sm w-full md:w-1/3 text-justify my-4">
                    <p>Di Vegemart, kami menyediakan berbagai metode pembayaran yang aman dan nyaman untuk memenuhi kebutuhan belanja Anda. Pilihan pembayaran kami meliputi: </p>

                    <ol className="list-decimal my-5 mx-5">
                        <li><b>Transfer Bank</b>: Anda dapat melakukan pembayaran melalui transfer ke rekening bank kami. Pastikan untuk menyimpan bukti transfer sebagai konfirmasi.</li>
                        <li><b>Pembayaran di Tempat (COD)</b>: Untuk kenyamanan Anda, kami juga menyediakan opsi pembayaran di tempat saat barang diterima.</li>
                    </ol>
                    
                    <p>Setiap transaksi dilindungi dengan sistem keamanan yang ketat, memastikan data pribadi Anda tetap aman. Jika Anda memiliki pertanyaan lebih lanjut mengenai metode pembayaran, jangan ragu untuk menghubungi tim layanan pelanggan kami.</p>
                    
                </div>
                <div className="w-full md:w-2/3">
                   <h3>Pilih Metode Pembayaran</h3>

                   <select id="payment" value={payment}>
                        <option value="Bank">Bank</option>
                        <option value="COD">Cash on Delivery</option>
                        <option value="QRIS">QRIS</option>
                   </select><br />

                   <select id="bank">
                        <option value="Mandiri">Mandiri</option>
                        <option value="BNI">BNI</option>
                        <option value="BCA">BCA</option>
                   </select>

                   <div className="my-3">
                        <h5 className="text-lg font-bold">Total Pembayaran</h5>
                        <div className="">
                           <div className="flex">
                              <p className="w-1/2">Pembayaran</p>
                              <p className="w-1/2 text-right">Rp19.000</p>
                           </div>
                           <div className="flex">
                              <p className="w-1/2">Diskon 50%</p>
                              <p className="w-1/2 text-right">Rp8.500</p>
                           </div>
                           <hr className="my-2 bg-black" />
                           <div className="flex">
                              <p className="w-1/2">Total</p>
                              <p className="w-1/2 text-right">Rp8.500</p>
                           </div>
                        </div>
                        <button className="bg-green text-white w-full rounded-md py-3">Bayar</button>
                    </div>
                </div>
                </div>
            </div>
        </main>
        </>
    )
}