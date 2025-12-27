import { evaluateProfile } from "../data/rules";

function Result({ cgpa, skills }) {
  if (!cgpa) return null;

  const result = evaluateProfile(Number(cgpa), skills);

  return (
    <div className={`result ${result.status}`}>
      <h2>Status: {result.status.toUpperCase()}</h2>
      <p>{result.message}</p>

      <ul>
        {result.suggestions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Result;
