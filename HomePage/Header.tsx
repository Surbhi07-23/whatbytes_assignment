"use client";

import { Search, ShoppingCart } from "lucide-react";

interface HeaderProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({
  search,
  setSearch,
}: HeaderProps) {
  return (
    <header className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-3xl font-bold">
          Logo
        </h1>

        <div className="flex items-center bg-blue-600 rounded-md px-3 py-2 w-[420px]">
          <Search size={18} className="mr-2" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="bg-transparent outline-none flex-1"
          />
        </div>

        <button className="flex items-center gap-2 bg-blue-900 px-5 py-2 rounded-md">
          <ShoppingCart />
          Cart
        </button>
      </div>
    </header>
  );
}