import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showChatBox, setShowChatBox] = useState(false);
  const [faqHistory, setFaqHistory] = useState([]);
  const [customQuestion, setCustomQuestion] = useState("");

  const answers = {
    "What kind of data solutions do you offer?":
      "We offer end-to-end solutions including data integration, ETL pipelines, analytics dashboards, and cloud data warehousing.",
    "Can you help automate our data workflows?":
      "Absolutely! We specialize in automating data ingestion, transformation, and reporting workflows using Python, Airflow, and other tools.",
    "Do you provide custom dashboards or reporting tools?":
      "Yes, we create custom dashboards using tools like Power BI, Tableau, and custom web-based interfaces.",
    "How do you ensure data security and compliance?":
      "We follow industry best practices including encryption, access control, audit trails, and compliance with GDPR and other standards.",
    "Can you integrate with our existing systems?":
      "Yes! We integrate with ERPs, CRMs, APIs, databases, and cloud platforms like AWS, Azure, and GCP.",
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleQuestionClick = (question) => {
    setFaqHistory((prev) => [...prev, { question, answer: answers[question] }]);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (customQuestion.trim()) {
      setFaqHistory((prev) => [
        ...prev,
        {
          question: customQuestion,
          answer:
            "Thanks for your question! Our team will get back to you shortly.",
        },
      ]);
      setCustomQuestion("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative flex flex-col">
      <Navbar />

      <section className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              "Have questions? We're just a message away!"
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "email", "subject"].map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {field === "name"
                        ? "Full Name"
                        : field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder={`Enter your ${field}`}
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {[
                {
                  title: "Get in Touch",
                  items: [
                    {
                      iconPath: "M3 5h12M9 3v2m0 4v8",
                      label: "Phone",
                      value: "+1 (555) 123-4567",
                    },
                    {
                      iconPath: "M3 8l7.5 5L18 8",
                      label: "Email",
                      value: "info@senkusha.com",
                    },
                    {
                      iconPath: "M17.657 16.657L13 12.828l-4.657 3.829",
                      label: "Address",
                      value:
                        "123 Business Street\nTech City, TC 12345\nUnited States",
                    },
                  ],
                },
                {
                  title: "Business Hours",
                  items: [
                    { label: "Monday - Friday", value: "9:00 AM - 6:00 PM" },
                    { label: "Saturday", value: "10:00 AM - 4:00 PM" },
                    { label: "Sunday", value: "Closed" },
                  ],
                },
              ].map((section, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md p-6 sm:p-8"
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-5">
                    {section.items.map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex ${
                          item.iconPath ? "items-start" : "justify-between"
                        } space-x-4`}
                      >
                        {item.iconPath && (
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg
                              className="w-5 h-5 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={item.iconPath}
                              />
                            </svg>
                          </div>
                        )}
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {item.label}
                          </h3>
                          <p className="text-gray-600 whitespace-pre-line">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Chat Button */}
      <button
        onClick={() => setShowChatBox((prev) => !prev)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition duration-300 z-50"
        aria-label="Chat with Us"
      >
        {showChatBox ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}
      </button>

      {/* Chat Box */}
      {showChatBox && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-[95%] sm:w-80 max-h-[500px] bg-white shadow-2xl border border-gray-200 rounded-xl p-4 z-50 overflow-y-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            Chat with Us
          </h3>
          <p className="text-sm text-gray-600 mb-3">Quick Questions:</p>
          <div className="space-y-2 mb-4">
            {Object.keys(answers).map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleQuestionClick(q)}
                className="block w-full text-left px-3 py-2 border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-400 transition"
              >
                {q}
              </button>
            ))}
          </div>
          <form onSubmit={handleCustomSubmit} className="space-y-2 mb-4">
            <input
              type="text"
              placeholder="Type your own question..."
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Ask
            </button>
          </form>
          {faqHistory.length > 0 && (
            <div className="border-t pt-2">
              {faqHistory.map((item, idx) => (
                <div key={idx} className="mb-3">
                  <p className="font-semibold text-blue-700">
                    Q: {item.question}
                  </p>
                  <p className="text-gray-700 text-sm mt-1">A: {item.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
