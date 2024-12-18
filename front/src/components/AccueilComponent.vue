<template>
    <h1>Plongez dans la magie de Noël<br>
        avec notre Calendrier de l'Avent numérique !</h1>

    <h2>Un cadeau chaque jour, à partager et personnaliser avec vos proches.</h2>
    <a class="btn" href="/register">Créer votre calendrier maintenant</a>
    <p>Ouvrez chaque jour une nouvelle surprise !<br>
        Découvrez un cadeau numérique dans votre calendrier chaque jour de décembre.</p>
    <p>Personnalisez votre calendrier de l'Avent avec vos surprises préférées.</p>
    <p>Partagez votre calendrier avec vos amis.</p>
        
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div 
        v-for="(image, index) in images" 
        :key="index" 
        :class="['carousel-item', { active: index === 0 }]">
        <img :src="image.src" :alt="image.alt" class="d-block w-50" />
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>

</template>



<style scoped>

h1{
    color: rgb(196, 2, 2);
    opacity: 100%;
    font-size: 1.2rem;
    padding-top: 4%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

h2{
    font-size: 1rem;
    color: black;
}

p{
    font-size: 0.6rem;
    width: 50vh;
    display: flex;
    justify-content: center;
    color: black;
    margin: 0;
}

.carousel-item{
    padding: 5%;
}

.btn{
  display: flex;
  margin: 2% 0 0;
  width: 55vw;
  background-image: url('@/assets/img/background/preview.jpg');
  background-size: cover;
  border-radius: 20px;
  height: 5%;
  justify-content: center;
  align-items: center;
  background-position: center;
  text-decoration: none;
  font-size: 0.6rem;
  color:white;
  text-shadow: 
    1px 1px 0 black, 
    -1px 1px 0 black, 
    1px -1px 0 black, 
    -1px -1px 0 black; /* Ombres pour chaque direction */
}

@media only screen and (min-width: 768px){

    .carousel-item{
        width: 30vw;
        padding: 0;
        margin-bottom: -1%;
        margin-top: 4%;
    }

    h1{
        font-size: 2.2rem;
        padding: 0;
        margin-bottom: 1%;
    }

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

    .btn{
        width: 27vw;
        height: 9%;
        margin: 0 0 2% 0;
        font-size: 1.4rem;
    }

}

</style>

<script setup>
const images = [
        { src: require('@/assets/img/background/3082604.jpg'), alt: 'Image 1' },
        { src: require('@/assets/img/background/6205121.jpg'), alt: 'Image 2' },
        { src: require('@/assets/img/background/7962235.jpg'), alt: 'Tête de cert déguisé en arbre de Noël' },
      ]
</script>


