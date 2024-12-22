<script setup>
</script>

<template>
    <div class="container">
        <h2>Conditions d'utilisation</h2>
        <p>En accédant et en utilisant le site <strong>CalendrierDeLAventInteractif.com</strong> (ci-après « le Site »), vous acceptez de respecter et d'être lié par les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre Site.</p>

        <h3>1. Objet</h3>
        <p>Les présentes conditions d'utilisation ont pour objet de définir les modalités et conditions dans lesquelles vous pouvez utiliser notre Site et ses services. Le Site vous permet de créer un calendrier de l'Avent interactif en ligne personnalisé.</p>

        <h3>2. Accès au Site</h3>
        <p>L'accès au Site est gratuit. Cependant, certaines fonctionnalités ou services peuvent être payants. Vous êtes responsable de l'obtention et de la maintenance de tout équipement nécessaire pour accéder à notre Site, ainsi que des frais de connexion associés.</p>

        <h3>3. Inscription et création de compte</h3>
        <p>Pour utiliser certaines fonctionnalités du Site, vous devez vous inscrire et créer un compte utilisateur. Vous vous engagez à fournir des informations exactes et complètes lors de votre inscription et à mettre à jour ces informations si nécessaire.</p>

        <h3>4. Utilisation du Site</h3>
        <p>Vous vous engagez à utiliser le Site uniquement à des fins légales et conformément aux présentes conditions d'utilisation. Vous ne devez pas :</p>
        <ul>
            <li>Utiliser le Site de manière à enfreindre toute législation ou réglementation en vigueur.</li>
            <li>Abuser des fonctionnalités du Site pour collecter des informations personnelles d'autres utilisateurs sans leur consentement.</li>
            <li>Perturber ou endommager l'accès au Site ou son bon fonctionnement.</li>
            <li>Publier du contenu illégal, offensant, diffamatoire ou nuisible à autrui.</li>
        </ul>

        <h3>5. Propriété intellectuelle</h3>
        <p>Le Site, son contenu (y compris les textes, images, logos, vidéos, et autres éléments), ainsi que son nom, sont protégés par les droits de propriété intellectuelle. Vous n'êtes pas autorisé à reproduire, distribuer, modifier ou créer des œuvres dérivées du Site sans notre consentement préalable écrit.</p>

        <h3>6. Responsabilité</h3>
        <p>Nous mettons tout en œuvre pour assurer l'exactitude et la disponibilité du Site. Toutefois, nous ne pouvons garantir qu'il sera exempt d'erreurs ou de défaillances techniques. Vous acceptez d'utiliser le Site à vos propres risques. Nous déclinons toute responsabilité en cas de dommages directs ou indirects résultant de l'utilisation du Site.</p>

        <h3>7. Liens vers des sites tiers</h3>
        <p>Le Site peut contenir des liens vers des sites tiers. Nous ne contrôlons pas ces sites et ne sommes pas responsables de leur contenu. L'inclusion de ces liens n'implique aucune approbation de notre part.</p>

        <h3>8. Modifications des conditions d'utilisation</h3>
        <p>Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Toute modification sera publiée sur cette page et prendra effet immédiatement après sa publication. Nous vous conseillons de consulter régulièrement cette page pour prendre connaissance des éventuelles mises à jour.</p>

        <h3>9. Suspension ou résiliation de l'accès</h3>
        <p>Nous nous réservons le droit de suspendre ou de résilier votre accès au Site en cas de violation des présentes conditions d'utilisation, sans préavis ni indemnité.</p>

        <h3>10. Loi applicable</h3>
        <p>Les présentes conditions d'utilisation sont régies par la loi française. Tout litige découlant de l'utilisation du Site sera soumis à la juridiction des tribunaux compétents de Paris, France.</p>

        <h3>11. Contact</h3>
        <p>Pour toute question concernant ces conditions d'utilisation, veuillez nous contacter à l'adresse suivante :</p>
        <ul>
            <li><strong>Calendrier Interactif S.A.S.</strong></li>
            <li>123 Rue des Festivités, 75000 Paris, France</li>
            <li>Email : <a href="mailto:contact@calendrieraventinactif.com">contact@calendrieraventinactif.com</a></li>
            <li>Téléphone : 01 23 45 67 89</li>
        </ul>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 95vh; /* Limite la hauteur à la taille de la fenêtre */
    overflow-y: auto; /* Permet le défilement vertical si le contenu dépasse */
    padding: 10px; /* Pour un peu d'espace autour du contenu */
    box-sizing: border-box; /* Assurez-vous que le padding est pris en compte dans la taille */
}

h2{
    font-size: 1rem;
    color: red;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

p{
    font-size: 0.5rem;
    width: 50vh;
    display: flex;
    justify-content: center;
    color: rgb(0, 0, 144);
    margin: 0;
    text-align: center;
}

ul{
    color: black;
    text-align: left;

}

li{
    font-size: 0.4rem;
}


@media only screen and (min-width: 768px){

    h2{
        font-size: 1.8rem;
        margin-bottom: 2%;
    }

    p{
        font-size: 1.3rem;
        width: 130vh;
        display: flex;
        justify-content: center;
    }

    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    li{
    font-size: 1.2rem;
    }
}
</style>