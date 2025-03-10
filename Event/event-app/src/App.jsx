import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function App() {
  const [productData, setProductData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((res) => {
        setProductData(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div style={{}}>
        <h1 style={{ fontSize: "45px" }}>
          Product List
          <button
            className="button"
            style={{ float: "right" }}
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
          </button>
        </h1>
        <div>
          <div className="" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {productData && productData.map((product) => {
              return (
                <div style={{ flex: "1 1 calc(33.33% - 10px)", boxSizing: "border-box" }}>
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    category={product.category}
                    price={product.price}
                    description={product.description.split("").slice(0, 60).join("")}
                    image={product.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
