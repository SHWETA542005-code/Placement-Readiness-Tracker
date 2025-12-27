import { useState } from "react";
import "./App.css";
import Result from "./Components/Result";

function App() {
  const [cgpa, setCgpa] = useState("");
  const [skills, setSkills] = useState({
    dsa: false,
    web: false,
    sql: false,
    core: false,
  });
  const [showResult, setShowResult] = useState(false);

  const handleSkillChange = (e) => {
    const { name, checked } = e.target;
    setSkills((prev) => ({
      ...prev,
      [name]: checked,
    }));
    setShowResult(false);
  };

  const handleAnalyze = () => {
    setShowResult(true);
  };

  const isDisabled =
    cgpa === "" || Object.values(skills).every((val) => val === false);

  return (
    <div className="app">
      <h1>Placement Readiness Analyzer</h1>

      <input
        type="number"
        placeholder="Enter CGPA"
        value={cgpa}
        onChange={(e) => {
          setCgpa(e.target.value);
          setShowResult(false);
        }}
      />

      <div className="skills">
        <label>
          <input
            type="checkbox"
            name="dsa"
            checked={skills.dsa}
            onChange={handleSkillChange}
          />
          DSA
        </label>

        <label>
          <input
            type="checkbox"
            name="web"
            checked={skills.web}
            onChange={handleSkillChange}
          />
          Web Development
        </label>

        <label>
          <input
            type="checkbox"
            name="sql"
            checked={skills.sql}
            onChange={handleSkillChange}
          />
          SQL
        </label>

        <label>
          <input
            type="checkbox"
            name="core"
            checked={skills.core}
            onChange={handleSkillChange}
          />
          Core CS
        </label>
      </div>

      <button disabled={isDisabled} onClick={handleAnalyze}>
        Analyze
      </button>

      {isDisabled && (
        <p className="hint">Enter CGPA and select at least one skill</p>
      )}

      {showResult && <Result cgpa={cgpa} skills={skills} />}
    </div>
  );
}

export default App;
