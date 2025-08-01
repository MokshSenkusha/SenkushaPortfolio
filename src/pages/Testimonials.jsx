import React, { useState } from "react";
import { Star, Quote, Code } from "lucide-react";
import testimonials from "../Testimonials";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { mentors } from "../data";
import Pagination from "../components/Pagination";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 4;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const startIndex = (currentPage - 1) * testimonialsPerPage;
  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + testimonialsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const TestimonialCard = ({ testimonial }) => (
    <motion.div
      initial={{ rotateY: 180, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-[#fcfbf5] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform border border-gray-100 overflow-hidden flex flex-col md:flex-row p-6 gap-6"
    >
      <div className="flex flex-col items-center justify-center md:w-[30%] w-full py-4">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-200 mb-4 bg-purple-50">
          <img
            src={require("../assets/user.jpg")}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-bold text-gray-900 text-sm md:text-lg text-center">
          {testimonial.name} ~ {testimonial.year}
        </h3>
        <p className="text-xs md:text-sm text-gray-600 text-center mb-2">
          {testimonial.role}
        </p>
        <div className="flex items-center justify-center space-x-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-3 mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="w-4 h-4 text-purple-600" />
            <span className="font-semibold text-purple-800 text-sm md:text-base">
              Worked on {testimonial.project}
            </span>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-start space-x-2 mb-3">
            <Quote className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
            <p className="text-gray-700 text-sm md:text-base leading-relaxed italic">
              "{testimonial.feedback}"
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-xs md:text-sm font-semibold text-gray-700 mb-2">
            Skills Developed:
          </h4>
          <div className="flex flex-wrap gap-2">
            {testimonial.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 md:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const MentorImageCard = ({ mentor, idx }) => {
    const showBelow = idx === 0 || idx === 1;
    const sizeClass =
      idx === 4 ? "md:w-52 md:h-52 w-32 h-32" : "md:w-60 md:h-60 w-36 h-36";
    const extraTransform = idx === 3 ? "translate-y-[-16px]" : "";

    return (
      <div
        className={`relative group flex items-center justify-center -m-14 md:-m-20 ${extraTransform}`}
      >
        {showBelow ? (
          <div className="absolute top-full left-1/2 translate-y-2 -translate-x-1/2 z-20 hidden group-hover:flex flex-col items-center">
            <svg
              width="32"
              height="16"
              viewBox="0 0 32 16"
              className="-mb-1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 0L0 16H32L16 0Z" fill="#fcfbf5" stroke="#fdba74" />
            </svg>
            <div className="bg-[#fcfbf5] rounded-xl px-6 py-3 min-w-[200px] text-center">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-orange-600 mb-1">
                {mentor.name}
              </h3>
              {mentor.post && (
                <p className="text-base text-orange-400 mb-1">{mentor.post}</p>
              )}
              <p className="text-sm text-orange-400">{mentor.tagline}</p>
            </div>
          </div>
        ) : (
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 z-20 hidden group-hover:flex flex-col items-center">
            <div className="bg-[#fcfbf5] rounded-xl px-6 py-3 min-w-[200px] text-center">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-orange-600 mb-1">
                {mentor.name}
              </h3>
              {mentor.post && (
                <p className="text-base text-orange-400 mb-1">{mentor.post}</p>
              )}
              <p className="text-sm text-orange-400">{mentor.tagline}</p>
            </div>
            <svg
              width="32"
              height="16"
              viewBox="0 0 32 16"
              className="-mt-1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 16L0 0H32L16 16Z" fill="#fff" stroke="#fdba74" />
            </svg>
          </div>
        )}
        <div className={`rounded-full overflow-hidden ${sizeClass}`}>
          <img
            src={mentor.image}
            alt={mentor.name}
            className="w-full h-full object-cover object-top rounded-full"
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Intern Success Stories
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Discover how our interns have grown and contributed to innovative
              projects at Senkusha
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  50+
                </div>
                <div className="text-gray-600">Interns Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  10+
                </div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  2+
                </div>
                <div className="text-gray-600">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5.0</div>
                <div className="text-gray-600">Pooled Rating</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl 2xl:max-w-full mx-auto px-2 py-12 xl:px-4 2xl:px-[72px]">
          <div className="text-center mb-8 xl:mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Intern Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the experiences of our talented interns who have worked on
              various projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 3xl:grid-cols-3 gap-8 xl:gap-4">
            {currentTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />

          {/* ✅ Responsive About Us with Mentor Image on Right for lg+ */}
          <div className="w-full mt-20 mb-12">
            <div className="flex flex-col lg:flex-row-reverse bg-[#fcfbf5] rounded-2xl shadow-lg overflow-hidden">
              {/* Mentor Image Grid (Right on lg) */}
              <div className="w-full lg:w-1/2 bg-[#fcfbf5] flex justify-center items-center p-8">
                <div className="grid grid-cols-3 grid-rows-3 gap-0 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[500px] md:h-[500px]">
                  <div className="row-start-1 col-start-1 flex items-center justify-center">
                    <MentorImageCard mentor={mentors[0]} idx={0} />
                  </div>
                  <div className="row-start-1 col-start-3 flex items-center justify-center">
                    <MentorImageCard mentor={mentors[1]} idx={1} />
                  </div>
                  <div className="row-start-2 col-start-2 flex items-center justify-center">
                    <MentorImageCard mentor={mentors[4]} idx={4} />
                  </div>
                  <div className="row-start-3 col-start-1 flex items-center justify-center">
                    <MentorImageCard mentor={mentors[2]} idx={2} />
                  </div>
                  <div className="row-start-3 col-start-3 flex items-center justify-center">
                    <MentorImageCard mentor={mentors[3]} idx={3} />
                  </div>
                </div>
              </div>

              {/* About Us Content (Left on lg) */}
              <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center bg-[#fcfbf5] text-center">
                <span className="inline-block bg-yellow-300 text-gray-900 font-bold px-4 py-1 rounded mb-6 text-sm tracking-widest">
                  ABOUT US
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
                  We became mentors to help people
                </h2>
                <p className="text-lg text-gray-800 mb-6 font-serif italic">
                  "At Senkusha, we believe in investing deeply into a future
                  model of mentorship that reaches every learner with equal
                  intensity. A higher-quality system that takes care for all in
                  a more affordable, accessible fashion. Senkusha represents our
                  best thinking today, at the edge of the new frontier."
                </p>
                <p className="text-lg text-gray-800 mb-6 font-serif">
                  We became mentors to help people. Then we built Senkusha to
                  help us do it better.
                </p>
                <p className="text-lg text-gray-800 font-serif">
                  Our inspiration comes from the drive to make a difference, to
                  guide, and to empower the next generation of innovators and
                  leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
