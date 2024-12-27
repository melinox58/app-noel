<template>
  <div>
      <h1>Rejoignez Osez Noël !!</h1>

    <h2>Créez votre compte ou identifiez-vous pour commencer
        à personnaliser votre calendrier
        et à vivre l'expérience magique de Noël !</h2>
    
    <section class="register">
      <div>
        <h3>S'enregistrer</h3>
        <form @submit.prevent="createUser">
          <input v-model="newUser.name" placeholder="Nom" required />
          <input v-model="newUser.firstname" placeholder="Prénom" required />
          <input v-model="newUser.email" placeholder="Email" required />
          <input v-model="newUser.password" type="mot de passe" placeholder="Password" required />
          <button class="btn" type="submit">Valider</button>
        </form>
      </div>
    </section>
        <LoginComponent />
  </div>
</template>

<style scoped>
h1{
  color: rgb(196, 2, 2);
  text-shadow: 0px 0px 5px rgb(196, 2, 2);
  transform: rotate(-10deg);
  margin-bottom: 17%;
  font-size: 1.6rem;
}

h2{
  font-size: 0.8rem;
  margin-bottom: 8%;
  width: 70vw;
}

h3{
  font-size: 0.9rem;
  color: blue;
  margin-top: 8%;
}

input{
  color: blue;
  height: 3vh;
  font-size: 0.8rem;
}

.register{
  display: flex;
  margin-top: -8%;
}

form{
  display: flex;
  flex-direction: column;
  width: 65vw;
  align-items: center;
}

.content-container > main:nth-child(2) > div:nth-child(1) {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15%;
}

.btn{
  font-size: 0.8rem;
  display: flex;
  width: 30vw;
  margin-top: 5%;
  background-image: url('@/assets/img/background/preview.webp');
  background-size: cover;
  color:white;
  border-radius: 20px;
  height: 4vh;
  justify-content: center;
  align-items: center;
  background-position: center;
  text-shadow:
    1px 1px 0 black,
    -1px 1px 0 black,
    1px -1px 0 black,
    -1px -1px 0 black; /* Ombres pour chaque direction */
}

@media only screen and (min-width: 768px){
h1{
  margin-bottom: 0%;
  font-size: 2.2rem;
}

h2{
  margin-top: 7%;
  font-size: 1.4rem;
  width: 50vw;
  margin-bottom: 5%;
  margin-left: 11%;
}

h3{
  font-size: 1.2rem;
  margin-top: 5%;
}

input{
  width: 30vw;
  font-size: 1rem;
}

form{
  gap: 5%;
}

.btn{
  font-size: 1.2rem;
  width: 10vw;
  margin-top: 2%;
  margin-bottom: 4%;
}

}

</style>

<script setup>
import { ref, onMounted } from 'vue'; // Ajout de onMounted pour exécuter des actions au montage du composant
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter(); // Instance du routeur

// Références réactives
const newUser = ref({
  name: '',
  firstname: '',
  email: '',
  password: ''
});
const users = ref([]);
const loading = ref(false); // Indicateur de chargement
const errorMessage = ref(''); // Message d'erreur pour affichage ou debug

// Fonction pour créer un utilisateur
const createUser = async () => {
  loading.value = true; // Démarrage du chargement
  errorMessage.value = ''; // Réinitialisation des erreurs
  try {
    const response = await axios.post('http://localhost:5000/users', newUser.value, {
      headers: { 'Content-Type': 'application/json' }
    });
    users.value.push(response.data);
    alert('Utilisateur créé avec succès !');
    router.push('/dashUser'); // Redirection vers la route du tableau de bord utilisateur
  } catch (error) {
    console.error('Erreur lors de la création de l’utilisateur:', error);
    errorMessage.value = error.response?.data?.message || 'Une erreur est survenue.';
    alert('Une erreur est survenue : ' + errorMessage.value);
  } finally {
    loading.value = false; // Fin du chargement
  }
};

// Fonction pour récupérer tous les utilisateurs
const fetchUsers = async () => {
  loading.value = true; // Démarrage du chargement
  errorMessage.value = ''; // Réinitialisation des erreurs
  try {
    const response = await axios.get('http://localhost:5000/users', {
      headers: { 'Content-Type': 'application/json' }
    });
    users.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    errorMessage.value = error.response?.data?.message || 'Erreur lors de la récupération des utilisateurs.';
    alert('Erreur lors de la récupération des utilisateurs : ' + errorMessage.value);
  } finally {
    loading.value = false; // Fin du chargement
  }
};

// Exécuter fetchUsers au montage du composant
onMounted(fetchUsers);
</script>

