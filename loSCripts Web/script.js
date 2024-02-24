faker.locale = "fr";

function genererFausseIdentite() {
    const prenom = faker.name.firstName();
    const email = faker.internet.email();
    const telephone = faker.phone.phoneNumber();
    const adresse = faker.address.streetAddress() + ", " + faker.address.city() + ", " + faker.address.country();

    const fausseIdentite = `
        Prénom généré : ${prenom} <br>
        Adresse e-mail générée : ${email} <br>
        Numéro de téléphone généré : ${telephone} <br>
        Adresse générée : ${adresse} <br>
        <button onclick="retourArriere()">Retour en arrière</button>
    `;

    document.getElementById("terminal").innerHTML = fausseIdentite;
}

// mot de passe

function genererMotDePasse() {
    const longueurMotDePasse = 12; // Vous pouvez ajuster la longueur du mot de passe selon vos besoins
    const motDePasse = faker.internet.password(longueurMotDePasse);

    const messageMotDePasse = `
        Mot de passe généré : ${motDePasse} <br>
        <button onclick="retourArriere()">Retour en arrière</button>
    `;

    document.getElementById("terminal").innerHTML = messageMotDePasse;
}






function retourArriere() {
    //  le contenu du terminal
    document.getElementById("terminal").innerHTML = `
        <div id="options">
            <p>1. Générer une fausse identité</p>
            <p>2. Localiser numéro de téléphone</p>
            <p>3. Générer un mot de passe sécurisé</p>
            <p>4. Suivre les actualités de loSCripts</p>
            <p>5. Pour voir l'adresse IP de cet appareil</p>
            <p>6. Utiliser la fonctionnalité Google Dork</p>
        </div>
        <input type="text" id="terminal-input" onkeydown="handleCommand(event)">
    `;
}

function handleCommand(event) {
    if (event.key === "Enter") {
        let commandInput = document.getElementById("terminal-input");
        if (commandInput) {
            let command = commandInput.value;
            switch (command) {
                case "1":
                    genererFausseIdentite();
                    break;
                case "2":
                    // Ajoutez la logique pour la deuxième option
                    break;
                case "3":
                    genererMotDePasse();
                break;
                // Ajoutez d'autres cas au besoin
                default:
                    alert("Commande non reconnue");
                    break;
            }
            commandInput.value = "";
        } else {
            console.error("Element with ID 'terminal-input' not found.");
        }
    }
}
