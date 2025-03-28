import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [editIndex, setEditIndex] = useState("");
  const [boolean, setBoolean] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleAdd(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(item) {
    setCart(cart.filter((deleteItem) => deleteItem != item));
  }

  function editFromCart(item) {
    setBoolean(true);
    setCart(products[item]);
    setEditIndex(item);
  }

  function handleCategory(e) {
    if (e.target.value === "all") {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        setProducts(res.data);
      });
    } else {
      let filterCategory = products.filter(
        (pro) => pro.category === e.target.value
      );
      setProducts(filterCategory);
    }
  }

  function handleSort() {
    let sortData = products.sort((a, b) => a.price - b.price);
    setProducts([...sortData]);
  }

  function handleSort2() {
    let sortData = products.sort((a, b) => b.price - a.price);
    setProducts([...sortData]);
  }

  function handleSearch() {
    // Implement search functionality
  }

  return (
    <>
      <Navbar boolean={boolean} setBoolean={setBoolean} />
      
      {/* Filters Section */}
      <div className="container mx-auto px-4 mt-24 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 bg-white rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <label className="text-gray-700 font-semibold">Category:</label>
              <select
                onChange={handleCategory}
                className="p-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option value="all">All</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="jewelery">Jewelry</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's Clothing</option>
              </select>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleSort}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
              >
                Price: Low to High
              </button>
              <button
                onClick={handleSort2}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
              >
                Price: High to Low
              </button>
            </div>
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 flex">
        {/* Products Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="p-4">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{item.category}</span>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600 line-clamp-2">{item.description}</p>
              </div>
              <div className="h-48 flex items-center justify-center p-4 bg-gray-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">${item.price}</span>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    onClick={() => handleAdd(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shopping Cart Sidebar */}
        {boolean && (
          <div className="hidden lg:block w-80 h-screen sticky top-0 border-l border-gray-200 bg-white overflow-y-auto">
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Your Cart ({cart.length})</h2>
              
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="mt-2 text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div key={index} className="p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded">
                          <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 line-clamp-1">{item.title}</h4>
                          <p className="text-sm text-gray-500">{item.category}</p>
                          <p className="font-bold text-green-600">${item.price}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <button
                          className="flex-1 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition text-sm"
                          onClick={() => editFromCart(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="flex-1 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm"
                          onClick={() => removeFromCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;