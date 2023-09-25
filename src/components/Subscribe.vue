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
        <!-- START SUBSCRIBE -->
        <div class="subscribe">
          <div class="container">
            <div class="text">
              <h2>اشترك ليصلك جميع المقالات</h2>
              <p>
                ابق علي اطلاع مع مقالتنا فور نزولها مع خدمة الرسائل البريدية هذه
                الخدمة مجانية تماماً
              </p>
            </div>
            <form action="">
              <div class="cont">
                <input type="submit" value="إشترك" />
                <input type="text" placeholder="البريد الإلكتروني" />
              </div>
            </form>
          </div>
        </div>
        <!-- END SUBSCRIBE -->
   
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
/* START SUBSCRIBE */
.subscribe {
  padding-top: var(--main-padding);
  padding-bottom: var(--main-padding);
}
.subscribe .container {
  border-top: 2px solid var(--border-color);
  text-align: center;
}
.subscribe .container h2 {
  padding: 20px;
  font-weight: normal;
  font-size: 48px;
}
@media(max-width:767px){

  .subscribe .container h2 {
    font-size: 30px;
  }
}

.subscribe .container p {
  padding: 15px;
  color: var(--main-paragraph-color);
  margin-bottom: 15px;
}
.subscribe .container form {
  padding: 25px;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  justify-content: center;
}
.subscribe .container form .cont {
  display: flex;
}
.subscribe .container form [type="text"] {
  padding: 15px;
  width: calc(100% - 70px);
  border-right: none;
  max-width: 100%;
}
.subscribe .container form [type="submit"] {
  padding: 15px;
  background-color: var(--main-color);
  color: white;
  border-left: none;
  max-width: 70px;
}

/* END SUBSCRIBE */

</style>