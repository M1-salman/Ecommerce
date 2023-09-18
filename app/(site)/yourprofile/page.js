"use client";
import { useSession, signOut } from "next-auth/react";
import GetStarted from "../components/GetStarted";
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
import { Alegreya_Sans } from "next/font/google";
const alegreya = Alegreya_Sans({ weight: "500", subsets: ["latin"] });
import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

const Page = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <section className="max-[500px]:h-[130vh] h-screen flex justify-center mt-52">
      <span className={`${alegreya.className} text-gray-500 text-xl`}>Loading...</span>
    </section>;
  }

  if (session && session.user) {
    return (
      <section className="flex flex-col items-center mt-32 h-[130vh]">
        <div className={`${bebas.className} text-5xl`}>Welcome !</div>
        <div className={`${alegreya.className} text-2xl`}>
          {session.user.name}
        </div>
        <button
          className={`${roboto.className} py-1 px-5 my-2  rounded-sm text-gray-50 bg-red-500`}
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </section>
    );
  }
  return <GetStarted />;
};

export default Page;
