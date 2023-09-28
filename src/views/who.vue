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
         <div><navigationB/></div>
         <div><Data/></div>
     <div><Footer/></div>
    </div>
</template>

<script>
import navigationB from '@/components/navigationB.vue';
import Footer from '@/components/Footer.vue';
import Data from '@/components/Data.vue';
    export default {
        components: {
            navigationB,
        Footer,
        Data,
    }
    }
</script>

<style scoped>
</style>