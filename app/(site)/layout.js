import "../globals.css";
import { Inter } from "next/font/google";
import Header from "@/app/(site)/components/Header";
import { ToastContainer } from "./toast/nextToast";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import { ReduxProvider } from "./redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce",
  description: "This app is developed by @salman_code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` bg-gray-50 ${inter.className}`}>
        <ReduxProvider>
          <Header />
          {children}
          <ToastContainer />
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
