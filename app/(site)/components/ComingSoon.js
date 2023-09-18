"use client"
import { Bebas_Neue} from "next/font/google";
const bebas = Bebas_Neue({ weight: "400",  subsets: ["latin"] });

const ComingSoon = () => {
  return (
    <section className="flex flex-col items-center mt-32 h-screen">
      <h1 className={`${bebas.className} text-7xl`}>COMING SOON !</h1>
    </section>
  )
}

export default ComingSoon