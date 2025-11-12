import React, { createContext, useContext, useRef } from "react";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const containerRef = useRef(null);

  const registerContainer = (ref) => {
    containerRef.current = ref;
  };

  const handleGlobalSearch = (query) => {
    if (!containerRef.current || !query) return;

    const searchText = query.toLowerCase();
    const elements = containerRef.current.querySelectorAll("*");

    for (let el of elements) {
      const text = el.textContent?.toLowerCase() || "";
      if (text.includes(searchText)) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("highlighted");
        setTimeout(() => el.classList.remove("highlighted"), 1500);
        break;
      }
    }
  };

  return (
    <SearchContext.Provider value={{ registerContainer, handleGlobalSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
