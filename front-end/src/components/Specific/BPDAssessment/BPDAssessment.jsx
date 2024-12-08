import React, { useState } from "react";

// BPDAssessment Component (same logic as before)
const BPDAssessment = () => {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
  });

  const [score, setScore] = useState(null);
  const [interpretation, setInterpretation] = useState("");

  // Handle answer changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({
      ...answers,
      [name]: value,
    });
  };

  // Calculate the score based on the user's answers
  const calculateScore = () => {
    let totalScore = 0;
    Object.keys(answers).forEach((key) => {
      if (answers[key] === "yes") totalScore++;
    });

    setScore(totalScore);

    // Interpretation based on score
    if (totalScore >= 7) {
      setInterpretation(
        "A score of 7 or higher suggests the possibility of Borderline Personality Disorder. Please consult a mental health professional for further evaluation."
      );
    } else if (totalScore >= 5) {
      setInterpretation(
        "A score of 5 or 6 indicates that further evaluation for Borderline Personality Disorder is recommended."
      );
    } else {
      setInterpretation(
        "A lower score (4 or less) suggests that your symptoms are not consistent with Borderline Personality Disorder, but if you're still concerned, consider consulting a professional."
      );
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>McLean Screening Instrument for BPD</h1>
        <p style={styles.description}>
          Please answer the following questions honestly. Your responses will be
          used to calculate a score, which can give an indication of whether
          further evaluation is needed.
        </p>

        <form style={styles.form}>
          {["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"].map(
            (question, index) => (
              <div key={question} style={styles.questionContainer}>
                <p>
                  {index + 1}. {questions[index].question}
                </p>
                <div style={styles.radioGroup}>
                  <label style={styles.radioLabel}>
                    <input
                      type="radio"
                      name={question}
                      value="yes"
                      onChange={handleChange}
                      checked={answers[question] === "yes"}
                      style={styles.radioButton}
                    />{" "}
                    Yes
                  </label>
                  <label style={styles.radioLabel}>
                    <input
                      type="radio"
                      name={question}
                      value="no"
                      onChange={handleChange}
                      checked={answers[question] === "no"}
                      style={styles.radioButton}
                    />{" "}
                    No
                  </label>
                </div>
              </div>
            )
          )}

          <button type="button" onClick={calculateScore} style={styles.button}>
            Calculate Score
          </button>
        </form>

        {score !== null && (
          <div style={styles.result}>
            <p>Your total score is: {score}</p>
            <p style={styles.interpretation}>{interpretation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Array of questions
const questions = [
  {
    question:
      "Have any of your closest relationships been troubled by a lot of arguments or repeated breakups?",
  },
  {
    question:
      "Have you deliberately hurt yourself physically (e.g., punched yourself, cut yourself, burned yourself)? How about made a suicide attempt?",
  },
  { question: "Have you often felt empty or bored?" },
  {
    question:
      "Have you had unstable and intense relationships, alternating between idealizing and devaluing the other person?",
  },
  {
    question:
      "Have you had a pattern of unstable and intense relationships, alternating between idealizing and devaluing the other person?",
  },
  {
    question:
      "Have you often felt a strong fear of abandonment, even to the point of doing things you didn’t want to do to keep people close?",
  },
  { question: "Have you experienced chronic feelings of emptiness?" },
  {
    question:
      "Have you had inappropriate, intense anger or difficulty controlling your anger?",
  },
  {
    question:
      "Have you had a pattern of unstable and intense relationships, alternating between idealizing and devaluing the other person?",
  },
  {
    question:
      "Have you made desperate efforts to avoid feeling abandoned or being abandoned (e.g., repeatedly called someone to reassure yourself that they still cared, begged them not to leave you, clung to them physically)?",
  },
];

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    //background: "linear-gradient(135deg, #6D83B1, #84A9C0)", // Light gradient
    padding: "0 15px",
  },
  formContainer: {
    //backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "850px",
    animation: "fadeIn 0.5s ease-in-out",
  },
  title: {
    textAlign: "center",
    color: "#1D3557",
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "20px",
  },
  description: {
    textAlign: "center",
    fontSize: "1.2rem",
    marginBottom: "25px",
    color: "#444",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },
  questionContainer: {
    fontSize: "1.1rem",
    marginBottom: "15px",
    color: "#333",
  },
  radioGroup: {
    display: "flex",
    gap: "20px",
    marginTop: "8px",
    paddingLeft: "10px",
  },
  radioLabel: {
    fontSize: "1.1rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    color: "#555",
  },
  radioButton: {
    marginRight: "10px",
    cursor: "pointer",
  },
  button: {
    backgroundColor: "#1D3557",
    color: "white",
    padding: "15px 25px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.3rem",
    marginTop: "20px",
    transition: "all 0.3s ease-in-out",
  },
  buttonHover: {
    backgroundColor: "#1C2C40",
  },
  result: {
    marginTop: "35px",
    fontSize: "1.2rem",
    textAlign: "center",
    color: "#333",
  },
  interpretation: {
    marginTop: "20px",
    fontSize: "1.1rem",
    color: "#333",
    lineHeight: "1.6",
    fontStyle: "italic",
  },
  "@keyframes fadeIn": {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
};

export default BPDAssessment;
