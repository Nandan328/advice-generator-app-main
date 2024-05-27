const url = "https://api.adviceslip.com/advice";
const advice = document.getElementById("advice");
const btn = document.getElementById("btn");
const id = document.getElementById("id");

const start = () => {
  fetch(url)
    .then((rs) => rs.json())
    .then((data) => {
      id.textContent = "#" + data.slip.id;
      advice.textContent = '"' + data.slip.advice + '"';
    });
};

btn.addEventListener("click", start);

start();
