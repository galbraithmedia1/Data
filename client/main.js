
const bored = document.querySelector(".bored")

 document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

 document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById("boredButton").onclick = function (){
      console.log("clicked")
      axios.get("https://www.boredapi.com/api/activity/")
      .then(function (res){
          let data = res.data.activity

            let data2 = `${data} `

          console.log(data)
          let boredText = document.createTextNode(data2);
          bored.appendChild(boredText)
      })

      
  }