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





//songs


const galaxysContainer = document.querySelector('#galaxy-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/galaxys`

const galaxysCallback = ({ data: galaxys }) => displayGalaxys(galaxys)
const errCallback = err => console.log(err)

const getAllGalaxys = () => axios.get(baseURL).then(galaxysCallback).catch(errCallback)
const createGalaxy = body => axios.post(baseURL, body).then(galaxysCallback).catch(errCallback)
const deleteGalaxys = id => axios.delete(`${baseURL}/${id}`).then(galaxysCallback).catch(errCallback)
const updateGalaxys = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(galaxysCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let names = document.querySelector('#name')
    let distance = document.querySelector('#distance')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        names: names.value,
        distance: distance.value, 
        imageURL: imageURL.value
    }

    createGalaxy(bodyObj)

    names.value = ''
    distance.value = ''
    imageURL.value = ''
}

function createGalaxyCard(galaxy) {
    const galaxyCard = document.createElement('div')
    galaxyCard.classList.add('galaxy-card')

    galaxyCard.innerHTML = `<img alt='galaxy cover image' src=${galaxy.imageURL} class="galaxy-cover-image"/>
    <p class="address">${galaxy.address}</p>
    <div class="btns-container">
        <button onclick="updateGalaxys(${galaxy.id}, 'minus')">-</button>
        <p class="galaxy-price">$${galaxy.distance}</p>
        <button onclick="updateGalaxys(${galaxy.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteGalaxys(${galaxy.id})">delete</button>
    `


   galaxysContainer.appendChild(galaxyCard)
}

function displayGalaxys(arr) {
    galaxysContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createGalaxyCard(arr[i]) 
    }
}

form.addEventListener('submit', submitHandler)

getAllGalaxys()