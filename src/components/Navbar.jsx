import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { products, services } from "../data";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (type) => {
    setShowDropdown((prev) => (prev === type ? null : type));
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest(".dropdown-parent")) {
      setShowDropdown(null);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link to="/">
          <img
            src={logo}
            alt="Senkusha Logo"
            className="h-10 w-auto cursor-pointer"
          />
        </Link>
      </div>

      {/* Hamburger for mobile/tablet */}
      <button
        className="lg:hidden p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Links - Desktop */}
      <ul className="hidden lg:flex space-x-6 xl:space-x-8 text-base font-medium text-gray-800">
        <li>
          <Link to="/" className="hover:text-purple-600">
            Home
          </Link>
        </li>
        {/* Products Dropdown */}
        <li className="relative dropdown-parent">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown("products");
            }}
            className="flex items-center gap-1 hover:text-purple-600"
          >
            Products <ChevronDown size={16} />
          </button>
          {showDropdown === "products" && (
            <ul className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 px-4 z-50">
              {products.map((product, idx) => (
                <li
                  key={idx}
                  className="py-1 hover:text-purple-600 flex items-center gap-2"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-5 h-5"
                  />
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        {/* Services Dropdown */}
        <li className="relative dropdown-parent">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown("services");
            }}
            className="flex items-center gap-1 hover:text-purple-600"
          >
            Services <ChevronDown size={16} />
          </button>
          {showDropdown === "services" && (
            <ul className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 px-4 z-50">
              {services.map((service, idx) => (
                <li
                  key={idx}
                  className="py-1 hover:text-purple-600 flex items-center gap-2"
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-5 h-5 object-cover rounded"
                  />
                  <Link to={`/service/${service.id}`}>{service.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <Link to="/testimonials" className="hover:text-purple-600">
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-purple-600">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>
        <ul className="flex flex-col mt-20 space-y-4 px-6 text-base font-medium text-gray-800">
          <li>
            <Link
              to="/"
              className="hover:text-purple-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <div className="dropdown-parent">
              <button
                onClick={() => toggleDropdown("products")}
                className="flex items-center gap-1 hover:text-purple-600 w-full text-left"
              >
                Products <ChevronDown size={16} />
              </button>
              {showDropdown === "products" && (
                <ul className="mt-2 bg-white shadow rounded-md py-2 px-4">
                  {products.map((product, idx) => (
                    <li
                      key={idx}
                      className="py-1 hover:text-purple-600 flex items-center gap-2"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-5 h-5"
                      />
                      <Link
                        to={`/product/${product.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown-parent">
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center gap-1 hover:text-purple-600 w-full text-left"
              >
                Services <ChevronDown size={16} />
              </button>
              {showDropdown === "services" && (
                <ul className="mt-2 bg-white shadow rounded-md py-2 px-4">
                  {services.map((service, idx) => (
                    <li
                      key={idx}
                      className="py-1 hover:text-purple-600 flex items-center gap-2"
                    >
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-5 h-5 object-cover rounded"
                      />
                      <Link
                        to={`/service/${service.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
          <li>
            <Link
              to="/testimonials"
              className="hover:text-purple-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-purple-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
