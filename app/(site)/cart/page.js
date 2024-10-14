"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseCart,
  addToCart,
  getTotals,
} from "../slice/cartSlice";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import EmptyCart from "../components/EmptyCart";
import Link from "next/link";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {cart.cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <section className="flex flex-col lg:flex-row max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-10">
            <div className="lg:w-2/3 lg:pr-8">
              <h1 className="text-gray-900 font-semibold text-2xl mb-6">Your Cart</h1>
              {cart.cartItems?.map((cartItem) => (
                <div key={cartItem._id} className="mb-6 bg-white shadow-md rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row items-center">
                    <Link href={`/items/${cartItem.slug}`} className="mb-4 sm:mb-0 sm:mr-6">
                      <Image
                        src={cartItem.image}
                        width={150}
                        height={150}
                        alt={cartItem.title}
                        className="w-32 h-32 object-cover rounded-md"
                      />
                    </Link>
                    <div className="flex-grow text-center sm:text-left">
                      <h2 className="text-gray-900 font-semibold text-lg mb-2">{cartItem.title}</h2>
                      <p className="text-gray-600 mb-4">{cartItem.subtitle}</p>
                      <div className="flex items-center justify-center sm:justify-start mb-4">
                        <span className="mr-2 text-gray-600">Quantity</span>
                        <button onClick={() => handleDecreaseCart(cartItem)} className="p-1 hover:bg-gray-100 rounded transition-colors duration-300">
                          <FontAwesomeIcon icon={faMinus} className="text-gray-500" />
                        </button>
                        <span className="mx-2 text-gray-700 font-medium">{cartItem.cartQuantity}</span>
                        <button onClick={() => handleIncreaseCart(cartItem)} className="p-1 hover:bg-gray-100 rounded transition-colors duration-300">
                          <FontAwesomeIcon icon={faPlus} className="text-gray-500" />
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => handleRemoveFromCart(cartItem)}
                          className="text-red-500 hover:text-red-700 transition-colors duration-300 mr-2 sm:mr-0"
                        >
                          <FontAwesomeIcon icon={faTrash} className="mr-2" />
                          Remove
                        </button>
                        <span className="text-gray-900 font-semibold ml-auto">
                          ₹{cartItem.cartQuantity * cartItem.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <aside className="lg:w-1/3 mt-8 lg:mt-0">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-gray-900 font-semibold text-xl mb-4">Order Summary</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Total Items</span>
                    <span>{cart.cartTotalQuantity}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{cart.cartTotalAmount}</span>
                  </div>
                </div>
                <hr className="my-4 border-gray-200" />
                <div className="flex justify-between text-xl font-semibold text-gray-900 mb-6">
                  <span>Total</span>
                  <span>₹{cart.cartTotalAmount}</span>
                </div>
                <button className="bg-gray-900 hover:bg-gray-700 transition-colors duration-300 text-white w-full rounded-lg py-3 font-semibold">
                  Proceed to Checkout
                </button>
              </div>
            </aside>
          </section>
        )}
      </div>
    </main>
  );
};

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
