
let compteur=0  // initialisation d une variable compteur
let imagefondcarrousel = document.querySelector(".banner-img ")//recuperation imag de fond
let nbrsimgs=slides.length//creation d une variable du nbrs d'image
let insertagline= document.querySelector("#banner p ")//recuperation de l'element p (pour tagline)
insertagline.innerHTML = slides[compteur]["tagLine"]//insertion de la tagline sur page d ' acueil


for(let nbrDot=0;nbrDot<nbrsimgs;nbrDot++){ //boucle pour insersion liste 
    let nouveauLi = document.createElement("li")//création d'un variable contenant un nouvelle element de type <li></li>
    nouveauLi.className="dot"//ajout de la class "dot"a <li>
    let divDot = document.querySelector(".dots ")//recupération de l'élément parent   
    divDot.appendChild(nouveauLi);// Ajouter le nouvel élément au parent
}

let LiPresent = document.querySelectorAll("#banner li")//recuperation des li
LiPresent[compteur].classList.add("dot_selected")//Ajoute d'une class a <li> corespondant a l image aficher
let LiSelect =LiPresent [compteur]//creation d'une variable pour <li> corespondant a l image aficher
let arrowcaroussel = document.querySelectorAll("#banner .arrow");//recuperation des 2 fleches

for (let i=0; i<arrowcaroussel.length;i++){
    let arrowclick=arrowcaroussel[i]
    arrowclick.addEventListener("click",(event)=>{
      arrow=event.target
      if (arrow===arrowcaroussel[0]){
        compteur--
        if (compteur<0){
          compteur=nbrsimgs-1
        }
      }
      if (arrow===arrowcaroussel[1]){
        compteur++
        if (compteur>nbrsimgs-1){
          compteur=0
        }
      }
      imagefondcarrousel.setAttribute("src", slides[compteur]["image"])//changer src de l'image
      LiPresent[compteur].classList.add("dot_selected")//Ajoute d'une class
      LiSelect.classList.remove("dot_selected")//Suppression d'une class
      LiSelect=LiPresent[compteur]//
      insertagline.innerHTML = slides[compteur]["tagLine"]//changer la tag-line
    })
}

                  //changement au clique des Dot
for (let a=0; a<LiPresent.length;a++){
  let Liclick=LiPresent[a]
  Liclick.addEventListener("click",(event)=>{
    Li=event.target
   
    if (Li===LiPresent[a]){
      compteur=a

    if(LiPresent[a]!== LiSelect){
    
    imagefondcarrousel.setAttribute("src", slides[compteur]["image"])//changer src de l'image
    LiPresent[compteur].classList.add("dot_selected")//Ajoute d'une class
    LiSelect.classList.remove("dot_selected")//Suppression d'une class
    LiSelect=LiPresent[compteur]//
    insertagline.innerHTML = slides[compteur]["tagLine"]//changer la tag-line
   } }})
}












