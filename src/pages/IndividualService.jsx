import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { services } from "../data";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import demoImage from "../assets/demo.jpg";
import { Button } from "../components/ui/Button";

export default function IndividualService() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowAll(false); // Reset showAll when service changes

    // Add resize listener to update windowWidth state
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [id]);

  // Find the service by ID
  const service = services.find((s) => s.id === parseInt(id));

  // Determine how many cards to show based on screen size
  const getInitialCardCount = () => {
    if (windowWidth >= 1024) {
      // Laptop and larger - show all
      return services.length;
    } else if (windowWidth >= 768) {
      // Tablet - show 4
      return 4;
    } else {
      // Mobile - show 3
      return 3;
    }
  };

  // Filter related services (excluding current service)
  const relatedServices = services.filter((s) => s.id !== service?.id);

  // Get services to display based on showAll state and screen size
  const displayedServices = showAll
    ? relatedServices
    : relatedServices.slice(0, getInitialCardCount());

  // If service not found, show error
  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            The service you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-green-700 transition-colors text-sm sm:text-base"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Service Details */}
      <section className="py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            {/* Service Image */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center h-64 sm:h-96 mx-auto w-full">
              <img
                src={service.image || demoImage}
                alt={service.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.src = demoImage;
                }}
              />
            </div>

            {/* Service Information */}
            <div className="space-y-4 sm:space-y-8">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {service.name}
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
                  {service.description}
                </p>
                <div className="flex items-center space-x-4 mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">
                    {service.price}
                  </span>
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium text-center">
                    {service.category}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm sm:text-base text-gray-600">
                    <strong>Duration:</strong> {service.duration}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  What&apos;s Included
                </h2>
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-2 sm:space-x-3"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-sm sm:text-base text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action */}
              <div className="space-y-3 sm:space-y-4">
                <button
                  className="w-full border border-green-600 text-green-600 py-3 sm:py-4 px-4 sm:px-6 rounded-md hover:bg-green-50 transition-colors font-medium text-sm sm:text-base"
                  onClick={() => navigate("/contact")}
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mt-12 sm:mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-green-600">
                    1
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                  Discovery
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">
                  We understand your requirements and goals
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-green-600">
                    2
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                  Planning
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">
                  We create a detailed project plan and timeline
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-green-600">
                    3
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                  Execution
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">
                  We deliver high-quality results on time
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-green-600">
                    4
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                  Support
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">
                  We provide ongoing support and maintenance
                </p>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <div className="mt-12 sm:mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
              Other Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
              {displayedServices.map((relatedService) => (
                <div
                  key={relatedService.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-36 sm:h-40 md:h-48 w-full overflow-hidden">
                    <img
                      src={relatedService.image || demoImage}
                      alt={relatedService.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.target.src = demoImage;
                      }}
                    />
                  </div>
                  <div className="p-3 sm:p-4 md:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                      {relatedService.name}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">
                      {relatedService.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-green-600 font-semibold">
                        {relatedService.price}
                      </span>
                      <Link
                        to={`/service/${relatedService.id}`}
                        className="bg-green-600 text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-md hover:bg-green-700 transition-colors text-xs sm:text-sm md:text-base"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show View All / Show Less button only on mobile and tablet */}
            {windowWidth < 1024 &&
              relatedServices.length > getInitialCardCount() && (
                <div className="mt-4 sm:mt-6 text-center">
                  <p
                    variant="outline"
                    size={windowWidth < 768 ? "sm" : "md"}
                    className="text-blue-600  text-xs sm:text-sm"
                    onClick={() => setShowAll(!showAll)}
                  >
                    {showAll ? "Show Less" : "Show More"}
                  </p>
                </div>
              )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
