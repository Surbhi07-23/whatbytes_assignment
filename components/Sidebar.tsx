"use client";

import { categories } from "@/data/products";

interface SidebarProps {
  categories: string[];
}

export default function Sidebar() {
    return(
        <aside className="bg-blue-600 text-white rounded-lg p-5">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>

            <div className="mb-8">
                <h3 className="font-bold mb-3">Category</h3>

                <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="category" defaultChecked/>
                        <span>All</span>
                    </label>

                    {categories.map((category) => (
                    <label
                    key={category}
                    className="flex items-center gap-2 cursor-pointer"
                    >
                    <input
                        type="radio"
                        name="category"
                        className="cursor-pointer"
                    />
                    <span>{category}</span>
                    </label>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-medium mb-3"> Price </h3>

                <input type="range" min={0} max={1000} 
                    step={50}
                    defaultValue={1000} 
                    className="w-full h-2 rounded-lg cursor-pointer accent-white"
                />
                <div className="flex justify-between text-sm ">
                    <span>
                        0
                    </span>
                    <span>
                        1000
                    </span>
                </div>
            </div>
        </aside>
    )
}