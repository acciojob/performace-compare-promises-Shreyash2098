// script.js

// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// Function to fetch data using Promise.all
function fetchDataUsingPromiseAll() {
  const startTime = performance.now();

  Promise.all(apiUrls.map(url => fetch(url)))
    .then(() => {
      const endTime = performance.now();
      const timeTaken = endTime - startTime;
      document.getElementById("output-all").textContent = timeTaken.toFixed(2);
    })
    .catch(error => console.error(error));
}

// Function to fetch data using Promise.any
function fetchDataUsingPromiseAny() {
  const startTime = performance.now();

  Promise.any(apiUrls.map(url => fetch(url)))
    .then(() => {
      const endTime = performance.now();
      const timeTaken = endTime - startTime;
      document.getElementById("output-any").textContent = timeTaken.toFixed(2);
    })
    .catch(error => console.error(error));
}

// Trigger the functions on button click
document.getElementById("btn").addEventListener("click", () => {
  fetchDataUsingPromiseAll();
  fetchDataUsingPromiseAny();
});
