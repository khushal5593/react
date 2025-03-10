import React from 'react';

const ProductCard = ({ title, image, description, price, category }) => {
  return (
    <div className="w-72 h-auto bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl  transition-shadow duration-300 flex flex-col">

      <img 
        src={image} 
        alt={title} 
        className="h-56 w-full object-cover rounded-t-lg" 
      />


      <div className="p-4 flex flex-col flex-grow ">

        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>

        <p className="text-gray-600 text-sm mt-2">{description}</p>

        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold text-green-500">Price: ${price}</p>
          <p className="text-xs text-gray-500">{category}</p>
        </div>
        
        <div className="mt-auto"></div>
      </div>

      <button 
        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-b-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;