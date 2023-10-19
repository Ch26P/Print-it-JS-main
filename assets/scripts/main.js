//creation d une variable compteur
let compteur=0
console.log(compteur)
//recuperation imag de fond
let imagefondcarrousel = document.querySelector(".banner-img ")
//creation d une variable du nbrs d'image
let nbrsimgs=slides.length
console.log(nbrsimgs)

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
    divDot.appendChild(nouveauInput)
    console.log(nouveauInput);
}

//recuperation des input
let InputPresent = document.querySelectorAll("#banner input")

InputPresent[compteur].classList.add("dot_selected")
let InputSelect =InputPresent [compteur]
//recuperation des 2 fleches
let arrowcaroussel = document.querySelectorAll("#banner .arrow");
//ecouter clic sur les fleches + incredenté le compteur
arrowcaroussel[0].addEventListener("click", () => {
    compteur--
    if (compteur<0){
      compteur=nbrsimgs-1
    }
    console.log("Vous avez cliqué sur le bouton gauche")
    console.log(compteur)
    imagefondcarrousel.setAttribute("src", slides[compteur]["image"])
    console.log(InputPresent[compteur])
    console.log(InputSelect)
    //ajouter une class a l input selectionner
InputPresent[compteur].classList.add("dot_selected")
    //retirer une class a l input selectionner
InputSelect.classList.remove("dot_selected")
InputSelect=InputPresent[compteur]
insertagline.innerHTML = slides[compteur]["tagLine"]//insertion tagline
});
    
arrowcaroussel[1].addEventListener("click", () => {
    compteur++
    if (compteur>nbrsimgs-1){
      compteur=0
    }
    console.log("Vous avez cliqué sur le bouton droit")
  console.log(compteur)
  imagefondcarrousel.setAttribute("src", slides[compteur]["image"])
 
  InputPresent[compteur].classList.add("dot_selected")
  InputSelect.classList.remove("dot_selected")
  InputSelect=InputPresent[compteur]
  insertagline.innerHTML = slides[compteur]["tagLine"]
});


















