import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaBoxes, FaChartLine, FaRocket } from "react-icons/fa";
// Import images
import home1 from "../assets/home_1.jpg";
import home2 from "../assets/home_2.jpg";
import home3 from "../assets/home_3.jpg";
import home4 from "../assets/home_4.jpg";

const timelineData = [
  {
    title: "Not a Training. Not a Course. Not a Bootcamp.",
    subtitle:
      "Senkusha is where builders are born. We simulate the environment of a real tech company to turn learners into creators who are ready to take on top jobs or start their own ventures.",
    tooltip: "We bridge the gap between theory and real-world tech execution.",
    icon: <FaUserTie className="text-2xl text-purple-700" />,
    image: home1,
  },
  {
    title: "Our Offerings",
    points: [
      "Builder's Simulation Program - Real-world projects under mentorship.",
      "Product Development - Full-cycle product engineering for startups.",
      "AI & Non-AI Solutions - Build intelligent, scalable platforms.",
    ],
    cta: "Explore Our Services",
    icon: <FaBoxes className="text-2xl text-purple-700" />,
    image: home2,
  },
  {
    title: "Why Senkusha Works",
    stats: [
      "3 Years of Proven Success",
      "50+ Students Onboarded",
      "100% 5-Star Ratings",
      "Partnered with DJ Sanghvi & Bhagubhai Polytechnic",
    ],
    icon: <FaChartLine className="text-2xl text-purple-700" />,
    image: home3,
  },
  {
    title: "What Makes Us Different?",
    bullets: [
      "We give real tech roles — not training videos.",
      "We simulate real companies — not bootcamps.",
      "We build working products — not assignments.",
      "Run by tech experts with 10+ years experience.",
      "Real roles: Dev, QA, UI, DevOps, PM.",
      "Full agile rituals and SDLC exposure.",
    ],
    icon: <FaRocket className="text-2xl text-purple-700" />,
    image: home4,
  },
];

const TimelineSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-300"></div>

        {timelineData.map((item, idx) => {
          const isLeft = idx % 2 !== 0; // First card right, second left, etc.

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`mb-24 flex flex-col md:flex-row items-center justify-between ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content Card - Original structure maintained */}
              <div className="w-full md:w-[45%] px-4">
                <div className="relative z-10 bg-white border border-gray-200 shadow-md rounded-xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-100 flex items-center justify-center rounded-full">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-purple-700">
                      {item.title}
                    </h3>
                  </div>

                  {item.subtitle && (
                    <p className="text-sm text-gray-600 mb-3">
                      {item.subtitle}
                    </p>
                  )}

                  {item.tooltip && (
                    <p className="text-xs italic text-gray-500 mb-3">
                      {item.tooltip}
                    </p>
                  )}

                  {item.points && (
                    <ul className="list-disc text-sm text-gray-700 mt-3 ml-4 space-y-1">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {item.stats && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      {item.stats.map((stat, i) => (
                        <div
                          key={i}
                          className="bg-gray-50 text-center text-sm font-medium p-3 rounded-md shadow-inner"
                        >
                          {stat}
                        </div>
                      ))}
                    </div>
                  )}

                  {item.bullets && (
                    <ul className="list-disc text-sm text-gray-700 mt-3 ml-4 space-y-1">
                      {item.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  {item.cta && (
                    <button className="mt-4 bg-purple-600 text-white px-4 py-2 text-sm rounded hover:bg-purple-700">
                      {item.cta}
                    </button>
                  )}
                </div>
              </div>

              {/* Timeline dot with consistent spacing */}
              <div className="hidden md:flex items-center justify-center w-10 h-10 bg-purple-600 text-white font-bold rounded-full z-20 mx-2">
                {idx + 1}
              </div>

              {/* Image on opposite side */}
              <div className="w-full md:w-[45%] px-4 mt-8 md:mt-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative overflow-hidden rounded-xl shadow-lg aspect-video"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TimelineSection;
