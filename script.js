function validerFormulaire() {
    let montant = parseFloat(document.getElementById("montant").value);
    let personnes = parseInt(document.getElementById("personnes").value);

    let valid = true;

    if (isNaN(montant) || montant <= 0) {
        document.getElementById("erreurMontant").textContent = "Veuillez entrer un montant positif.";
        valid = false;
    } else {
        document.getElementById("erreurMontant").textContent = "";
    }

    if (isNaN(personnes) || personnes <= 0) {
        document.getElementById("erreurPersonnes").textContent = "Veuillez entrer un nombre de personnes > 0.";
        valid = false;
    } else {
        document.getElementById("erreurPersonnes").textContent = "";
    }

    return valid;
}

function calculerPourboire(pourcentage) {
    if (!validerFormulaire()) return;

    let montant = parseFloat(document.getElementById("montant").value);
    let personnes = parseInt(document.getElementById("personnes").value);

    let pourboireTotal = montant * (pourcentage / 100);
    let pourboireParPersonne = pourboireTotal / personnes;

    document.getElementById("totalPourboire").textContent = pourboireTotal.toFixed(2) + " DH";
    document.getElementById("parPersonne").textContent = pourboireParPersonne.toFixed(2) + " DH";
}

// Fonctions appelées par les boutons
function calculerPourboire5()  { calculerPourboire(5); }
function calculerPourboire10() { calculerPourboire(10); }
function calculerPourboire15() { calculerPourboire(15); }
function calculerPourboire25() { calculerPourboire(25); }
function calculerPourboire50() { calculerPourboire(50); }
