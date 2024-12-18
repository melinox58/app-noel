<script setup>


</script>

<template>
    <div class="container">
      <h2>Mentions légales (fictives)</h2>
      <p>Éditeur du site : Le site internet OsezNoël (ci-après « le Site ») est édité par :</p>
      <ul>
          <li>Nom de l'entreprise : Mélanie et Nicolas S.A.S.</li>
          <li>Adresse : 123 Rue des Festivités, 75000 Paris, France</li>
          <li>Tél : 01 23 45 67 89</li>
          <li>Email : contact@calendrieraventinactif.com</li>
          <li>Capital social : 50 000€</li>
          <li>Numéro d'immatriculation : RCS Paris 123 456 789</li>
      </ul>
  
      <p>Directeur de la publication : Monsieur/Madame Jean Dupont<br>
      Président(e) de Calendrier Interactif S.A.S.</p>
  
      <p>Hébergement : Le Site est hébergé par :</p> 
  
      <ul>
          <li>Nom de l'hébergeur : HébergementWeb S.A.</li>
          <li>Adresse : 456 Rue des Hébergeurs, 75000 Paris, France</li>
          <li>Téléphone : 01 98 76 54 32</li>
          <li>Site web : www.hebergeurweb.com</li>
      </ul>
  
      <p>Propriété intellectuelle : Le contenu du Site, incluant les textes, images, graphiques, logos, vidéos, et autres éléments, est la propriété exclusive de Calendrier Interactif S.A.S. ou de ses partenaires. Toute reproduction, représentation, modification, publication, ou exploitation non autorisée du contenu du Site est interdite sans le consentement préalable écrit de Calendrier Interactif S.A.S..</p>
  
      <p>Protection des données personnelles : Le respect de votre vie privée est important pour nous. Nous collectons des données personnelles uniquement dans le cadre de l'utilisation du Site et pour les finalités suivantes :</p>
  
      <p>Création et gestion de votre calendrier de l'Avent interactif.<br>
      Envoi d'informations liées à l'utilisation du Site.<br>
      Amélioration de nos services.</p>
  
      <p>Collecte des données : Les données collectées peuvent inclure votre nom, prénom, adresse email, et autres informations nécessaires à l’utilisation du Site. Ces données sont traitées conformément à notre politique de confidentialité, que vous pouvez consulter ici. Nous ne partageons pas vos données personnelles avec des tiers sans votre consentement, sauf en cas de nécessité légale ou pour assurer la sécurité du Site.</p>
  
      <p>Droits des utilisateurs : Conformément à la législation en vigueur, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition sur vos données personnelles. Pour exercer ces droits, veuillez nous contacter à l'adresse email contact@calendrieraventinactif.com.</p>
  
      <p>Cookies : Le Site utilise des cookies pour améliorer votre expérience de navigation. Ces cookies sont utilisés pour :</p>
  
      <ul>
          <li>Mémoriser vos préférences de navigation.</li>
          <li>Analyser l'utilisation du Site.</li>
      </ul>
  
      <p>Vous pouvez configurer votre navigateur pour refuser l’utilisation des cookies, mais certaines fonctionnalités du Site pourraient être affectées.</p>
  
      <p>Responsabilité : Calendrier Interactif S.A.S. s'engage à fournir un accès sécurisé au Site et à ses fonctionnalités. Cependant, nous ne pouvons être tenus responsables des interruptions ou dysfonctionnements liés à des événements extérieurs (pannes techniques, problèmes de serveur, etc.).</p>
  
      <p>Conditions d'utilisation : L’utilisation du Site implique l'acceptation des présentes mentions légales. En accédant au Site, vous vous engagez à respecter les conditions suivantes :</p>
  
      <ul>
          <li>Vous êtes responsable de la création, gestion et partage de votre calendrier de l'Avent.</li>
          <li>Vous vous engagez à ne pas utiliser le Site à des fins illégales ou nuisibles.</li>
      </ul>
  
      <p>Modifications des mentions légales : Calendrier Interactif S.A.S. se réserve le droit de modifier ou mettre à jour les présentes mentions légales à tout moment. Toute modification sera publiée sur cette page et prendra effet immédiatement après sa publication.</p>
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