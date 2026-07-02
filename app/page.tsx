"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Header from "@/HomePage/Header";
import Footer from "@/HomePage/Footer";
import Sidebar from "@/HomePage/Sidebar";
import ProductGrid from "@/HomePage/ProductGrid";

import { products, categories } from "@/data/products";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const [category, setCategory] = useState(
    searchParams.get("category") || "All"
  );

  const [price, setPrice] = useState(
    Number(searchParams.get("price")) || 1000
  );

  useEffect(() => {
      const params = new URLSearchParams();

      if (search) {
        params.set("search", search);
      }

      if (category !== "All") {
        params.set("category", category);
      }

      if (price !== 1000) {
        params.set("price", price.toString());
      }

      router.replace(`/?${params.toString()}`);
    }, [search, category, price, router]
  );

  return (
    <main className="min-h-screen bg-gray-100">
      <Header search={search} setSearch={setSearch} />

      <div className="max-w-7xl mx-auto flex gap-6 p-6">
        <div className="w-1/4">
          <Sidebar
            categories={categories}
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
          />
        </div>

        <div className="flex-1">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>

      <Footer />
    </main>
  );
}