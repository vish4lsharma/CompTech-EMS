import React from "react";
import "./Sidebar.css";
import logo from "../assets/logo.png";
import sidebarImage from "../assets/Sidebar.png";
import {
  Home,
  Calendar,
  ClipboardCheck,
  Bell,
  LogOut,
  Settings,
  HelpCircle,
} from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SidebarJudge = ({ open, setOpen }) => {
  return (
    <>
      <nav className={`sidebar ${open ? "open" : "collapsed"}`}>
        {/* --- Section 1: Logo --- */}
        <div className="sidebar-top">
          <div className="logo-container">
            <img src={logo} alt="logo" className="sidebar-logo" />
            {open && <span className="sidebar-title">CompTech</span>}
          </div>

          {/* Toggle */}
          <button
            className="sidebar-toggle"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>
        </div>

        {/* --- Section 2: Main Navigation --- */}
        <ul className="sidebar-menu">
          <li className="menu-item">
            <span className="icon">
              <Home size={20} />
            </span>
            {open && <span className="label">Dashboard</span>}
          </li>

          <li className="menu-item">
            <span className="icon">
              <Calendar size={20} />
            </span>
            {open && <span className="label">Events</span>}
          </li>

          <li className="menu-item">
            <span className="icon">
              <ClipboardCheck size={20} />
            </span>
            {open && <span className="label">Evaluation</span>}
          </li>
        </ul>

        {/* Divider Line */}
        <div className="sidebar-divider"></div>

        {/* --- Section 3: Notifications + Settings + Support --- */}
        <div className="sidebar-section">
          <div className="menu-item">
            <span className="icon">
              <Bell size={20} />
            </span>
            {open && <span className="label">Notifications</span>}
          </div>

          <div className="menu-item">
            <span className="icon">
              <Settings size={20} />
            </span>
            {open && <span className="label">Settings</span>}
          </div>

          <div className="menu-item">
            <span className="icon">
              <LogOut size={20} />
            </span>
            {open && <span className="label">Logout</span>}
          </div>

          <div className="menu-item">
            <span className="icon">
              <HelpCircle size={20} />
            </span>
            {open && <span className="label">Support</span>}
          </div>
        </div>

        {/* --- Section 4: Spacer --- */}
        <div className="sidebar-spacer"></div>

        {/* --- Section 5: Image --- */}
        <div className="sidebar-image-wrapper">
          <img
            src={sidebarImage}
            alt="sidebar illustration"
            className="sidebar-illustration"
          />
        </div>
      </nav>

      {!open && (
  <button
    className="sidebar-mobile-toggle"
    onClick={() => setOpen(true)}
  >
    <ChevronRight size={20} />
  </button>
)}


      {/* --- Backdrop for mobile overlay --- */}
      {open && (
        <div
          className="sidebar-backdrop"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default SidebarJudge;
