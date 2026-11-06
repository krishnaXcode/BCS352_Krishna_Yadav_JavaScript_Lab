/*
 * Project: Java Script Introduction Lab (BCS352)
 * Assignment: 11
 * Assignment Name: Scope and Closures
 * Question: 2
 * Student Name: Krishna Yadav
 * Roll Number: BCS2025400
 * Course: B.Tech CSE - 3rd Semester
 * Subject: Java Script Introduction Lab (BCS352)
 */

function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
