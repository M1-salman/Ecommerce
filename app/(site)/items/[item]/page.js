import { getItem } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Item({ params }) {
  const slug = params.item;
  const item = await getItem(slug);
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
        <div className="mt-10 font-medium text-gray-900">
          <span>Select Size</span>
          <div className="grid grid-cols-3 gap-1.5 w-72 mt-2 max-[320px]:w-64">
            <div className="border-2 border-slate-200  rounded text-center text-gray-900 hover:border-gray-900 p-2 cursor-pointer">
              UK 5.5
            </div>
            <div className="border-2 border-slate-200  rounded text-center text-gray-900 hover:border-gray-900 p-2 cursor-pointer">
              UK 6
            </div>
            <div className="border-2 border-slate-200  rounded text-center text-gray-900 hover:border-gray-900 p-2 cursor-pointer">
              UK 6.5
            </div>
            <div className="border-2 border-slate-200  rounded text-center text-gray-900 hover:border-gray-900 p-2 cursor-pointer">
              UK 7
            </div>
            <div className="border-2 border-slate-200  rounded text-center text-gray-900 hover:border-gray-900 p-2 cursor-pointer">
              UK 7.5
            </div>
            <div className="border-2 border-slate-200  rounded text-center text-gray-900 hover:border-gray-900 p-2 cursor-pointer">
              UK 8
            </div>
            <div className="border-2 border-slate-200  rounded text-center text-gray-900 hover:border-gray-900 p-2 cursor-pointer">
              UK 8.5
            </div>
            <div className="border-2 border-slate-200  rounded text-center text-gray-900 hover:border-gray-900 p-2 cursor-pointer">
              UK 9
            </div>
            <div className="border-2 border-slate-200  rounded text-center text-gray-900 hover:border-gray-900 p-2 cursor-pointer">
              UK 9.5
            </div>
            <div className="border-2 border-slate-200  rounded text-center text-gray-900 hover:border-gray-900 p-2 cursor-pointer">
              UK 10
            </div>
            <div className="border-2 border-slate-200  rounded text-center text-gray-900 hover:border-gray-900 p-2 cursor-pointer">
              UK 10.5
            </div>
            <div className="border-2 border-slate-200  rounded text-center text-gray-900 hover:border-gray-900 p-2 cursor-pointer">
              UK 11
            </div>
            <div className="border-2 border-slate-200  rounded text-center text-gray-900 hover:border-gray-900 p-2 cursor-pointer">
              UK 11.5
            </div>
            <div className="border-2 border-slate-200  rounded text-center text-gray-900 hover:border-gray-900 p-2 cursor-pointer">
              UK 12
            </div>
            <div className="border-2 border-slate-200  rounded text-center text-gray-900 hover:border-gray-900 p-2 cursor-pointer">
              UK 12.5
            </div>
          </div>
          <div className="flex max-[1000px]:justify-center">
          <button className="bg-gray-900 text-gray-50 w-72 rounded-3xl py-4 mt-6 max-[320px]:w-64 ">
            Add to Cart
          </button>
          </div>
        </div>
      </aside>
    </section>
  );
}
