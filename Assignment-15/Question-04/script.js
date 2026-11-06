/*
 * Project: Java Script Introduction Lab (BCS352)
 * Assignment: 15
 * Assignment Name: Promises and async/await with Local Data
 * Question: 4
 * Student Name: Krishna Yadav
 * Roll Number: BCS2025400
 * Course: B.Tech CSE - 3rd Semester
 * Subject: Java Script Introduction Lab (BCS352)
 */

function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Asha" },
        { id: 2, name: "Rohan" },
        { id: 3, name: "Meera" },
      ]);
    }, 100);
  });
}

async function showUsers() {
  const users = await getUsers();
  users.forEach((user) => console.log(user.name));
}

showUsers();
