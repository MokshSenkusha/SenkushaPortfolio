import React from "react";
import PillButton from "./ui/PillButton";

export default function HeroHeader() {
  return (
    <section
      className="relative w-full max-w-full overflow-x-hidden py-16 sm:py-20 md:py-24 overflow-hidden flex items-center justify-center min-h-[50vh] sm:min-h-[60vh]"
      style={{
        backgroundImage: "url('/src/assets/herobackground.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for purple-blue gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to right, rgba(124,58,237,0.85), rgba(67,56,202,0.85))",
        }}
      />
      {/* Geometric bright shapes */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="180" cy="120" r="80" fill="#fff" opacity="0.08" />
        <rect x="0" y="0" width="300" height="180" fill="#fff" opacity="0.06" />
        <circle cx="80%" cy="80" r="100" fill="#fff" opacity="0.07" />
        <rect
          x="70%"
          y="0"
          width="200"
          height="200"
          fill="#fff"
          opacity="0.05"
        />
        <rect
          x="60%"
          y="60%"
          width="120"
          height="120"
          fill="#fff"
          opacity="0.04"
        />
        <circle cx="90%" cy="90%" r="90" fill="#fff" opacity="0.06" />
        <rect
          x="10%"
          y="70%"
          width="120"
          height="120"
          fill="#fff"
          opacity="0.04"
        />
        <circle cx="50%" cy="100%" r="120" fill="#fff" opacity="0.07" />
      </svg>

      <div className="relative z-10 w-full mx-auto px-2 sm:px-6 md:px-0 text-center flex flex-col items-center">
        <h1
          className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white mb-4 sm:mb-6 tracking-wide leading-snug sm:leading-relaxed drop-shadow-lg animate-slide-up break-words"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          Not Just an Internship. <br />
          <span className="text-purple-200">A Builder's Launchpad.</span>
        </h1>
        <p
          className="text-base sm:text-xl md:text-lg font-medium text-white/95 mb-6 sm:mb-8 animate-fade-in leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          Become a product creator, not just a participant. For tech jobs or
          your own startup — we get you ready for both.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
          <PillButton
            title="Start your journey with our mentor-led product building experience or collaborate with us as a college or company."
            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-xl yellow-overlay"
            style={{
              background: "#ffffff",
              borderColor: "#fbbf24",
              color: "#1f2937",
              boxShadow: "0 4px 20px 0 rgba(251, 191, 36, 0.2)",
            }}
          >
            Join the Next Batch
          </PillButton>

          <PillButton
            title="Start your journey with our mentor-led product building experience or collaborate with us as a college or company."
            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-xl yellow-overlay"
            style={{
              background: "#ffffff",
              borderColor: "#fbbf24",
              color: "#1f2937",
              boxShadow: "0 4px 20px 0 rgba(251, 191, 36, 0.2)",
            }}
          >
            Partner with Us
          </PillButton>
        </div>
      </div>
    </section>
  );
}
