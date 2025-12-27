export function evaluateProfile(cgpa, skills) {
  const skillCount = Object.values(skills).filter(Boolean).length;

  let status = "";
  let message = "";
  let suggestions = [];

  if (cgpa >= 8 && skillCount >= 3) {
    status = "strong";
    message = "You are placement ready.";
    suggestions.push("Start applying for internships");
  } else if (cgpa >= 7 && skillCount >= 2) {
    status = "average";
    message = "You are close but need improvement.";
    suggestions.push("Strengthen weak skill areas");
    suggestions.push("Build 1 solid project");
  } else {
    status = "weak";
    message = "You need serious improvement.";
    suggestions.push("Improve CGPA if possible");
    suggestions.push("Focus on 1 core skill");
  }

  return {
    status,
    message,
    suggestions,
  };
}
