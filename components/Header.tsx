import { Search  , ShoppingCart} from "lucide-react"

export default function Header(){
    return(
        <header className="bg-blue-700 text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <h1 className="text-3xl font-bold">
                    Logo
                </h1>

                <div className="flex items-center bg-blue-600 rounded-md px-3 py-2 w-105">
                    <Search size={18} className="mr-2.5"/>
                    <input 
                        type="text"
                        placeholder="Search for products..."
                        className="bg-transparent outline-none flex-1 placeholder:text-gray-300 text-white text-sm"
                    />
                </div>

                <button className="flex items-center bg-blue-900 px-5 py-2 rounded-md hover:bg-blue-800 hover:cursor-pointer transition">
                    <ShoppingCart/>
                    Cart
                </button>
            </div>
        </header>
    )
}