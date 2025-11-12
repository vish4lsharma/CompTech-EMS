import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./DarkDropdown.css";

const EVENT_NAME = "dark-dropdown-open";

const DarkDropdown = ({ options, value, onChange, disabled }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const headerRef = useRef(null);

  // --- Setup global event handling ---
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(e.target) &&
        !dropdownRef.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    const handleOtherOpen = (e) => {
      if (e.detail !== dropdownRef.current) setOpen(false);
    };

    const handleKey = (e) => e.key === "Escape" && setOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener(EVENT_NAME, handleOtherOpen);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener(EVENT_NAME, handleOtherOpen);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  // --- Toggle dropdown ---
  const handleToggle = () => {
    if (disabled) return;
    const next = !open;
    if (next) {
      document.dispatchEvent(
        new CustomEvent(EVENT_NAME, { detail: dropdownRef.current })
      );
    }
    setOpen(next);
  };

  // --- Handle selection ---
  const handleSelect = (option) => {
    onChange(option === "Select" ? "" : option);
    setOpen(false);
  };

  // --- Dropdown list ---
  const dropdownList = (
    <div ref={dropdownRef} className="dark-dropdown-list open">
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
  );

  return (
    <div
      className={`dark-dropdown-container ${disabled ? "disabled" : ""}`}
    >
      <div
        ref={headerRef}
        className={`dark-dropdown-header ${open ? "open" : ""}`}
        onClick={handleToggle}
      >
        <span>{value || "Select"}</span>
        {open ? (
          <ChevronUp size={16} className="dark-dropdown-icon" />
        ) : (
          <ChevronDown size={16} className="dark-dropdown-icon" />
        )}
      </div>

      {open && dropdownList}
    </div>
  );
};

export default DarkDropdown;
