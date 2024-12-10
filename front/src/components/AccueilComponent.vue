

<template>
    <h1>Plongez dans la magie de Noël<br>
        avec notre Calendrier de l'Avent numérique !</h1>

    <h2>Un cadeau chaque jour, à partager et personnaliser avec vos proches.</h2>
    <p>Ouvrez chaque jour une nouvelle surprise ! Découvrez un cadeau numérique dans votre calendrier chaque jour de décembre.</p>
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
    font-size: 1.1rem;
    padding-top: 4%;
}

h2{
    font-size: 1rem;
    color: black;
}

p{
    font-size: 0.8rem;
    width: 40vh;
    display: flex;
    justify-content: center;
}

.carousel-item{
    padding: 5%;
}

@media only screen and (min-width: 768px){

.carousel-item{
    width: 30vw;
    padding: 0;
}

h1{
    font-size: 2.2rem;
    padding: 0;
    margin-bottom: 3%;
}

h2{
    font-size: 2rem;
    margin-bottom: 5%;
}

p{
    font-size: 1.5rem;
    width: 90vh;
    display: flex;
    justify-content: center;
    color: blue;
}
}

</style>

<script>
export default {
  name: "ImageCarousel",
  data() {
    return {
      images: [
        { src: require('@/assets/img/background/3082604.jpg'), alt: 'Image 1' },
        { src: require('@/assets/img/background/6205121.jpg'), alt: 'Image 2' },
        { src: require('@/assets/img/background/7962235.jpg'), alt: 'Tête de cert déguisé en arbre de Noël' },
      ],
    };
  },
};
</script>


