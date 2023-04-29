const caixaPrincipal= document.createElement("div");
caixaPrincipal.classList.add("container");

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
    document.body.appendChild(caixaPrincipal);
    img.src =randomSrc;
    array1.splice(randomIndex, 1);
}

function adicionarClasse(div) {
    div.addEventListener('click', function(event) {
        const img = event.target.querySelector("img")
        if (img.classList.contains('virado')) {
            img.classList.replace('virado', 'normal');
          } else {
            img.classList.add('virado');
          }
    });
}
const divs = document.querySelectorAll('.card');
divs.forEach(adicionarClasse);

//

var srcAnterior = '';
var elementoAnrterior;
let hasDuplicate = false;

function checkarSrc(ele) {
  
  if (srcAnterior == '') {
    srcAnterior = ele.getElementsByTagName('img')[0].currentSrc;
    console.log(srcAnterior)
    elementoAnrterior = ele;
    return;
  }else if (srcAnterior == ele.getElementsByTagName('img')[0].currentSrc) {	
    ele.getElementsByTagName('img')[0].src = '';
    elementoAnrterior.getElementsByTagName('img')[0].src = '';
    ele.classList.add("Certo");
    elementoAnrterior.classList.add("Certo");
    srcAnterior = '';
    elementoAnrterior = '';
    setTimeout(function() {
      var imagens = document.getElementsByTagName("img");
      for (var i = 0; i < imagens.length; i++) {
        imagens[i].classList.remove("virado");
      }
    }, 50);;
  }else {
    srcAnterior= '';
    setTimeout(function() {
      var imagens = document.getElementsByTagName("img");
      for (var i = 0; i < imagens.length; i++) {
        imagens[i].classList.remove("virado");
      }
    }, 250);;
  }

}
