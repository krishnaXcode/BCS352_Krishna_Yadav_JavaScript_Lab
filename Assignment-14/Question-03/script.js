/*
 * Project: Java Script Introduction Lab (BCS352)
 * Assignment: 14
 * Assignment Name: Timers and Intervals
 * Question: 3
 * Student Name: Krishna Yadav
 * Roll Number: BCS2025400
 * Course: B.Tech CSE - 3rd Semester
 * Subject: Java Script Introduction Lab (BCS352)
 */

let count = 0;

const id = setInterval(() => {
  count++;
  console.log("Tick " + count);
  if (count === 3) {
    clearInterval(id);
  }
}, 200);
