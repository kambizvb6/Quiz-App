const score = JSON.parse(localStorage.getItem("score"));
const highScores = JSON.parse(localStorage.getItem("highScore")) || [];
//console.log(score);

const userName = document.querySelector("input");
const saveButton = document.querySelector("button");
const scoreELe = document.querySelector("p");

scoreELe.innerText = score;
const saveHandler = () => {
  if (!userName.value || !score) {
    alert("Invalid username or score!");
  }
  const userInformation = { username: userName.value, score };
  highScores.push(userInformation);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(10);
  localStorage.setItem("highScore", JSON.stringify(highScores));
  localStorage.removeItem("score");
  userName.innerText = "";
  window.location.assign("/");
};

saveButton.addEventListener("click", saveHandler);
// localStorage.setItem("userScore");
