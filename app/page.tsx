import Header from "@/components/Header"; 
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header/>

      <div className="max-w-7xl mx-auto flex gap-6 p-6">
        <div className="w-1/4"> {/* 1/4th of width */}
          <Sidebar/>
        </div>

        <div className="flex-1"> {/* remaining space */}
          <ProductGrid/>
        </div>
      </div>

      <Footer/>
    </main>
  );
}
