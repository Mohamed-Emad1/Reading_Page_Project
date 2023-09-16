<template >
     <title>Contact Qorra</title>
     <link rel="stylesheet" href="../assets/font.css" />
     <link rel="stylesheet" href="../assets/normalize.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&family=Open+Sans:wght@400;700&family=Work+Sans:wght@200;300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <div class="who">
         <div><navPar/></div>
         <div><Data/></div>
     <div><TheEnd/></div>
    </div>
</template>

<script>
import navPar from '@/components/navPar.vue';
import TheEnd from '@/components/TheEnd.vue';
import Data from '@/components/Data.vue';
    export default {
        components: {
        navPar,
        TheEnd,
        Data,
    }
    }
</script>

<style scoped>
</style>