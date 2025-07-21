import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dropdown = ({ label, items, onClose }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 hover:text-purple-600 focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {label} <ChevronDown size={16} />
      </button>

      {open && (
        <ul className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
              <Link
                to={item.path}
                onClick={onClose}
                className="flex items-center gap-2 w-full"
              >
                {item.icon && (
                  <img src={item.icon} alt={item.label} className="w-5 h-5 object-contain" />
                )}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
