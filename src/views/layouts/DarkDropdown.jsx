import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; 
import "./DarkDropdown.css";

const DarkDropdown = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option === "Select" ? "" : option);
    setOpen(false);
  };

  return (
    <div className="dark-dropdown-container" ref={dropdownRef}>
      <div
        className={`dark-dropdown-header ${open ? "open" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{value || "Select"}</span>
        {open ? (
          <ChevronUp size={16} className="dark-dropdown-icon" />
        ) : (
          <ChevronDown size={16} className="dark-dropdown-icon" />
        )}
      </div>

      {open && (
        <div className="dark-dropdown-list">
          {options.map((option, idx) => (
            <div
              key={idx}
              className={`dark-dropdown-item ${
                option === value ? "selected" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DarkDropdown;
