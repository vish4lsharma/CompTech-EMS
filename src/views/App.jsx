import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./layouts/SidebarJudge";
import Header from "./layouts/Header";
import { SearchProvider } from "./layouts/SearchContext";
import EvaluationPage from "./judge/EvaluationPage";
import "./App.css";
import { Search } from "lucide-react";

const SIDEBAR_OPEN_WIDTH = 240;
const SIDEBAR_COLLAPSED_WIDTH = 80;

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarWidth = sidebarOpen ? SIDEBAR_OPEN_WIDTH : SIDEBAR_COLLAPSED_WIDTH;

  const user = { name: "Ms. Suhana Arora", avatar: "/images/profile_placeholder.png" };

  // 🔹 ref to talk to EvaluationPage
  const evaluationRef = useRef(null);

  // 🔹 when user types in the header search bar
  const handleSearch = (query) => {
    if (evaluationRef.current) {
      evaluationRef.current.scrollToMatch(query);
    }
  };

  return (
    <Router>
      <SearchProvider>
      <div className="app-container">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <Header sidebarWidth={sidebarWidth} user={user} onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={<EvaluationPage ref={evaluationRef} sidebarWidth={sidebarWidth} />}
          />
          <Route
            path="/evaluation"
            element={<EvaluationPage ref={evaluationRef} sidebarWidth={sidebarWidth} />}
          />
        </Routes>
      </div>
      </SearchProvider>
    </Router>
  );
}
