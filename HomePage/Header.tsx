"use client";

import { Search, ShoppingCart } from "lucide-react";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface HeaderProps {
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({
  search,
  setSearch,
}: HeaderProps) {
    const { cart } = useCart();

    const cartCount = cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    return (
        <header className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4">
            <h1 className="text-3xl font-bold">
            Logo
            </h1>

            <div className="hidden md:flex items-center bg-blue-600 rounded-md px-3 py-2 flex-1 max-w-md mx-8">
            <Search size={18} className="mr-2" />

            <input
              value={search ?? ""}
              onChange={(e) => setSearch?.(e.target.value)}
              placeholder="Search for products..."
              className="bg-transparent outline-none flex-1 placeholder:text-gray-300 text-white text-sm"
            />
            </div>

            <Link
              href="/cart"
              className="flex items-center gap-2 bg-blue-900 px-5 py-2 rounded-md hover:bg-blue-800 transition"
            >
              <ShoppingCart size={20} />
              Cart ({cart.length})
              
            </Link>
        </div>
        </header>
  );
}