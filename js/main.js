function moove (){
    if(document.getElementById('menu').classList.contains('right'))
    {
        document.getElementById('menu').classList.replace('right','left');
    }
    else
    {
        document.getElementById('menu').classList.replace('left','right');
    }
}

function getValue(){
    // Sélectionner l'élément input et récupérer sa valeur
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("telephone").value;
    var message = document.getElementById("message").value;
    var date = document.getElementById("date").value;
    var sexe = document.getElementById("sexe").value;
    // Afficher la valeur
    alert(nom + " " + prenom + " " + email + " " + telephone + " " + message + " " + date + " " + sexe );
}

