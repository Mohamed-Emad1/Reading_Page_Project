<template>
  <title>Qorra</title>
      <link rel="stylesheet" href="../assets/font.css" />
      <link rel="stylesheet" href="../assets/normalize.css" />
     <link rel="preconnect" href="https://fonts.googleapis.com" />
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
     <link
       href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&family=Open+Sans:wght@400;700&family=Work+Sans:wght@200;300;400;500;600;700;800&display=swap"
       rel="stylesheet"
     />
    <div class="home">

       <div><navPar/></div>
         <div><Landing/></div>
         <div><Section/></div>
         <div><New/></div>
         <div><More :pageType="pageType"/></div>
         <div><Subscribe/></div>
       <div><TheEnd/></div>

    </div>
</template>

<script>
import navPar from '@/components/navPar.vue';
import TheEnd from '@/components/TheEnd.vue';
import Landing from '@/components/Landing.vue';
import More from '@/components/More.vue';
import New from '@/components/New.vue';
import Section from '@/components/Section.vue';
import Subscribe from '@/components/Subscribe.vue';

export default {
    name: 'الرئيسية',
    components: {
      navPar,
      TheEnd,
      Landing,
      More,
      Section,
      New,
      Subscribe  
  },
  data() {
    return {
      pageType: 'heading' // or 'heading-new' or any other value
    };
  }       
        
    }
</script>
