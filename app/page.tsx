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

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      const matchesPrice = product.price <= price;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice
      );
    });
    }, [search, category, price]
  );

  return (
    <main className="min-h-screen bg-gray-100">
      <Header search={search} setSearch={setSearch} />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 p-6">
        <div className="w-full lg:w-72 shrink-0">
          <Sidebar
            categories={categories}
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
          />
        </div>

        <div className="flex-1 w-full">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>

      <Footer />
    </main>
  );
}