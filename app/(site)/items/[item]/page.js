"use client";
import { getItem } from "@/sanity/sanity-utils";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slice/cartSlice";
import SelectSize from "../../components/SelectSize";

export default async function Item({ params }) {
  const dispatch = useDispatch();
  const slug = await params.item;
  const item = await getItem(slug);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <section className="w-4/5 m-auto py-20 flex max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:w-full">
      <div className="w-2/4 max-[500px]:w-3/4">
        <Image
          src={item.image}
          width={550}
          height={550}
          alt={item.title}
          className=" rounded-lg "
        />
      </div>
      <aside className="w-2/4 px-10 max-[1000px]:px-0 max-[1000px]:w-full max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:items-center">
        <div className="flex flex-col">
          <span className="text-gray-900 font-medium text-2xl">
            {item.title}
          </span>
          <span className="text-gray-900 font-medium mt-1">
            {item.subtitle}
          </span>
          <span className="text-gray-900 font-medium mt-1">
            MRP : &#8377; {item.price}
          </span>
        </div>
        <div></div>
        <div className="mt-10 font-medium text-gray-900">
          <span>Select Size</span>
          <SelectSize />
          <div className="flex max-[1000px]:justify-center">
            <button
              className="bg-gray-900 hover:bg-gray-500 transition-colors duration-300 ease-in-out text-gray-50 w-72 rounded-3xl py-4 mt-6 max-[320px]:w-64 "
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </aside>
    </section>
  );
}
