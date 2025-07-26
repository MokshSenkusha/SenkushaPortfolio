import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, showImage = true, showDescription = true, showPrice = true, showCategory = true, showFeatures = false, maxFeatures = 3, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      {showImage && (
        <div className="h-36 sm:h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain p-2 sm:p-4"
          />
        </div>
      )}
      
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-1 sm:mb-2">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{product.name}</h3>
          {showCategory && (
            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium ml-2 flex-shrink-0">
              {product.category}
            </span>
          )}
        </div>
        
        {showDescription && (
          <p className="text-gray-600 mb-2 sm:mb-4 line-clamp-3">{product.description}</p>
        )}
        
        {showFeatures && product.features && (
          <div className="mb-2 sm:mb-4">
            <h4 className="text-sm font-medium text-gray-900 mb-1 sm:mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {product.features.slice(0, maxFeatures).map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <svg className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-600 text-xs sm:text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          {showPrice && (
            <span className="text-purple-600 font-semibold text-sm sm:text-base">{product.price}</span>
          )}
          <Link
            to={product.id === 2 ? `/product/2` : `/comingsoon`}
            className="bg-purple-600 text-white px-3 sm:px-4 py-2 rounded-md hover:bg-purple-700 transition-colors text-xs sm:text-sm font-medium"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 