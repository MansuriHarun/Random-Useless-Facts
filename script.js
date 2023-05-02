const randomFacts = document.getElementById('RandomFacts');
const todayFacts = document.getElementById('TodayFacts');

window.onload = function() {
  getRandomFacts();
  getTodayFacts();
}

function getRandomFacts() {
  fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
  .then(response => response.json())
  .then(data => {
    randomFacts.innerHTML = `
      <h1>Random Useless Facts</h1>
      <h2>${data.text}</h2>
      <p>Source: ${data.source}</p>
      <p>Source_Url: <a href="${data.source_url}" target="_blank">${data.source_url}</a></p>
      <button class="glow-on-hover" onclick="getRandomFacts()">Get Random Facts</button>
    `
  })
  .catch(error => console.log(error));
}

function getTodayFacts() {
  fetch('https://uselessfacts.jsph.pl/api/v2/facts/today')
  .then(response => response.json())
  .then(data => {
    todayFacts.innerHTML = `
      <h1>Today's Useless Facts</h1>
      <h2>${data.text}</h2>
      <p>Source: ${data.source}</p>
      <p>Source_Url: <a href="${data.source_url}" target="_blank">${data.source_url}</a></p>
    `
  })
  .catch(error => console.log(error));
}