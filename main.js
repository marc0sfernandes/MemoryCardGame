const caixaPrincipal= document.createElement("div");
caixaPrincipal.classList.add("container");

const array1 = new Array ("img/img6.png","img/img5.png","img/img4.png", "img/img3.png", "img/img2.png", "img/img1.png","img/img6.png","img/img5.png","img/img4.png", "img/img3.png", "img/img2.png", "img/img1.png");

for(i=0; i < 12; i++){
    const randomIndex = Math.floor(Math.random() * array1.length);
    const randomSrc = array1[randomIndex];
    const img = document.createElement("img")
    img.classList.add("visivel")
    const card=document.createElement("div");
    card.classList.add("card");
    card.appendChild(img)
    caixaPrincipal.appendChild(card);
    document.body.appendChild(caixaPrincipal);
    img.src =randomSrc;
    array1.splice(randomIndex, 1);
}

function adicionarClasse(div) {
    div.addEventListener('click', function(event) {
        const img = event.target.querySelector("img")
        if (img.classList.contains('virado')) {
            img.classList.remove('virado');
          } else {
            img.classList.add('virado');
          }
    });
}
const divs = document.querySelectorAll('.card');
divs.forEach(adicionarClasse);

//