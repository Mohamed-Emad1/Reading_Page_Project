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
              <!-- <img src="../assets/Arrow_2.png" alt="" id="arrow" /> -->
              <div class="list">
                <div class="element">
                  <img src="../assets/Rectangle_10.png" alt="" />
                  <div class="overlay">
                    <img src="../assets/Rectangle_18.png" alt="" />
                  </div>
                  <h2>تاريخ</h2>
                </div>
                <div class="element">
                  <img src="../assets/Rectangle_9.png" alt="" />
                  <div class="overlay">
                    <img src="../assets/Rectangle_18.png" alt="" />
                  </div>
                  <h2>أدب</h2>
                </div>
                <div class="element">
                  <img src="../assets/Rectangle_8.png" alt="" />
                  <div class="overlay">
                    <img src="../assets/Rectangle_18.png" alt="" />
                  </div>
                  <h2>شعر</h2>
                </div>
                <div class="element">
                  <img src="../assets/Rectangle_7.png" alt="" />
                  <div class="overlay">
                    <img src="../assets/Rectangle_18.png" alt="" />
                  </div>
                  <h2>فنون</h2>
                </div>
                <div class="element">
                  <img src="../assets/Rectangle_6.png" alt="" />
                  <div class="overlay">
                    <img src="../assets/Rectangle_18.png" alt="" />
                  </div>
                  <h2>فلسفة</h2>
                </div>
              </div>
              <!-- <img src="../assets/Arrow_1.png" alt="" id="bearrow" /> -->
            </div>
          </div>
        </div>
        <!-- END SECTION -->
    </div>
</template>

<script>
    export default {
        mounted() {
          let scrollable = document.querySelector(".list");
let arrowAfter = document.querySelector(".arrow");
let arrowBefore = document.querySelector(".bearrow");


scrollable.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollable.scrollLeft += evt.deltaY;
    scrollable.style.scrollBehavior = "smooth";
});


arrowAfter.addEventListener("click", () =>{
    scrollable.scrollLeft += 1046;
});

arrowBefore.addEventListener("click", () =>{
    scrollable.scrollLeft -= 1046;
});
        },
    }
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
  justify-content: space-between;
  align-items: center;
}
.sections .container .list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
@media (max-width: 767px) {
  .sections .container .list {
    width: 200px;
  }
}
.sections .container .gallery > img {
  cursor: pointer;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
}
.sections .container .gallery::-webkit-scrollbar {
  display: none;
}
.sections .container .list > img:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}
.sections .container .gallery > img:nth-child(1) {
  margin-left: 25px;
}
@media(max-width:767px){
  .sections .container .gallery{
    max-width: 100%;
    justify-content: center;
  }
  .sections .container .gallery > img:nth-child(1) {
    margin-left: -62px;
  }
  .sections .container .gallery :last-child {
    margin-right: -58px;
  }
}
.sections .container .list .element {
  margin-left: 15px;
  position: relative;
}

.sections .container .list .element h2 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  color: white;
}
.sections .container .list .element img {
  position: relative;
}
.sections .container .list .element .overlay img {
  position: absolute;
  top: 0px;
  left: 0px;
}

</style>