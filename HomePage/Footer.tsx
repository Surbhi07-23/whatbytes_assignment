import Link from "next/link";
import { Globe, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#052b6d] text-white mt-10">
      <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-2xl font-bold mb-6">
            Filters
          </h3>

          <div className="flex gap-5 text-gray-200">
            <Link href="/">All</Link>
            <Link href="/">Electronics</Link>
          </div>

          <p className="mt-10 text-gray-300">
            © 2026 American
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">
            About Us
          </h3>

          <div className="flex flex-col gap-3 text-gray-200">
            <Link href="/">About Us</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <button className="w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition">
              <Globe size={20} />
            </button>

            <button className="w-11 h-11 rounded-full bg-blue-500 hover:bg-blue-400 flex items-center justify-center transition">
              <Mail size={20} />
            </button>

            <button className="w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition">
              <Phone size={20} />
            </button>

          </div>
        </div>

      </div>
    </footer>
  );
}