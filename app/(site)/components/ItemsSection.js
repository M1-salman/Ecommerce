import { getItems } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

const ItemsSection = async () => {
  const items = await getItems();
  return (
    <section className="grid grid-cols-4 max-w-full max-[1200px]:grid-cols-3 max-[800px]:grid-cols-2 gap-4 p-4">
      {items.map((item) => (
        <Link
          href={`/items/${item.slug}`}
          key={item._id}
          className="m-2 max-[900px]:inline-block bg-white shadow-md rounded-lg p-4 transition-all duration-300 ease-in-out transform hover:shadow-xl hover:scale-105"
        >
          {item.image && (
            <Image
              src={item.image}
              width={1000}
              height={1000}
              alt={item.title}
              className="rounded-md"
            />
          )}  
          <div className="flex justify-between max-[1400px]:flex-col mt-2">
            <div className="inline-block text-gray-900 font-semibold">{item.title}</div>
            <div className="inline-block mr-1 text-gray-700">₹{item.price}</div>
          </div>
          <div className="text-gray-500 mt-1">{item.subtitle}</div>
        </Link>
      ))}
    </section>
  );
};

export default ItemsSection;
