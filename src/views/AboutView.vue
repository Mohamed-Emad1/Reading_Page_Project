<template>
  <title>Qorra About us</title>
     <link rel="stylesheet" href="../assets/font.css" />
     <link rel="stylesheet" href="../assets/normalize.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&family=Open+Sans:wght@400;700&family=Work+Sans:wght@200;300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
   <div class="راسلنا">
   <div><navigationB/></div> 
      <div><Hint/></div> 
         <div><Logos/></div> 
            <div><Team/></div> 
   <div><Footer/></div>
   </div>
</template>

<script>
import navigationB from '@/components/navigationB.vue';
import Footer from '@/components/Footer.vue';
import Logos from '@/components/Logos.vue';    
import Hint from '@/components/Hint.vue';
import Team from '@/components/Team.vue';
export default {
    components: {
      navigationB,   
        Footer,
        Hint,
        Logos,
        Team,
        }
    }
</script>

<style>



</style>