import Header from "@/components/header/header";
import { useRouter } from 'next/router'

export default function Products(){
    const router = useRouter()

    return (<>
      <Header />

      <main>
       <p>{router.query.slug}</p>
      </main>
    </>)
}