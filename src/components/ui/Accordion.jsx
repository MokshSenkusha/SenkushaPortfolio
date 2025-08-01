import React, { useState, useRef, useEffect } from "react";

export const Accordion = ({ children }) => {
  return <div className="space-y-4">{children}</div>;
};

export const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-gray-900 hover:text-purple-600"
      >
        {title}
        <span
          className={`ml-2 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="px-6 overflow-hidden transition-max-height duration-300 ease-in-out"
      >
        <div className="pb-4 text-gray-600">{children}</div>
      </div>
    </div>
  );
};
