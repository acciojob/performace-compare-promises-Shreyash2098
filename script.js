// script.js

document.getElementById("btn").addEventListener("click", () => {
  fetchDataUsingPromiseAll();
  fetchDataUsingPromiseAny();
});

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
