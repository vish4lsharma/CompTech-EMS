import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EvaluationPage from "./judge/EvaluationPage";
export default function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Link to="/evaluation">Evaluation</Link>
      </nav>

      <Routes>
        <Route path="/evaluation" element={<Evaluation />} />
      </Routes>
    </Router>
  );
}
