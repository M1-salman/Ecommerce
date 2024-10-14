import { Bebas_Neue} from "next/font/google";
const bebas = Bebas_Neue({ weight: "400",  subsets: ["latin"] });

const Section = () => {
  return (
    <section className="flex flex-col items-center mt-20 max-w-full">
        <span>New Arrivals</span>
        <h1 className={`${bebas.className} text-7xl`}>BRING IT ON</h1>
    </section>
  )
}

export default Section