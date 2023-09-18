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
    <main className="h-screen max-[500px]:h-[120vh]">
      {cart.cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <section className="flex max-[950px]:flex-col max-w-6xl mx-auto mt-10 max-xl:p-8 max-[600px]:p-4">
          <div className="w-4/6 max-[950px]:w-full">
            <h1 className="text-gray-900 font-medium text-2xl">Cart</h1>
            {cart.cartItems?.map((cartItem) => (
              <div key={cartItem._id} className="mt-6 ">
                <div className="flex">
                  <Link href={`/items/${cartItem.slug}`}>
                    <Image
                      src={cartItem.image}
                      width={150}
                      height={150}
                      alt={cartItem.title}
                      className="w-40 h-32 max-[600px]:w-24 max-[600px]:h-20 max-[480px]:w-28 max-[320px]:w-24 max-[320px]:h-16"
                    />
                  </Link>
                  <div className="ml-5 flex justify-between max-[320px]:flex-col w-full">
                    <div>
                      <h1 className="text-gray-900 font-medium max-[600px]:mr-2">
                        {cartItem.title}
                      </h1>

                      <h2 className="text-gray-500 my-2">
                        {cartItem.subtitle}
                      </h2>
                      <div className="flex">
                        <span className="mr-2 text-gray-500">Quantity</span>
                        <span onClick={() => handleDecreaseCart(cartItem)}>
                          <FontAwesomeIcon
                            icon={faMinus}
                            className="text-gray-500"
                          />
                        </span>
                        <h1 className="mx-2 text-gray-500">
                          {cartItem.cartQuantity}
                        </h1>
                        <span onClick={() => handleIncreaseCart(cartItem)}>
                          <FontAwesomeIcon
                            icon={faPlus}
                            className="text-gray-500"
                          />
                        </span>
                      </div>
                      <button
                        onClick={() => handleRemoveFromCart(cartItem)}
                        className="mt-3"
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="h-5 text-gray-400"
                        />
                      </button>
                    </div>
                    <div className="max-[320px]:mt-2">
                      <span className="text-gray-900 font-medium">
                        MRP: &#8377; {cartItem.cartQuantity * cartItem.price}
                      </span>
                    </div>
                  </div>
                </div>
                <hr className="bg-gray-300  w-full mt-7" />
              </div>
            ))}
          </div>
          <aside className=" w-2/6 max-[950px]:w-full pl-5">
            <h1 className="text-gray-900 font-medium text-2xl">Summary</h1>
            <div className="mt-6">
              <div className="flex justify-between text-gray-900">
                <span>Total Price</span>
                <span>&#8377; {cart.cartTotalAmount}</span>
              </div>
              <div className="flex justify-between text-gray-900 my-2">
                <span>Total Items Quantity</span>
                <span>{cart.cartTotalQuantity}</span>
              </div>
            </div>
            <hr className="bg-gray-300 w-full mt-5" />
            <button className="bg-gray-900 hover:bg-gray-500 transition-colors duration-300 ease-in-out text-gray-50 w-full rounded-3xl py-4 mt-6">
              Go To Checkout
            </button>
          </aside>
        </section>
      )}
    </main>
  );
};

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
