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


.container{
  height: 350px;
  width: 350px;
  border-radius: 50%;
  position: absolute;
  margin: auto;
  top:0;
  bottom: 0;
  left:0;
  right: 0;
}


@keyframes smoke{
  50%{
    transform: translateX(-5px) translateY(-10px);
    opacity: 0.5;
  }
  100%{
    transform: translateX(10px) translateY(-20px);
    opacity: 0;
  }
}
@-webkit-keyframes smoke{
  50%{
    -webkit-transform: translateX(-5px) translateY(-10px);
    opacity: 0.5;
  }
  100%{
    -webkit-transform: translateX(10px) translateY(-20px);
    opacity: 0;
  }
}
.s1,.s2,.s3{
  background-color: #423f3f;
  height: 10px;
  opacity: 0.2;
  border-radius: 10px;
  position: relative;
  margin-bottom: 2px;
}
.s1{
  width:35px; 
}
.s2{
  width: 27px;
  left:8px;
}
.s3{
  height:7px;
  width: 15px;
  left:25px;
}
.snowfall{
  background: url(https://i.imgur.com/T0mBFg2.png);
  background-size: 350px 200px;
  background-repeat: repeat;
  height: 350px;
  width: 350px;
  position:relative;
  bottom: 493px;
  border-radius: 50%;
  animation:snowfall 5s linear forwards infinite; 
  -webkit-animation:snowfall 5s linear forwards infinite; 
}
@keyframes snowfall{
  0%{
    background-position: 0 0;
  }
  20%{
    background-position: 20px 20px;
  }
  40%{
    background-position: 40px 40px;
  }
  60%{
    background-position: 60px 60px;
  }
  80%{
    background-position: 80px 80px;
  }
  100%{
    background-position: 100px 100px;
  }
}
@-webkit-keyframes snowfall{
  0%{
    background-position: 0 0;
  }
  20%{
    background-position: 20px 20px;
  }
  40%{
    background-position: 40px 40px;
  }
  60%{
    background-position: 60px 60px;
  }
  80%{
    background-position: 80px 80px;
  }
  100%{
    background-position: 100px 100px;
  }
}
.cover{
  background-color: rgba(255,255,255,0.2);
  height: 350px;
  width: 350px;
  border-radius: 50%;
  position: relative;
  bottom:842px;
}
.bottom{
  background-color: #c1272e;
  height:70px; 
  width: 260px;
  position: relative;
  bottom:880px;
  left:47px;
}
.bt1,.bt2{
  background-color: #d33c3c;
  height: 20px;
  width:280px;
  position: relative;
  right: 10px;
  border-radius: 10px; 
}
.bt1{
  bottom: 12px;
}
.bt2{
  top:40px;
}
.sn{
  background-color: white;
  width: 40px;
  height: 5px;
  transform: skew(30deg);
  -webkit-transform: skew(30deg);
  border-radius: 5px;
  position: relative;
  bottom: 36px;
  left:5px;
}
.sn1{
  background-color: white;
  width: 30px;
  height: 5px;
  transform: skew(30deg);
  -webkit-transform: skew(30deg);
  border-radius: 5px;
  position: relative;
  bottom: 41px;
  left:55px;
}
.dr1,.dr2,.dr3,.dr4{
  background-color: white;
  border-radius: 5px;
  position: relative;
  height: 10px;
  width: 4px;
}
.dr1{
  top:4px;
  left:5px;
}
.dr2{
  bottom:8px;
  left:15px;
}
.dr3{
  height: 8px;
  width: 8px;
  border-radius: 50%;
  left:29px;
  bottom:19px;
}
.dr4{
  left:22px;
}
.snw1{
  background-color: white;
  height: 15px;
  width: 25px;
  position: relative;
  bottom:30px;
  left:7px;
  border-radius: 20px 20px 0 0;
}
.snw2{
  background-color: white;
  height: 12px;
  width: 12px;
  position: relative;
  bottom:40px;
  left:31px;
  border-radius: 50%
}
.sh1,.sh2,.sh3,.sh4,.sh5{
  background-color: #d33c3c;
  height: 6px;
  transform: skew(30deg);
  -webkit-transform: skew(30deg);
  width: 23px;
  border-radius: 15px;
  position: relative;
}
.sh1{
  bottom:56px;
  left:70px;
}
.sh2{
  bottom:68px;
  left:2px;
}
.sh3{
  bottom:95px;
  left:47px;
}
.sh4{
  bottom:108px;
  left:6px;
}
.sh5{
  bottom:95px;
  left:38px;
}
.fence{
  position: relative;
  bottom: 1008px;
  left:103px;
}
.fn1,.fn2,.fn3{
  background-color: #b40f0c;
  height: 25px;
  width: 7px;
  position: relative;
  border-radius: 25px 25px 0 0;
}
.fn2{
  bottom:25px;
  left:12px;
}
.fn3{
  bottom:50px;
  left:24px;
}
.screw{
  background-color: #cccccc;
  height: 3px;
  width: 3px;
  position: relative;
  border-radius: 50%;
  left:1.6px;
  top:11px;
  z-index: 2;
}
.stck{
  background-color: #7d151f;
  position: relative;
  width: 46px;
  height: 6px;
  right: 8px;
  bottom:65px;
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


