import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps) {

  // conditional check for no prodcuts
  if (products.length === 0) {    
    return (
      <section>
        <h2 className="text-2xl font-bold mb-6">Products (0)</h2>

        <div className="bg-white rounded-lg shadow p-10 text-center">
          <p className="text-gray-500 text-lg">
            No products found.
          </p>
        </div>
      </section>
    );
  }
  
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">
        Products ({products.length})
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}