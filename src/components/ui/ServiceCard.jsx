import React from "react";
import { Link } from "react-router-dom";
import { Clock, DollarSign, ArrowRight } from "lucide-react";
import demoImage from "../../assets/demo.jpg";

const ServiceCard = ({
  service,
  isActive = false,
  showImage = true,
  showDescription = true,
  showPrice = true,
  showCategory = true,
  showFeatures = false,
  maxFeatures = 3,
  className = "",
}) => {
  return (
    <Link
      to={`/service/${service.id}`}
      className={`
        bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform
        ${
          isActive
            ? "scale-110 shadow-2xl border-2 border-purple-500"
            : "scale-90 opacity-70 hover:scale-95 hover:opacity-90"
        }
        cursor-pointer
        ${className}
      `}
    >
      {showImage && (
        <div className="h-40 sm:h-48 md:h-52 bg-gray-100 flex items-center justify-center overflow-hidden relative">
          <img
            src={demoImage}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      )}

      <div className="p-4 sm:p-5 md:p-6">
        {/* Always visible on all screen sizes */}
        <div className="flex items-start justify-between mb-2 sm:mb-3">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
            {service.name}
          </h3>
          {showCategory && (
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium ml-2 flex-shrink-0">
              {service.category}
            </span>
          )}
        </div>

        {/* Always visible on all screen sizes */}
        {showDescription && (
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-2 sm:line-clamp-3">
            {service.description}
          </p>
        )}

        {/* Price and Duration on same level - visible on tablet and larger screens */}
        <div className="hidden sm:flex sm:items-center sm:justify-between sm:mb-3">
          {showPrice && service.price && (
            <div className="flex items-center text-gray-700">
              <DollarSign className="w-4 h-4 mr-1 text-purple-600" />
              <span className="text-sm">{service.price}</span>
            </div>
          )}

          {service.duration && (
            <div className="flex items-center text-gray-700">
              <Clock className="w-4 h-4 mr-1 text-purple-600" />
              <span className="text-sm">{service.duration}</span>
            </div>
          )}
        </div>

        {/* Features - visible on laptop/desktop screens */}
        {showFeatures && service.features && (
          <div className="hidden md:block mb-2 md:mb-4 mt-3">
            <h4 className="text-sm font-medium text-gray-900 mb-1 md:mb-2">
              Key Features:
            </h4>
            <ul className="space-y-1">
              {service.features.slice(0, maxFeatures).map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <svg
                    className="w-3 h-3 text-green-500 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600 text-xs sm:text-sm">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Learn More indicator - visible on all screens */}
        <div className="flex justify-end mt-2 sm:mt-3">
          <div className="flex items-center text-purple-600 text-xs sm:text-sm font-medium">
            Learn More <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
