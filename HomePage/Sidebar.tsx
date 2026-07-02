"use client";

interface SidebarProps {
  categories: string[];
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
}

export default function Sidebar({
  categories,
  category,
  setCategory,
  price,
  setPrice,
}: SidebarProps) {
  return (
    <aside className="bg-blue-600 text-white rounded-lg p-5">
      <h2 className="text-xl font-bold mb-5">
        Filters
      </h2>

      <h3 className="mb-3">Category</h3>

      <div className="space-y-2 mb-8">

        <label className="flex gap-2">
          <input
            type="radio"
            checked={category === "All"}
            onChange={() => setCategory("All")}
          />
          All
        </label>

        {categories.map((item) => (
          <label key={item} className="flex gap-2">
            <input
              type="radio"
              checked={category === item}
              onChange={() => setCategory(item)}
            />
            {item}
          </label>
        ))}
      </div>

      <h3 className="mb-3">
        Price : ${price}
      </h3>

      <input
        type="range"
        min={0}
        max={500}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full"
      />
    </aside>
  );
}