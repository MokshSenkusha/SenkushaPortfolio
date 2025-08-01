import React from "react";

export function Button({
  children,
  size = "md",
  variant = "default",
  animated = false,
  className = "",
  ...props
}) {
  const sizeClasses = {
    sm: "py-2 px-5 text-base",
    md: "py-3 px-7 text-lg",
    lg: "py-4 px-10 text-xl",
  };

  const variantClasses = {
    default:
      "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:from-pink-500 hover:to-blue-600 text-white shadow-xl hover:shadow-2xl",
    outline:
      "bg-transparent border-2 border-blue-600 hover:bg-blue-50 text-blue-700",
  };

  const baseClasses =
    "rounded-full font-extrabold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400/40 inline-flex items-center gap-2 relative overflow-hidden";

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${animated ? "group" : ""} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {children}
        {animated && (
          <svg
            className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-125"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        )}
      </span>
      {/* Ripple/Glow effect */}
      {animated && (
        <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 blur-sm z-0" />
      )}
    </button>
  );
}
