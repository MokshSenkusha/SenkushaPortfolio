import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";

const CarauselCard = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start from first real item
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  // Clone first and last item for seamless transition
  const extendedItems = [items[items.length - 1], ...items, items[0]];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 2000); // every 2s

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const goToSlide = (index) => {
    if (isAnimating || index + 1 === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index + 1); // offset by 1 due to cloned first item
  };

  // Handle transition end for seamless effect
  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (currentIndex === extendedItems.length - 1) {
      // if we're at the fake last slide, jump to real first
      setCurrentIndex(1);
      containerRef.current.style.transition = "none";
      containerRef.current.style.transform = `translateX(-100%)`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          containerRef.current.style.transition = "transform 0.5s ease-in-out";
        });
      });
    } else if (currentIndex === 0) {
      // if we're at fake first slide, jump to real last
      setCurrentIndex(extendedItems.length - 2);
      containerRef.current.style.transition = "none";
      containerRef.current.style.transform = `translateX(-${
        (extendedItems.length - 2) * 100
      }%)`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          containerRef.current.style.transition = "transform 0.5s ease-in-out";
        });
      });
    }
  };

  if (!items.length) {
    return (
      <div className="flex items-center justify-center h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No Items Available
          </h3>
          <p className="text-gray-500">
            Please add some items to display in the carousel
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
        {/* Slides container */}
        <div
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out"
          onTransitionEnd={handleTransitionEnd}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {extendedItems.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <div className="flex flex-col">
                {item.image && (
                  <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-2xl relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center text-gray-400">
                      <span>Image not available</span>
                    </div>
                  </div>
                )}
                <div className="p-6 flex flex-col gap-3">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {item.title}
                  </h2>
                  {item.subtitle && (
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium mb-2 w-fit">
                      {item.subtitle}
                    </span>
                  )}
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  {item.cta && (
                    <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors text-sm font-medium w-fit flex items-center gap-2">
                      {item.cta.text}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-purple-200 shadow-md rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-50 transition-all duration-300 z-20"
          disabled={isAnimating}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-purple-200 shadow-md rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-50 transition-all duration-300 z-20"
          disabled={isAnimating}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index + 1 === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              disabled={isAnimating}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div
            className="h-full bg-white transition-all duration-500 ease-linear"
            style={{
              width: `${
                (((currentIndex - 1 + items.length) % items.length) + 1) *
                (100 / items.length)
              }%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CarauselCard;
