import React from "react";
import { useSearch } from "./SearchContext"; 
import "./Header.css";
import avatar1 from "../assets/avatar2.png";

const Header = ({ sidebarWidth, user }) => {
  const { handleGlobalSearch } = useSearch();

  return (
    <header
      className="header"
      style={{
        marginLeft: sidebarWidth,
        width: `calc(100% - ${sidebarWidth}px)`,
      }}
    >
      <div className="header-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search anything..."
          onChange={(e) => handleGlobalSearch(e.target.value)}
        />

        <div className="profile">
          <img src={avatar1} alt="profile" className="profile-pic" />
          <span className="profile-name">{user.name}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
