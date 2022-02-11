const bored = document.querySelector(".bored");

document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};

document.getElementById("fortuneButton").onclick = function () {
  axios.get("http://localhost:4000/api/fortune/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};

document.getElementById("boredButton").onclick = function () {
  console.log("clicked");
  axios.get("https://www.boredapi.com/api/activity/").then(function (res) {
    let data = res.data.activity;

    let data2 = `${data} `;

    console.log(data);
    let boredText = document.createTextNode(data2);
    bored.appendChild(boredText);
  });
};
// const space = document.querySelector(".spaceimg");
const space = document.querySelector(".space-container");

//NASA Space API for Img

//KEY=  GxRCmbcyS0huRov3kwrwtatbAeny9GFuNa085MUz
// https://api.nasa.gov/index.html

const nasaImg = () => {
  console.log("working");
  axios
    .get(
      "https://api.nasa.gov/planetary/apod?api_key=GxRCmbcyS0huRov3kwrwtatbAeny9GFuNa085MUz"
    )
    .then(function (res) {
      let data = res.data.url;

      let data2 = `${data} `;

      console.log(data);

      const spaceImg = document.createElement("div");
      spaceImg.innerHTML = `<img alt='space photo' src= ${data} class="spaceimg" />`;

      space.appendChild(spaceImg);
    });
};
nasaImg();


