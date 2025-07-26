import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Star,
  Zap,
  TrendingUp,
} from "lucide-react";
import demoImage from "../assets/demo.jpg";
import PillButton from "./ui/PillButton";

const ProductCarausel = ({ products = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate every 3 seconds (slightly longer for products)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  if (!products.length) {
    return (
      <div className="flex items-center justify-center h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No Products Available
          </h3>
          <p className="text-gray-500">
            Please add some products to display in the carousel
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <div className="relative h-72 sm:h-96 md:h-[500px] overflow-hidden">
                {/* Background Image - Using demo image for all slides */}
                <div className="absolute inset-0">
                  <img
                    src={demoImage}
                    alt="Product background"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay - Different gradient for products */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-indigo-800/60 to-purple-700/40"></div>

                  {/* Additional overlay elements for visual appeal */}
                  <div className="absolute inset-0">
                    <div className="absolute top-6 left-6 w-20 h-20 sm:top-10 sm:left-10 sm:w-32 sm:h-32 bg-blue-400/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-10 right-10 w-16 h-16 sm:bottom-20 sm:right-20 sm:w-24 sm:h-24 bg-indigo-400/20 rounded-full blur-xl"></div>
                    <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-purple-400/20 rounded-full blur-xl"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="container mx-auto px-2 sm:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
                      {/* Text Content */}
                      <div className="text-white space-y-4 sm:space-y-6">
                        {/* Product Category Badge */}
                        <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-purple-500/30 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-white border border-purple-400/50 mb-4 sm:mb-6 animate-fade-in">
                          <Zap className="w-4 h-4 mr-2" />
                          {product.category}
                        </div>

                        {/* Product Title */}
                        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white leading-tight mb-2 sm:mb-4 animate-slide-up">
                          {product.name}
                        </h2>

                        {/* Product Description */}
                        <p
                          className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-4 sm:mb-6 max-w-lg animate-slide-up"
                          style={{ animationDelay: "0.2s" }}
                        >
                          {product.description}
                        </p>

                        {/* Product Features Preview */}
                        <div
                          className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 animate-slide-up"
                          style={{ animationDelay: "0.4s" }}
                        >
                          {product.features.slice(0, 3).map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2 sm:space-x-3"
                            >
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              <span className="text-white/80 text-xs sm:text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Price and CTA */}
                        <div
                          className="flex flex-col sm:flex-row items-center justify-between animate-slide-up gap-2 sm:gap-0"
                          style={{ animationDelay: "0.6s" }}
                        >
                          <div className="flex items-center space-x-2 sm:space-x-4">
                            <span className="text-xl sm:text-3xl font-bold text-purple-300">
                              {product.price}
                            </span>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                            </div>
                          </div>
                          <PillButton className="text-white border-white px-4 py-2 text-xs sm:text-base">
                            Get Started
                          </PillButton>
                        </div>
                      </div>

                      {/* Product Visual */}
                      <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
                        <div className="relative">
                          {/* Product Image */}
                          <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float border border-white/30 overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-contain p-2 sm:p-4"
                            />
                          </div>

                          {/* Floating elements */}
                          <div className="absolute -top-2 -right-2 w-4 h-4 sm:-top-4 sm:-right-4 sm:w-8 sm:h-8 bg-purple-400 rounded-full animate-pulse"></div>
                          <div
                            className="absolute -bottom-2 -left-2 w-3 h-3 sm:-bottom-4 sm:-left-4 sm:w-6 sm:h-6 bg-indigo-400 rounded-full animate-pulse"
                            style={{ animationDelay: "1s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-500/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-purple-500/50 transition-all duration-300 transform hover:scale-110 z-20 border border-purple-400/50"
          disabled={isAnimating}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-500/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-purple-500/50 transition-all duration-300 transform hover:scale-110 z-20 border border-purple-400/50"
          disabled={isAnimating}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-purple-400 scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              disabled={isAnimating}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div
            className="h-full bg-purple-400 transition-all duration-500 ease-linear"
            style={{
              width: `${((currentIndex + 1) / products.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCarausel;
