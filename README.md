# Project Title : Placement Readiness Tracker

# Overview:
This project evaluates a student's academic and skill-based readiness using a rule-based evaluation system. 
It focuses on explainable decision-making rather than simple numeric calculations.

# Features:
- Rule-based evaluation logic
- Clean separation of UI and business logic
- Explainable output with suggestions
- Edge-case handling
- Responsive and minimal UI

# TechStack:
- React
- JavaScript
- CSS

# Folder Structure:
src/
├─ Components/
│  ├─ Result.jsx
│  └─ SkillInput.jsx
├─ data/
│  └─ rules.js
├─ App.jsx
├─ App.css

# How It Works:
The application takes academic and skill inputs, evaluates them using predefined rules,
and classifies the result into readiness levels with contextual feedback.

# How to run locally:
npm install
npm run dev

# Future Improvements:
- Configurable evaluation rules
- Skill-weight based analysis
- Persistent user history

