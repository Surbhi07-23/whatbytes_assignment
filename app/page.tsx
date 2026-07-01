import Header from "@/components/Header"; 
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductCard";

import { products , categories } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header/>

      <div className="max-w-7xl mx-auto flex gap-6 p-6">
        <div className="w-1/4"> {/* 1/4th of width */}
          <Sidebar categories={categories}/>
        </div>

        <div className="flex-1"> {/* remaining space */}
          <ProductGrid products = {products}/>
        </div>
      </div>

      <Footer/>
    </main>
  );
}
