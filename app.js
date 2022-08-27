const button = document.querySelector("button");
const h2 = document.querySelector(".color");

const colors = [
  "Blue",
  "Red",
  "Yellow",
  "Green",
  "Purple",
  "Crimson",
  "teal",
  "white",
  "orange",
  "lime",
  "grey",
  "gray",
  "darkorange",
  "darkred",
  "aquamarine",
  "chocolate",
  "darkgreen",
];

button.addEventListener("click", () => {
  const randNum = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randNum];
  h2.innerText = colors[randNum].toUpperCase();
});
