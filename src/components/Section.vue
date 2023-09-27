<template>
       <link rel="stylesheet" href="../assets/font.css" />
       <link rel="stylesheet" href="../assets/normalize.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
       <link
         href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&family=Open+Sans:wght@400;700&family=Work+Sans:wght@200;300;400;500;600;700;800&display=swap"
         rel="stylesheet"
       />
    <div>
        <!-- START SECTION -->
        <div class="sections">
          <div class="container">
            <h3 class="head"><span class="gradient">الأقسام</span></h3>
            <div class="gallery">
              
              <div class="list">
                <swiper class="ls" :slides-per-view="isMobile ? 2 : 4" :space-between="20" :slidesPerGroup="1" :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange" navigation>
                
                  <swiper-slide >
                <div class="element">
                  <img class="move" src="../assets/Rectangle_10.png" alt="" />
                  
                  <h2>تاريخ</h2>
                </div>
              </swiper-slide>
                <swiper-slide>
                <div class="element">
                  <img class="move" src="../assets/Rectangle_9.png" alt="" />
                
                  <h2>أدب</h2>
                </div>
              </swiper-slide>
                <swiper-slide>
                <div class="element">
                  <img class="move" src="../assets/Rectangle_8.png" alt="" />
      
                  <h2>شعر</h2>
                </div>
              </swiper-slide>
                <swiper-slide>
                <div class="element">
                  <img class="move" src="../assets/Rectangle_7.png" alt="" />
                
                  <h2>فنون</h2>
                </div>
              </swiper-slide>
                <swiper-slide>
                <div class="element">
                  <img class="move" src="../assets/Rectangle_6.png" alt="" />
                
                  <h2>فلسفة</h2>
                </div>
              </swiper-slide>
              </swiper>
              </div>
  
            </div>
          </div>
        </div>
        <!-- END SECTION -->
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const isMobile = ref(window.innerWidth <= 991);

    const onSwiper = (swiper) => {
      console.log(swiper);
    };

    const onSlideChange = () => {
      console.log('slide change');
    };

    onMounted(() => {
      window.addEventListener('resize', updateIsMobile);
    });

    const updateIsMobile = () => {
      isMobile.value = window.innerWidth <= 991;
    };

    return {
      isMobile,
      onSwiper,
      onSlideChange,
      modules: [Navigation],
    };
  },
};
</script>

<style scoped>
.sections {
  padding-top: var(--main-padding);
  padding-bottom: var(--main-padding);
}

.sections .container .head {
  font-family: Cairo;
  font-size: 48px;
  font-weight: 600;
  line-height: 90px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 20px;
}
@media(max-width:767px){
  .sections .container .head {
    font-size: 38px;
    margin-left: 65px;
  }
}
.sections .container .gallery {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.sections .container .list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.sections .container .list .swiper{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
@media (max-width: 767px) {
  /* .sections .container .list .ls{
    max-width: 100%;
  } */
  .sections .container .list .ls .swiper-slide {
    display: flex;
    flex-direction: row;
    width: 50%;
  }
}

@media (max-width: 767px) {
  .sections .container .list .element img {
    max-width: 100%;
  }
}
.sections .container .list .element img {
  position: relative;
  filter: brightness(50%); 
}
.sections .container .list .element img:hover {
  filter: brightness(100%);
}
.sections .container .gallery > img:nth-child(1) {
  margin-left: 25px;
}
@media(max-width:767px){
  .sections .container .gallery{
    max-width: 90%;
    justify-content: center;
  }
  .sections .container .gallery  img:nth-child(1) {
    margin-left: -10px;
  }
  .sections .container .gallery :last-child {
    margin-right: -10px;
  }
}
.sections .container .list .element {
  margin-left: 15px;
  position: relative;
}

.sections .container .list .element h2 {
  position: absolute;
  left: 40%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  color: white;
}
@media (min-width: 767px)  {
  .sections .container .list .element h2 {
    left:70%;
    /* margin-left: 20px; */
  }
}

@media (min-width: 992px)  {
  .sections .container .list .element h2 {
    left: 50%;
    /* margin-left: -15px; */
  }
}
@media (min-width: 1200px)  {
  .sections .container .list .element h2 {
    left: 60%;
    top: 47%;
    /* margin-left: 25px; */
  }
}
.sections .container .list .element img {
  position: relative;
}
.sections .container .list .element img:hover{
  z-index: 12;
}
.sections .container .list .element h2{
  z-index: 17;
}


</style>