"use client";

import Link from "next/link";
import { Product } from "@/types/product";
import { Star } from "lucide-react";

import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col cursor-pointer h-full">

        <div className="h-56 bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-4 flex flex-col flex-1">

          <span className="text-xs text-blue-600 uppercase font-semibold">
            {product.category}
          </span>

          <h2 className="text-lg font-bold mt-2">
            {product.title}
          </h2>

          <p className="text-sm text-gray-500">
            {product.brand}
          </p>

          <div className="flex items-center gap-1 mt-2">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            {product.rating}
          </div>

          <p className="text-gray-600 text-sm mt-3 flex-1">
            {product.description}
          </p>

          <div className="mt-4 flex items-center justify-between">

            <span className="text-2xl font-bold text-blue-700">
              ${product.price}
            </span>

            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="mt-4 bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg transition cursor-pointer"
            >
              Add to Cart
            </button>

          </div>

        </div>

      </div>
    </Link>
  );
}