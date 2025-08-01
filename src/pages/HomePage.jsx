import React from "react";
import { Link } from "react-router-dom";
import { products, services } from "../data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesCarausel from "../components/ServicesCarausel";
import ProductCarausel from "../components/ProductCarausel";
import ProductsGrid from "../components/ui/ProductsGrid";
import HeroHeader from "../components/HeroHeader";
import TimelineSection from "../components/TimeLine";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroHeader />
      <TimelineSection />

      {/* Products Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductsGrid
            products={products}
            title="All Products"
            subtitle="Explore our complete range of innovative solutions designed to transform your business"
            showFeatures={true}
            maxFeatures={2}
          />
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Services
          </h2>
          <ServicesCarausel services={services} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
