import React from "react";
import DarkDropdown from "../layouts/DarkDropdown";


const StudentRow = ({ student, index, stage, onAttendanceChange, onScoreChange }) => {
  const total = student.scores
  .filter((s) => s !== "" && !isNaN(s))
  .reduce((a, b) => a + b, 0);

  const canEditScore = (scoreIndex) => {
    const stages = ["score1", "score2", "score3"];
    return stage === stages[scoreIndex] && student.attendance === "Present";
  };

  const handleScoreInput = (e, j) => {
  let value = e.target.value;

 
  if (value === "") {
    onScoreChange(index, j, "");
    return;
  }

  let num = Number(value);
  if (num < 1) num = 1;
  if (num > 10) num = 10;

  onScoreChange(index, j, num);
};


  return (
  <>
    <td>{index + 1}</td>
    <td className="student-td">
      <div className="student-cell">
        <img src={student.avatar} className="student-avatar" alt="" />
        <span className="student-name">{student.name}</span>
      </div>
    </td>
    <td>
      <DarkDropdown
        value={student.attendance || ""}
        onChange={(val) => !submitted && onAttendanceChange(index, val)}
        options={["Present", "Absent"]}
        disabled={submitted}
      />
    </td>
    {[0, 1, 2].map((j) => (
      <td key={j}>
        <input
          type="number"
          min="1"
          max="10"
          step="1"
          value={student.scores[j] === 0 ? "" : student.scores[j]}
          onChange={(e) => !submitted && handleScoreInput(e, j)}
          disabled={!canEditScore(j)}
        />
      </td>
    ))}
    <td>{total}</td>
  </>
);

};

export default StudentRow;
