import Link from "next/link";
import Image from "next/image";

const EmptyCart = () => {
  return (
    <section className="flex flex-col items-center mt-32 ">
      <div className="text-gray-900 font-medium text-3xl">Cart</div>
      <div className="mt-4 text-gray-900">
        There are not items in your cart.
      </div>
      <div>
        <Image
          src="/images/emptycart.svg"
          height={400}
          width={400}
          alt="Empty cart image not found"
        />
      </div>
      <div>
        <Link href={`/`}>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Continue Shopping
          </button>
        </Link>
      </div>
    </section>
  );
};

export default EmptyCart;
