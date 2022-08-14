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

//Ex3
function getUsers() {
  fetch("https://reqres.in/api/users")
    .then((respose) => respose.json())
    .then((resposeJson) => {
      console.log(resposeJson.data);
      if (resposeJson.data.length >= 3) {
        for (let i = 0; i < 3; i++) {
          const liElement = document.createElement("li");
          liElement.innerHTML = resposeJson.data[i].first_name;
          document.getElementById("users-ul").appendChild(liElement);
        }
        //console.log(userNames);
      } else {
        console.log("Less than 3 users");
      }
    })
    .catch(() => console.log("Error occured while fetching data"));
}
getUsers();
