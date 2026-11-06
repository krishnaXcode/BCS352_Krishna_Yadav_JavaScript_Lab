/*
 * Project: Java Script Introduction Lab (BCS352)
 * Assignment: 14
 * Assignment Name: Timers and Intervals
 * Question: 2
 * Student Name: Krishna Yadav
 * Roll Number: BCS2025400
 * Course: B.Tech CSE - 3rd Semester
 * Subject: Java Script Introduction Lab (BCS352)
 */

const id = setTimeout(() => {
  console.log("Not shown");
}, 1000);

clearTimeout(id);
console.log("Cancelled");
