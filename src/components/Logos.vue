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
            <!-- START LOGOS -->
                   <div class="logos">
             <div class="container">
                 <h2>شركاء <span class="gradient">النجاح</span> </h2>
                 <div class="background">
                     <div class="image1">
                     <img src="../assets/alex2.png" alt="">
                 </div>
                 <div class="image2">
                     <img src="../assets/madarek2.png" alt="">
                 </div>
                 <div class="image3">
                     <img src="../assets/mezza2.png" alt="">
                 </div>
                 <div class="image4">
                     <img src="../assets/arabic2.png" alt="">
                 </div>
                 </div>
             </div>
         </div>
        <!-- END LOGOS -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                meza: false,
                alex: false,
                arabic: false,
                medrak:false,
                
            }
    },
        change1() {
            
        },
    }
</script>

<style scoped>
/* START LOGOS */
.logos{
    padding-bottom: var(--main-padding);
    padding-top: var(--main-padding);
}
.logos .container h2{
    text-align: center;
    margin-bottom: 70px;
    font-size: 48px;
    font-weight: 600;
}
.logos .container .background{
    display: flex;
    justify-content: space-evenly;
    background-color: #D9D9D91F;
    padding-top: 40px;
    padding-bottom: 40px;
}
.logos .container .background .image1 img{
  filter: grayscale(100%);
}
.logos .container .background .image2 img{
  filter: grayscale(100%);
}
.logos .container .background .image3 img{
  filter: grayscale(100%);
}
.logos .container .background .image4 img{
  filter: grayscale(100%);
}



.logos .container .background .image1:hover img{
  filter: grayscale(0%);
  -webkit-filter: grayscale(0%);
}
.logos .container .background .image2:hover img{
  filter: grayscale(0%);
  -webkit-filter: grayscale(0%);
}
.logos .container .background .image3:hover img{
  filter: grayscale(0%);
  -webkit-filter: grayscale(0%);
}
.logos .container .background .image4:hover img{
  filter: grayscale(0%);
  -webkit-filter: grayscale(0%);
}
@media(max-width:767px){
    .logos .container .background{
        width: 100%;
        align-items: center;
    }
    .logos .container .background img{
        height: 60px;
    }
}

/* END LOGOS */

</style>