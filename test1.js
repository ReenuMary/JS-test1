//Ex1
function printNumbers() {
  for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 == 0) {
      console.log(`${i} - Jackpot`);
    } else if (i % 3 === 0) {
      console.log(`${i} is divisible by 3`);
    } else if (i % 5 === 0) {
      console.log(`${i} is divisible by 5`);
    } else {
      console.log(i);
    }
  }
}
printNumbers();

//Ex2

const btnImg = document.createElement("button");
btnImg.innerHTML = "Show Image";
btnImg.addEventListener("click", btnShowImgClicked);
document.querySelector("body").appendChild(btnImg);

function btnShowImgClicked() {
  const img = document.createElement("img");
  img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";

  document.getElementById("img-div").appendChild(img);
  // document.querySelector("body").appendChild(img);
}
