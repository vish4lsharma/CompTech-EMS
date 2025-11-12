import React, { useState, useRef, useEffect } from "react";
import StudentRow from "./StudentRow";
import "./EvaluationPage.css";
import DarkDropdown from "../layouts/DarkDropdown";
import { useSearch } from "../layouts/SearchContext";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar2.png";
import avatar4 from "../assets/avatar2.png";

const initialStudents = [
  { name: "Kunal Gangwar", avatar: avatar1, attendance: "", scores: ["", "", ""] },
  { name: "Anshika Sharma", avatar: avatar2, attendance: "", scores: ["", "", ""] },
  { name: "Vyakhya", avatar: avatar3, attendance: "", scores: ["", "", ""] },
  { name: "Anubhuti Raj", avatar: avatar4, attendance: "", scores: ["", "", ""] },
];

const EvaluationPage = ({ sidebarWidth }) => {
  const [students, setStudents] = useState([]);
  const containerRef = useRef(null);

  const { registerContainer } = useSearch();
  useEffect(() => {
  const sorted = [...initialStudents].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  setStudents(sorted);
}, []);

  useEffect(() => {
    const sorted = [...initialStudents].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setStudents(sorted);
  }, []);

  const handleAttendanceChange = (index, value) => {
    const updated = [...students];
    updated[index].attendance = value;

    if (value === "Absent") {
      updated[index].scores = ["", "", ""];
    }
    setStudents(updated);
  };

  const handleScoreChange = (studentIdx, scoreIdx, value) => {
  const num = Number(value);
  if (num < 0 || num > 10) return; 
  const updated = [...students];
  updated[studentIdx].scores[scoreIdx] = num;
  setStudents(updated);
};


  const isFormComplete = () => {
    return students.every((s) => {
      if (s.attendance === "") return false;
      if (s.attendance === "Absent") return true;
      return s.scores.every((score) => score !== "" && score > 0 && score <= 10);
    });
  };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
 
  const missingAttendance = students.some((s) => !s.attendance);

  if (missingAttendance) {
    alert("Please mark attendance for all students before submitting.");
    return;
  }

  
  const incompleteScores = students.some(
    (s) =>
      s.attendance === "Present" &&
      s.scores.some((score) => score === "" || score === null || score === undefined)
  );

  if (incompleteScores) {
    alert("Please fill all score fields (1–10) for all present students before submitting.");
    return;
  }


  alert("Scores submitted successfully!");
  setSubmitted(true);
};





  return (
    <main
      className="evaluation"
      style={{ marginLeft: sidebarWidth }}
      ref={containerRef}
    >
      <div className="evaluation-header">
        <h2>Event Name</h2>
      </div>

      <div className="evaluate-box">
        {students.length === 0 && (
  <p style={{ color: "white", textAlign: "center" }}>Loading table...</p>
)}

        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Student Name</th>
              <th>Attendance</th>
              <th>Score 1</th>
              <th>Score 2</th>
              <th>Score 3</th>
              <th>Total Score</th>
            </tr>
          </thead>

          <tbody>
  {students.map((s, i) => {
    const total = Array.isArray(s.scores)
      ? s.scores.reduce((sum, val) => sum + (parseFloat(val) || 0), 0)
      : 0;

    return (
      <tr key={i}>
        <td>{i + 1}</td>
        <td className="student-td">
          <div className="student-cell">
            <img src={s.avatar} className="student-avatar" alt="" />
            <span className="student-name">{s.name}</span>
          </div>
        </td>
        <td>
          <DarkDropdown
            options={["Select", "Present", "Absent"]}
            value={s.attendance || ""}
            onChange={(val) => !submitted && handleAttendanceChange(i, val)} 
            disabled={submitted}
          />
        </td>

        {s.scores.map((score, j) => (
          <td key={j}>
            <input
              type="number"
              min="1"
              max="10"
              value={score}
              onChange={(e) =>
                !submitted && handleScoreChange(i, j, e.target.value)
              } 
              disabled={s.attendance !== "Present" || submitted} 
            />
          </td>
        ))}

        <td>{total}</td>
      </tr>
    );
  })}
</tbody>

        </table>

        <button
          className="submit-btn"
          onClick={handleSubmit}

        >
          Submit
        </button>
      </div>
    </main>
  );
};

export default EvaluationPage;
