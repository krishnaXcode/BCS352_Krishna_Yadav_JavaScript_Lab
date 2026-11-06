/*
 * Project: Java Script Introduction Lab (BCS352)
 * Assignment: 9
 * Assignment Name: DOM, Validation, Storage and Quiz
 * Question: 4
 * Student Name: Krishna Yadav
 * Roll Number: BCS2025400
 * Course: B.Tech CSE - 3rd Semester
 * Subject: Java Script Introduction Lab (BCS352)
 */

const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const chosen = document.querySelector('input[name="answer"]:checked');
  if (chosen && chosen.value === "5") {
    result.textContent = "Correct";
  } else {
    result.textContent = "Try again";
  }
});
