import React from 'react'
import ProductCard from './ProductCard'
import viteLogo from "/vite.svg";
import carLogo1 from "/229737.jpg"
import carLogo2 from "/02.jpg"
import carLogo3 from "/03.jpg"
import carLogo4 from "/04.jpg"
const Section = () => {
  return (
    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap',justifyContent:"space-evenly" }}>
      <ProductCard
        title={"Car Model 1"}
        price={"₹20,00,000"}
        category={"Sedan"}
        desc={"A luxurious and comfortable sedan."}
        image={carLogo1}
      />
      <ProductCard
        title={"Car Model 2"}
        price={"₹15,00,000"}
        category={"SUV"}
        desc={"A spacious and powerful SUV."}
        image={carLogo2}
      />
      <ProductCard
        title={"Car Model 3"}
        price={"₹10,00,000"}
        category={"Hatchback"}
        desc={"A compact and efficient hatchback."}
        image={carLogo3}
      />
      <ProductCard
        title={"Car Model 4"}
        price={"₹12,00,000"}
        category={"Convertible"}
        desc={"A stylish and sporty convertible."}
        image={carLogo4}
      />
      <ProductCard
        title={"Car Model 5"}
        price={"₹20,00,000"}
        category={"Sedan"}
        desc={"A luxurious and comfortable sedan."}
        image={carLogo1}
      />
      <ProductCard
        title={"Car Model 6"}
        price={"₹15,00,000"}
        category={"SUV"}
        desc={"A spacious and powerful SUV."}
        image={carLogo2}
      />
   
    </div>
  )
}

export default Section