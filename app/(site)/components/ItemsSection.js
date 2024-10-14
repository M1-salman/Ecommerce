import { getItems } from "@/sanity/sanity-utils";
import ItemCard from "./ItemCard";

const ItemsSection = async () => {
  const items = await getItems();

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ItemsSection;
