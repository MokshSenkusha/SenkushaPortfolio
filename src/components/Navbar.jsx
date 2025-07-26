import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react"; // ADDED Menu & X
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import demoImage from "../assets/demo.jpg";
import { products, services } from "../data";
import Dropdown from "./DropDown";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // Entrance animation
  const [menuOpen, setMenuOpen] = useState(false); // NEW STATE for mobile

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

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const servicesWithDemoImage = services.map((service) => ({
    ...service,
    image: demoImage,
  }));

  return (
    <nav
      className={`bg-white shadow-md px-8 py-4 flex justify-between items-center relative z-50 transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
      `}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src={logo} alt="Senkusha Logo" className="h-10 w-auto cursor-pointer" />
        </Link>
      </div>

      {/* Hamburger Icon (Mobile only) */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 text-base font-medium text-gray-800">
        <li>
          <Link to="/" className="hover:text-purple-600">
            Home
          </Link>
        </li>

        <li className="relative dropdown-parent">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown("product");
            }}
            className="flex items-center gap-1 hover:text-purple-600 transition-all duration-200"
          >
            Products <ChevronDown size={16} />
          </button>
          {showDropdown === "product" && (
            <Dropdown
              type="product"
              items={products}
              onClose={() => setShowDropdown(null)}
            />
          )}
        </li>

        <li className="relative dropdown-parent">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown("service");
            }}
            className="flex items-center gap-1 hover:text-purple-600 transition-all duration-200"
          >
            Services <ChevronDown size={16} />
          </button>
          {showDropdown === "service" && (
            <Dropdown
              type="service"
              items={servicesWithDemoImage}
              onClose={() => setShowDropdown(null)}
            />
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md px-6 py-4 flex flex-col space-y-4 md:hidden text-base font-medium text-gray-800">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-purple-600">
            Home
          </Link>

          <button
            onClick={() => toggleDropdown("product")}
            className="flex items-center gap-1 hover:text-purple-600"
          >
            Products <ChevronDown size={16} />
          </button>
          {showDropdown === "product" && (
            <Dropdown
              type="product"
              items={products}
              onClose={() => setShowDropdown(null)}
            />
          )}

          <button
            onClick={() => toggleDropdown("service")}
            className="flex items-center gap-1 hover:text-purple-600"
          >
            Services <ChevronDown size={16} />
          </button>
          {showDropdown === "service" && (
            <Dropdown
              type="service"
              items={servicesWithDemoImage}
              onClose={() => setShowDropdown(null)}
            />
          )}

          <Link to="/testimonials" onClick={() => setMenuOpen(false)} className="hover:text-purple-600">
            Testimonials
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-purple-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
