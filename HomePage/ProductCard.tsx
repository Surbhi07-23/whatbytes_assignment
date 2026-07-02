import { Product } from "@/types/product";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md   overflow-hidden hover:shadow-bold transition duration-300 flex flex-col">
      {/* Product Image */}
      <div className="h-56 bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-1">
        {/* Category */}
        <span className="text-xs text-blue-600 font-medium uppercase">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-semibold mt-2 line-clamp-2">
          {product.title}
        </h2>

        {/* Brand */}
        <p className="text-sm text-gray-500">
          Brand: {product.brand}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />
          <span className="text-sm">{product.rating}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-3 line-clamp-3 flex-1">
          {product.description}
        </p>

        {/* Price */}
        <div className="mt-4">
          <p className="text-2xl font-bold text-blue-700">
            ${product.price}
          </p>
        </div>

        {/* Button */}
        <button className="mt-4 bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}