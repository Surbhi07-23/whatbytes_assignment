"use client";

import Link from "next/link";
import Header from "@/HomePage/Header";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h1 className="text-4xl font-bold mb-8">
            Shopping Cart
          </h1>

          {cart.length === 0 ? (
            <div className="bg-white rounded-xl shadow p-10 text-center">
              <h2 className="text-2xl font-semibold mb-3">
                Your cart is empty
              </h2>

              <Link
                href="/"
                className="inline-block mt-4 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-md p-5 flex flex-col md:flex-row justify-between items-center gap-6"
                  >
                    <div className="flex items-center gap-5 w-full md:w-auto">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 rounded-lg object-cover"
                      />

                      <div>
                        <h2 className="text-xl font-bold">
                          {item.title}
                        </h2>

                        <p className="text-gray-500">
                          {item.category}
                        </p>

                        <p className="text-blue-700 font-bold text-lg mt-2">
                          ${item.price}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-9 h-9 rounded bg-gray-200 hover:bg-gray-300 transition"
                      >
                        -
                      </button>

                      <span className="font-semibold text-lg">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-9 h-9 rounded bg-gray-200 hover:bg-gray-300 transition"
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 text-red-600 hover:text-red-700 font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">
                    Order Total
                  </h2>

                  <p className="text-gray-500">
                    Total items:{" "}
                    {cart.reduce(
                      (sum, item) => sum + item.quantity,
                      0
                    )}
                  </p>
                </div>

                <div className="text-4xl font-bold text-blue-700">
                  ${total}
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Link
                  href="/"
                  className="bg-gray-300 hover:bg-gray-400 px-6 py-3 rounded-lg transition"
                >
                  Continue Shopping
                </Link>

                <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg transition">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}