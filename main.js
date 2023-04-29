const caixaPrincipal= document.createElement("div");
caixaPrincipal.classList.add("container");
const caixaEstilizavel= document.createElement("div");
caixaEstilizavel.classList.add("caixa_estilo");
const titulo= document.createElement("h1")
var texto  = document.createTextNode("Memory Card Game");
const timerDisplayer= document.createElement("div")
timerDisplayer.setAttribute("id", "timerDisplay")
titulo.appendChild(texto);
caixaEstilizavel.appendChild(titulo)
caixaEstilizavel.appendChild(timerDisplayer);

const array1 = new Array ("img/img6.png","img/img5.png","img/img4.png", "img/img3.png", "img/img2.png", "img/img1.png","img/img6.png","img/img5.png","img/img4.png", "img/img3.png", "img/img2.png", "img/img1.png");

for(i=0; i < 12; i++){
    const randomIndex = Math.floor(Math.random() * array1.length);
    const randomSrc = array1[randomIndex];
    const img = document.createElement("img")
    const card=document.createElement("div");
    card.classList.add("card");
    card.appendChild(img);
    card.addEventListener('click', function() {
      checkarSrc(this)
    });
    caixaPrincipal.appendChild(card);
    caixaEstilizavel.appendChild(caixaPrincipal)
    document.body.appendChild(caixaEstilizavel);
    img.src =randomSrc;
    array1.splice(randomIndex, 1);
}

function adicionarClasse(div) {
    div.addEventListener('click', function(event) {
      const img = event.target.querySelector("img")
      img.classList.add('virado');
    });
}
const divs = document.querySelectorAll('.card');
divs.forEach(adicionarClasse);

//

var srcAnterior = '';
var elementoAnrterior;
let hasDuplicate = false;
var ultimoClique = null;

function checkarSrc(ele) {
  
  if (srcAnterior == '') {
    srcAnterior = ele.getElementsByTagName('img')[0].currentSrc;
    elementoAnrterior = ele;
    ultimoClique= ele
    return;
  }else if (srcAnterior == ele.getElementsByTagName('img')[0].currentSrc && ele !== ultimoClique) {	
    ele.getElementsByTagName('img')[0].src ="";
    elementoAnrterior.getElementsByTagName('img')[0].src ="";
    ele.classList.add("Certo");
    elementoAnrterior.classList.add("Certo");
    srcAnterior = '';
    elementoAnrterior = '';
    ultimoClique= null;
    setTimeout(function() {
      var imagens = document.getElementsByTagName("img");
      for (var i = 0; i < imagens.length; i++) {
        imagens[i].classList.remove("virado");
      }
    }, 1);;
  }else {
    srcAnterior= '';
    ultimoClique= ele;
    setTimeout(function() {
      var imagens = document.getElementsByTagName("img");
      for (var i = 0; i < imagens.length; i++) {
        imagens[i].classList.remove("virado");
      }
    }, 250);;
  }

}
//
const timerDisplay = document.getElementById("timerDisplay");
let startTime;
let isRunning = false;

document.addEventListener("click", () => {
  if (!isRunning) {
    startTime = Date.now();
    setInterval(updateTimer, 1000);
    isRunning = true;
  }
});

function updateTimer() {
  const elapsedTime = Date.now() - startTime;
  const seconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.innerHTML = display;

  const imgs = document.querySelectorAll("img");

  let isAllImagesLoaded;

  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].src !== "" && !imgs[i].complete) {
      isAllImagesLoaded = false;
      break;
  }

  if (isAllImagesLoaded) {
    clearInterval(updateTimer);
    if (window.confirm(`Congratulations! Your time was ${display}. Click 'OK' to start again.`)) {
      location.reload();
    }
  }
}}