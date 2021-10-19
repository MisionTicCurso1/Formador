// var Name = document.getElementById("Name");

// var titulo = (document.getElementById("parrafo2").innerHTML =
//   "Párrafo de textos");
// document.getElementById("parrafo2").style.color = "red";
// document.getElementById("parrafo2").style.display = "none";

// var app = document.getElementById("app");
// // <div style = "background-color: red">
// //     <p style = "font-size:5rem">Hola</p>
// // </div>`;

// var countries = ["polo", "pola", "pulo"];

// function parrafos() {
//   countries.forEach((country) => {
//     console.log("parrafos");
//     let makeDiv = document.createElement("div");
//     makeDiv.id = country;
//     let h4 = document.createElement("h4");
//     h4.innerText = country;
//     makeDiv.appendChild(h4);
//     app.appendChild(makeDiv);
//   });
// }

// parrafos();

prueba();
console.log("Hola");
function prueba() {
  console.log("1. funcion");
}

// prueba2()

const prueba2 = function () {
  console.log("2. funcion");
};

// prueba3()
const prueba3 = () => {
  console.log("3. Funcion");
};

function kk() {
  console.log(Name.value);
}

// var timeleft = 10;
// var downloadTimer = setInterval(function () {
//   if (timeleft <= 0) {
//     timeleft = 10;
//     clearInterval(downloadTimer);
//   }
//   document.getElementById("count-down").style.fontSize = "2.5rem";
//   document.getElementById("count-down").style.textAlign = "center";
//   document.getElementById("count-down").style.fontWeight = "300";
//   document.getElementById("count-down").innerHTML = 10 - timeleft;
//   timeleft -= 1;
// }, 1000);

// ///*************PROMESAS  **************/////
// // Cuando ejecuto codigo JS se ejecuta en secuencia
// // pero quiero que un proceso solo se ejecute si el anterior procesos se ejecuto de lo contrario no lo haga. Eso se llama asincronismo, porque asi como puede ocurrir en un segundo puede pasar 2 horas

// //UNa promesa es algo que se cumple o no

// const getUser = new Promise((resolve, reject) => {
//   // setInterval se ejecuta cada cierto tiempo
//   // setTimeout se ejecuta una sola en determinado tiempo
//   setTimeout(function () {
//     resolve([
//       {
//         nombre: "Cristian",
//         apellido: "Palta",
//         url: "./img1.jpg",
//         likes: 150,
//         comments: 10,
//       },
//       {
//         nombre: "Cristian",
//         apellido: "Palta",
//         url: "./img1.jpg",
//         likes: 10,
//         comments: 100,
//       },
//       {
//         nombre: "Cristian",
//         apellido: "Palta",
//         url: "./img1.jpg",
//         likes: 550,
//         comments: 106,
//       },
//       {
//         nombre: "Cristian",
//         apellido: "Palta",
//         url: "./img1.jpg",
//         likes: 103,
//         comments: 26,
//       },
//     ]);
//     //Luego de 3 segundo se ejecuta
//   }, 3000);
// });
// const getUser2 = new Promise((resolve, reject) => {
//   // setInterval se ejecuta cada cierto tiempo
//   // setTimeout se ejecuta una sola en determinado tiempo
//   setTimeout(function () {
//     resolve("promesa2");
//     // reject("Error jojo")
//     //Luego de 3 segundo se ejecuta
//   }, 5000);
// });

// var data = [];
var app = document.getElementById("aplicacion");

// getUser
//   .then((res) => {
//     console.log("Trajo la data", res);
//     data = res;
//     // data.map((datos) => {
//     //   console.log(datos.url);
//     //   let a = document.createElement("a");
//     //   let figure = document.createElement("div");
//     //   let social = document.createElement("div");
//     //   let img = document.createElement("img");
//     //   let p = document.createElement("p");
//     //   let likes = document.createElement("span");
//     //   let comments = document.createElement("span");
//     //   //Declaraciones
//     //   a.className = "post";
//     //   figure.className = "post-image";
//     //   social.className = "post-overlay";
//     //   likes.className = "post-likes";
//     //   comments.className = "post-comments";
//     //   img.src = datos.url;
//     //   img.style.maxWidth = "100%";
//     //   img.style.height = "100%";
//     //   img.style.objectFit = 'cover'
//     //   likes.textContent = datos.likes;
//     //   comments.textContent = datos.comments;
//     //   //Componentes
//     //   a.appendChild(figure);
//     //   a.appendChild(social);
//     //   figure.appendChild(img);
//     //   social.appendChild(p);
//     //   p.appendChild(likes);
//     //   p.appendChild(comments);
//     //   app.appendChild(a);
//     // });
//     // console.log(data);
//   })
//   .catch(() => {
//     console.log("Fallo");
//   });

// getUser2
//   .then(() => {
//     console.log("getUser2");
//   })
//   .catch((res) => {
//     console.log("Algo salio mal", res);
//   });

// // Puedo tener control de las promesas con all. de esta manera podre ver cuales se ejecutaron y cuales no
// Promise.all([getUser, getUser2])
//   .then((res) => {
//     console.log("Echo", res);
//   })
//   .catch((error) => {
//     console.log("Mal", error);
//   });

///******** Usando fetch  *************//



var showCharacter = document.getElementById("single-character");
async function showAlert(id) {
  // var yPos = app.getBoundingClientRect().top;
  // console.log(yPos);
  let res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  let data = await res.json();
  console.log(data);
  // let altura = window.height();
  // console.log(altura)
  if (!!data.name) {
    
    showCharacter.style.display = "flex";
    // app.style.display = "none"
    showCharacter.height = document.documentElement.scrollTop;
    
    console.log("Holi");
  }
  if (!!data.error) {
    console.log("Holi");
  }
}

fetch("https://rickandmortyapi.com/api/character", {
  method: "GET",
})
  .then((response) => {
    // El response tiene un metodo que es json. Json es una funcion que devuelve una promesa con el cuerpo del dato. Por eso se hace el return
    // console.log(response.json())
    return response.json();
  })
  .then((data) => {
    console.log(data.results);
    let datos = data.results;
    datos.map((datos) => {
      console.log(datos.url);
      let a = document.createElement("a");

      let figure = document.createElement("div");
      let social = document.createElement("div");
      let img = document.createElement("img");
      let p = document.createElement("p");
      let likes = document.createElement("span");
      let comments = document.createElement("span");
      //Declaraciones
      a.className = "post";
      a.onclick = function () {
        showAlert(datos.id);
      };
      figure.className = "post-image";
      social.className = "post-overlay";
      likes.className = "post-likes";
      comments.className = "post-comments";
      img.src = datos.image;
      img.style.maxWidth = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
      likes.textContent = datos.likes;
      comments.textContent = datos.comments;
      //Componentes
      a.appendChild(figure);
      a.appendChild(social);
      figure.appendChild(img);
      social.appendChild(p);
      p.appendChild(likes);
      p.appendChild(comments);
      app.appendChild(a);
    });
  })
  .catch(() => {
    console.log("Error");
  });

///*****Usando asyn await */
// Puedo llamar una funcion de 2 maneras uno llamandola normalmente si no envolviendola en parentesis y poniendolos otros parentesis alfinal
// (async function () {
//   let response = await fetch("https://rickandmortyapi.com/api/character", {
//     method: "GET",
//   });
//   let data = await response.json()
//   console.log("Async", data)
// })();
(async function () {
  async function getData(url) {
    let response = await fetch(url, {
      method: "GET",
    });
    let data = await response.json();
    return data;
  }

  const datos = await getData("https://rickandmortyapi.com/api/character");
  console.log("Datos", datos);
})();
