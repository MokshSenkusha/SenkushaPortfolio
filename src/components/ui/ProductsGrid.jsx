import React from "react";
import ProductCard from "./ProductCard";

const ProductsGrid = ({
  products = [],
  title = "",
  subtitle = "",
  showImage = true,
  showDescription = true,
  showPrice = true,
  showCategory = true,
  showFeatures = false,
  maxFeatures = 3,
  gridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  className = "",
}) => {
  if (!products.length) {
    return (
      <div className="flex items-center justify-center h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No Products Available
          </h3>
          <p className="text-gray-500">Please add some products to display</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8`}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showImage={showImage}
            showDescription={showDescription}
            showPrice={showPrice}
            showCategory={showCategory}
            showFeatures={showFeatures}
            maxFeatures={maxFeatures}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
