var Ncouleur = 1;
var numeroCarte = 1;
var numeroColonne = 1;
var popup = 0;
drag();

function ajouterCarte(position, text){
    if (text.value != "" ){
    var emplacementCarte = document.createElement('div');
    var bordureCarte = document.createElement('div');
    var bodyCarte = document.createElement('div');
    var titre = document.createElement('h5');
    var description = document.createElement('p');
    var ligne = document.createElement('hr');
    var emplacementBouton = document.createElement('div');
    var boutonEdit = document.createElement('button');
    var boutonSup = document.createElement('button');
    var boutonStatut = document.createElement('button');

    var titreTexte = document.createTextNode(text.value);
    var descriptionTexte = document.createTextNode('');
    var Editer = document.createTextNode('Editer');
    var supprimer = document.createTextNode('Supprimer');
    var Statut = document.createTextNode('Statut');

    emplacementCarte.className = 'lesCartes';
    bordureCarte.className = 'card border-light mb-3';
    bordureCarte.id = 'borderNumero'+numeroCarte;
    bodyCarte.className = 'card-body portlet';
    bodyCarte.id = 'cardNumero'+numeroCarte;
    titre.className = 'card-title portlet-header';
    description.className = 'card-text';
    description.id = 'textNumber' + +numeroCarte;
    emplacementBouton.className = 'bouton';
    boutonEdit.className = 'btn btn-outline-success btn-sm';
    boutonEdit.addEventListener("click",function(){modifCard(description.id)},false);
    boutonSup.className = 'btn btn-outline-danger btn-sm';
    boutonSup.addEventListener("click",function(){supprCarte(bordureCarte.id)},false);
    boutonStatut.className = 'btn btn-outline-dark btn-sm';
    boutonStatut.addEventListener("click",function(){couleur(bodyCarte.id)},false);

    titre.appendChild(titreTexte);
    description.appendChild(descriptionTexte);
    boutonEdit.appendChild(Editer);
    boutonSup.appendChild(supprimer);
    boutonStatut.appendChild(Statut);

    emplacementCarte.appendChild(bordureCarte);
    
    bordureCarte.appendChild(bodyCarte);

    bodyCarte.appendChild(titre);
    bodyCarte.appendChild(description);
    bodyCarte.appendChild(ligne);
    bodyCarte.appendChild(emplacementBouton);

    emplacementBouton.appendChild(boutonEdit);
    emplacementBouton.appendChild(boutonSup);
    emplacementBouton.appendChild(boutonStatut);

    var placement = document.getElementById(position);
    placement.appendChild(emplacementCarte);

    numeroCarte++;
    drag();
}
else {
    alert("Veuillez nommer votre carte !");
}
}

function modifCard(Ntexte){
    if (popup == 0) {
        var remplacement = document.getElementById(Ntexte);
        let popUp = document.createElement("div");
        let newTexte = document.createElement("input");
        let boutonCont = document.createElement("div");
        let button = document.createElement("button");
        let boutonTitre = document.createTextNode("Modifier");
    
        popUp.className ="input-group mb-3";
        newTexte.className ="form-control";
        newTexte.id ="inputTextReplace";
        boutonCont.className ="input-group-append";
        button.className ="btn btn-dark";
        button.style.backgroundColor = '#32688f';
        
        newTexte.placeholder = "Ajouter une description";
    
        popUp.appendChild(newTexte);
        popUp.appendChild(boutonCont);
        boutonCont.appendChild(button);
        button.appendChild(boutonTitre);
        remplacement.appendChild(popUp);
    
        button.addEventListener("click",function(){validmodifCard(Ntexte,newTexte.id)},false);

        popup++;
    }
    else {
        alert("Veuillez éditer votre carte !");
    }

}

function validmodifCard(Ntexte, text) {
    let remplacement = document.getElementById(Ntexte);
    remplacement.textContent = document.getElementById(text).value;
    popup --;
}

function moveCard(){

}

function supprCarte (numero) {
    let carteSuppr = document.getElementById(numero);
    carteSuppr.remove();
    numeroCarte--;
}

function supprColonne(colonneNumero) {
    let colonneSuppr = document.getElementById(colonneNumero);
    colonneSuppr.remove();
    numeroColonne--;
}

function creationColonne(){
if (numeroColonne <= 5){
    var colonne = document.createElement('div');
    var title = document.createElement('h4');
    var boutonSupp = document.createElement('button');
    var boutonSuppX = document.createTextNode("x");
    var colonneCont = document.createElement('div');
    var carteConteneur = document.createElement('div');
    var carte = document.createElement('div');
    var AcarteConteneur = document.createElement('div');
    var inputGroupe = document.createElement('div');
    var texte = document.createElement('input');
    var boutonConteneur = document.createElement('div');
    var bouton = document.createElement('button');

    var titreColonne = document.createTextNode(document.getElementById("colonneTitre").value);
    var plus = document.createTextNode('+');

    colonne.className = 'col-3 colonne';
    colonne.id = "colNumero"+numeroColonne;
    title.className = 'card-header';
    boutonSupp.className = 'btn btn-danger btn-sm';
    boutonSupp.style.float = 'right';
    colonneCont.className = 'UnderColonne';
    carteConteneur.className = 'carteConteneur';
    carte.className = "lesCartes prout";
    carte.id = "colNum"+numeroColonne;
    AcarteConteneur.className = 'ajoutCarteConteneur';
    inputGroupe.className = 'input-group mb-3';
    inputGroupe.id="oui";
    texte.className = 'form-control';
    texte.id ="texte"+numeroColonne;
    texte.placeholder = "Ajouter une carte";
    boutonConteneur.className = 'input-group-append';
    bouton.className = 'btn btn-outline-light';
    bouton.style.backgroundColor = '#32688f';
    title.contentEditable = 'true';

    bouton.addEventListener("click",function(){ajouterCarte(carte.id,texte)},false);
    boutonSupp.addEventListener("click",function(){supprColonne(colonne.id,texte)},false);

    title.appendChild(titreColonne);
    title.appendChild(boutonSupp);
    boutonSupp.appendChild(boutonSuppX);
    bouton.appendChild(plus);

    colonne.appendChild(title);
    colonne.appendChild(colonneCont);

    colonneCont.appendChild(carteConteneur);

    carteConteneur.appendChild(carte);
    carteConteneur.appendChild(AcarteConteneur);

    AcarteConteneur.appendChild(inputGroupe);

    inputGroupe.appendChild(texte);
    inputGroupe.appendChild(boutonConteneur);

    boutonConteneur.appendChild(bouton);

    var placement = document.getElementById("ajoutCol");
    placement.appendChild(colonne);

    numeroColonne++;
    drag();
}
else {
    alert("Nombre de colonne max atteint");
}

}

function couleur (numero) {
    if (Ncouleur == 1){
        document.getElementById(numero).style.borderColor = 'green';
        Ncouleur ++;
    }
    else if  (Ncouleur == 2){
        document.getElementById(numero).style.borderColor = "#32688f";
        Ncouleur ++;
    }
    else {
        document.getElementById(numero).style.borderColor = "red";
        Ncouleur = 1;
    }
}



// drag and drop 
function drag() {
    $(".prout").sortable({
        connectWith: ".prout",
        handle: ".portlet-header",
        cancel: ".portlet-toggle",
        placeholder: "portlet-placeholder ui-corner-all"
    });

    $(".portlet")
        .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
        .find(".portlet-header")
        .addClass("ui-widget-header ui-corner-all")


    $(".portlet-toggle").click(function () {
        var icon = $(this);
        icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
        icon.closest(".portlet").find(".portlet-content").toggle();
    });
}