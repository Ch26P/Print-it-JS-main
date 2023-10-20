
let compteur=0  //creation d une variable compteur
let imagefondcarrousel = document.querySelector(".banner-img ")//recuperation imag de fond
let nbrsimgs=slides.length//creation d une variable du nbrs d'image
let insertagline= document.querySelector("#banner p ")
insertagline.innerHTML = slides[compteur]["tagLine"]

//creation des input
for(let nbrDot=0;nbrDot<nbrsimgs;nbrDot++){ 
    let nouveauInput = document.createElement("input")
    //ajout de la class input
    nouveauInput.className="dot"
    nouveauInput.Name="selecteur"
   nouveauInput.type="button"
   /*  nouveauInput.value=(nbrDot)*/
    // Récupérer un élément parent existant
    let divDot = document.querySelector(".dots ")
    // Ajouter le nouvel élément au parent
    divDot.appendChild(nouveauInput);
}

let InputPresent = document.querySelectorAll("#banner input")//recuperation des input
InputPresent[compteur].classList.add("dot_selected")//Ajoute d'une class
let InputSelect =InputPresent [compteur]
let arrowcaroussel = document.querySelectorAll("#banner .arrow");//recuperation des 2 fleches
            //changement au clique des flèches
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
      InputPresent[compteur].classList.add("dot_selected")//Ajoute d'une class
      InputSelect.classList.remove("dot_selected")//Suppression d'une class
      InputSelect=InputPresent[compteur]//
      insertagline.innerHTML = slides[compteur]["tagLine"]//changer la tag-line
    })
}
                  //changement au clique des Dot
for (let a=0; a<InputPresent.length;a++){
  let Inputclick=InputPresent[a]
  Inputclick.addEventListener("click",(event)=>{
    input=event.target
    console.log(input)
    if (input===InputPresent[a]){
      compteur=a

    }
    imagefondcarrousel.setAttribute("src", slides[compteur]["image"])//changer src de l'image
    InputPresent[compteur].classList.add("dot_selected")//Ajoute d'une class
    InputSelect.classList.remove("dot_selected")//Suppression d'une class
    InputSelect=InputPresent[compteur]//
    insertagline.innerHTML = slides[compteur]["tagLine"]//changer la tag-line
  })
}












