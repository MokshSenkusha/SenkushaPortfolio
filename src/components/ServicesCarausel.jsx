import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "./ui/ServiceCard";
import MobileCarauselCard from "./ui/MobileCarauselCard";

const ServicesCarousel = ({ services = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setTimeout(() => setIsAnimating(false), 500); // Match animation duration
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  if (!services.length) {
    return (
      <div className="flex items-center justify-center h-64 sm:h-80 md:h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
        <div className="text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
            No Services Available
          </h3>
          <p className="text-sm sm:text-base text-gray-500">
            Please add some services to display in the carousel
          </p>
        </div>
      </div>
    );
  }

  if (isMobile) {
    return (
      <MobileCarauselCard
        items={services.map((service) => ({
          title: service.name,
          subtitle: service.category,
          description: service.description,
          image: service.image,
          cta: { text: "Learn More" },
        }))}
      />
    );
  }

  const leftIndex = (currentIndex - 1 + services.length) % services.length;
  const rightIndex = (currentIndex + 1) % services.length;
  const cards = [
    { ...services[leftIndex], position: "left" },
    { ...services[currentIndex], position: "center" },
    { ...services[rightIndex], position: "right" },
  ];

  const positionStyles = {
    left: "z-10 scale-80 md:scale-90 opacity-50 md:opacity-60 -mr-6 md:-mr-8 lg:-mr-12 w-[70%] md:w-[75%] max-w-md",
    center: "z-20 scale-100 opacity-100 mx-2 md:mx-4 lg:mx-6 w-full max-w-xl shadow-2xl bg-white/90 backdrop-blur-lg",
    right: "z-10 scale-80 md:scale-90 opacity-50 md:opacity-60 -ml-6 md:-ml-8 lg:-ml-12 w-[70%] md:w-[75%] max-w-md",
  };

  return (
    <div className="relative w-full max-w-7xl px-1 sm:px-2 md:px-4 mx-auto overflow-hidden">
      <div className="relative flex items-center justify-center h-[320px] sm:h-[380px] md:h-[450px] lg:h-[500px]">
        {/* Cards */}
        <div className="flex items-center justify-center w-full h-full">
          {cards.map((card) => (
            <div
              key={card.id + card.position}
              className={`transition-all duration-700 ease-in-out rounded-xl sm:rounded-2xl md:rounded-3xl h-[280px] sm:h-[340px] md:h-[400px] lg:h-[450px] flex items-stretch \
                ${card.position === "center" ? "w-[85%] sm:w-[80%] md:w-[70%] lg:w-[50%] max-w-2xl" : "w-[65%] sm:w-[70%] md:w-[60%] lg:w-[40%] max-w-lg"} \
                ${positionStyles[card.position]}`}
              style={{
                boxShadow:
                  card.position === "center"
                    ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
                    : undefined,
              }}
            >
              <ServiceCard
                service={card}
                isActive={card.position === "center"}
                showFeatures={true}
                maxFeatures={4}
                className="h-full w-full flex-1 bg-transparent shadow-none"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute left-0 sm:left-1 md:left-2 lg:left-4 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/80 shadow-lg rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-300 z-30 border border-gray-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute right-0 sm:right-1 md:right-2 lg:right-4 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/80 shadow-lg rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-300 z-30 border border-gray-200"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-2 sm:mt-3 md:mt-4 lg:mt-6 space-x-1 sm:space-x-2">
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            disabled={isAnimating}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-purple-600 scale-110 sm:scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;
