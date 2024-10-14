"use client";
import { useSession, signOut } from "next-auth/react";
import GetStarted from "../components/GetStarted";
import { motion } from "framer-motion";
import { Roboto, Alegreya_Sans, Bebas_Neue } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const alegreya = Alegreya_Sans({ weight: "500", subsets: ["latin"] });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

const Page = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen flex justify-center items-center"
      >
        <div className={`${alegreya.className} text-gray-500 text-xl`}>
          Loading...
        </div>
      </motion.div>
    );
  }

  if (session && session.user) {
    return (
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 p-4"
      >
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className={`${bebas.className} text-4xl mb-4 text-center text-indigo-600`}>
            Welcome!
          </h1>
          <div className={`${alegreya.className} text-2xl mb-6 text-center text-gray-700`}>
            {session.user.name}
          </div>
          {session.user.image && (
            <img
              src={session.user.image}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-indigo-200"
            />
          )}
          <button
            className={`${roboto.className} w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50`}
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      </motion.section>
    );
  }

  return <GetStarted />;
};

export default Page;
