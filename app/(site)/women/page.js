import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

const Women = () => {
  return (
    <section className="flex justify-center mt-24">
      <h1 className={`${bebas.className} text-7xl`}>COMING SOON !</h1>
    </section>
  )
}

export default Women