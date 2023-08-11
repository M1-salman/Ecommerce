"use client";
import "../globals.css";
import { Inter } from "next/font/google";
import Header from "@/app/(site)/components/Header";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartSlice, { getTotals } from "./slice/cartSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce",
  description: "This app is developed by @salman_code",
};

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

store.dispatch(getTotals());

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={` bg-gray-50 ${inter.className}`}>
          <Header />
          {children}
          <ToastContainer />
          <Footer/>
        </body>
      </html>
    </Provider>
  );
}
