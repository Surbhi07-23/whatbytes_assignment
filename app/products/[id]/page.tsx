import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import { products } from "@/data/products";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto p-10">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.title}
          className="rounded-xl shadow"
        />

        <div>
          <p className="text-blue-600 uppercase">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {product.title}
          </h1>

          <p className="text-gray-500 mt-2">
            {product.brand}
          </p>

          <div className="flex items-center gap-2 mt-3">
            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
            <span>{product.rating}</span>
          </div>

          <h2 className="text-3xl text-blue-700 font-bold mt-6">
            ${product.price}
          </h2>

          <p className="mt-6 text-gray-700 leading-7">
            {product.description}
          </p>

          <button className="mt-8 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}