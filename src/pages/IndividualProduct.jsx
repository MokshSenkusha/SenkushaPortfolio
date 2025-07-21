import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import phoneMockup from "../assets/phone.png";
import step1 from "../assets/1.png";
import step2 from "../assets/2.png";
import step3 from "../assets/3.png";
import Nutrigen from "../assets/Nutrigen.png";

const faqs = [
  {
    q: "What is NutriGen?",
    a: "NutriGen is a smart food scanning app that helps track nutrition by scanning QR codes.",
  },
  {
    q: "Is NutriGen free?",
    a: "Yes, NutriGen is free to use for individual users. API integrations may have usage limits.",
  },
  {
    q: "What data sources does it use?",
    a: "It uses OpenFoodFacts and AI-powered recognition to fetch and analyze food data.",
  },
];

const NutriGenProductPage = () => {
  const [showChat, setShowChat] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  return (
    <div className="font-sans text-gray-800 bg-white relative overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-white via-[#f0f9ff] to-[#e0f2fe] w-full py-20 px-4 sm:px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between relative overflow-hidden">
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 z-10">
          <div className="flex justify-center lg:justify-start">
            <img
              src={Nutrigen}
              alt="NutriGen Logo"
              className="w-20 h-20 object-contain mb-4"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-snug">
            Your personal <br /> nutrition guide
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-md mx-auto lg:mx-0">
            Get your personalized program and start your journey to a healthier,
            happier you.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 mt-6 flex-wrap">
            <a
              href="#"
              className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition text-sm sm:text-base"
            >
              <span role="img" aria-label="apple">
                🍏
              </span>{" "}
              iOS Download
            </a>
            <a
              href="#"
              className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-700 transition text-sm sm:text-base"
            >
              <span role="img" aria-label="android">
                🤖
              </span>{" "}
              Android Download
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center z-10 mb-12 lg:mb-0">
          <img
            src={phoneMockup}
            alt="NutriGen App"
            className="w-52 sm:w-60 md:w-72 lg:w-80 object-contain"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#e0f2fe] to-transparent z-0 rounded-t-[50%]" />
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-white text-center py-20 px-4 sm:px-6 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12">
          A revolutionary way to log your meals with a single photo
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-10 mb-12 items-center">
          {[
            { src: step1, title: "Select a meal" },
            { src: step2, title: "Take a photo" },
            { src: step3, title: "Get the nutrition facts" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center space-y-4">
              <div className="bg-[#e6f7f4] rounded-3xl overflow-hidden w-48 sm:w-60 h-48 sm:h-60 shadow-md">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[#0f9d84] font-medium text-sm sm:text-base">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 text-gray-700">
          From a simple photo of your plate, the NutriGen app is able to
          recognize the food items, estimate the quantity, and provide
          nutritional information within seconds.
        </p>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
          Your Smart Food Scanner – Powered by Data
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "📷 QR Code Scanning",
              desc: "Instantly fetch food data by scanning QR codes.",
            },
            {
              title: "🕒 Calorie & Nutrient Info",
              desc: "See calories, macros, vitamins, and ingredients.",
            },
            {
              title: "📊 Personalized Dashboard",
              desc: "Track your intake with charts and smart goals.",
            },
            {
              title: "🔀 API Integration",
              desc: "Built on OpenFoodFacts & AI-powered recognition.",
            },
            {
              title: "🌐 Works Anywhere",
              desc: "Supports global food standards and mobile use.",
            },
            {
              title: "🔐 Secure & Private",
              desc: "Data is protected with end-to-end encryption.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {f.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* USE CASE SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-blue-50">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
          Why NutriGen?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "👤 For Individuals",
              text: "Ideal for fitness tracking, weight management, and health-conscious eating.",
            },
            {
              title: "🏢 For Companies",
              text: "Perfect for employee wellness programs and smart cafeterias.",
            },
            {
              title: "💻 For Developers",
              text: "Use our API to build nutrition-based tools and apps easily.",
            },
          ].map((use, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {use.title}
              </h3>
              <p className="text-sm sm:text-base">{use.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
          Tech Behind NutriGen
        </h2>
        <ul className="list-disc max-w-3xl mx-auto space-y-3 text-sm sm:text-base pl-6">
          <li>Real-time API integration with OpenFoodFacts.</li>
          <li>AI-based food recognition and QR processing.</li>
          <li>Secure cloud data handling and storage.</li>
          <li>Nutrition analytics and dietary trend tracking.</li>
        </ul>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-green-50">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Vidhi Shah",
              text: "NutriGen makes calorie tracking effortless! I just scan and go.",
            },
            {
              name: "Vrusha Morakhiya",
              text: "This app helped me manage my diet during my fitness journey. Love the dashboard!",
            },
          ].map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <p className="italic text-gray-700 text-sm sm:text-base">
                “{t.text}”
              </p>
              <p className="mt-4 font-semibold text-right text-sm sm:text-base">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 text-center bg-gradient-to-r from-green-200 to-blue-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to Transform Your Nutrition?
        </h2>
        <p className="mb-6 text-sm sm:text-base">
          Start using NutriGen or contact us for integration into your platform.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-green-700 text-white px-6 py-2 rounded-xl hover:bg-green-800 text-sm sm:text-base">
            Start Using NutriGen
          </button>
          <button className="border border-green-700 text-green-700 px-6 py-2 rounded-xl hover:bg-green-100 text-sm sm:text-base">
            Contact Us
          </button>
        </div>
      </section>

      {/* FLOATING FAQ CHAT */}
      <div className="fixed bottom-6 right-6 z-50">
        {showChat ? (
          <div className="w-80 bg-white rounded-xl shadow-xl p-4 border border-gray-300 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={() => setShowChat(false)}
            >
              <X size={20} />
            </button>
            <h3 className="text-lg font-semibold mb-2">🤖 Ask NutriBot</h3>
            <ul className="space-y-2">
              {faqs.map((faq, i) => (
                <li key={i}>
                  <button
                    onClick={() => setSelectedAnswer(i)}
                    className="text-left w-full text-sm text-blue-600 hover:underline"
                  >
                    {faq.q}
                  </button>
                  {selectedAnswer === i && (
                    <p className="mt-1 text-gray-700 text-sm">{faq.a}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <button
            onClick={() => setShowChat(true)}
            className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700"
          >
            <MessageSquare size={24} />
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default NutriGenProductPage;
