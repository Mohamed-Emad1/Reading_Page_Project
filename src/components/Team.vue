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
          <!-- START TEAM -->
          <div class="team">
              <div class="container">
                  <h2> فريق <span class="gradient">العمل</span> </h2>
                  <div class="list">
                      <div class="box">
                          <img src="../assets/Rectangle_652.png" alt="person1">
                          <h2>م. محمد علاء</h2>
                          <p>رئيس المبادرة لسنة 2023</p>
                      </div>
                      <div class="box">
                          <img src="../assets/Rectangle_651.png" alt="person2">
                          <h2>م. خالد حسن</h2>
                          <p>منسق بلجنة الإعلام لسنة 2023</p>
                      </div>
                      <div class="box">
                          <img src="../assets/Rectangle_650.png" alt="person3">
                          <h2>أ. سيف الدين سامر</h2>
                          <p>مستشار لجنة الإعلام لسنة 2023</p>
                      </div>
                      <div class="box">
                          <img src="../assets/Rectangle_649.png" alt="person4">
                          <h2>م. يوسف التركي</h2>
                          <p>رئيس التقييم بلجنة التقييم والتطوير لسنة 2023</p>
                      </div>
                  </div>
              </div>
          </div>
          <!-- END TEAM -->

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
/* START TEAM */
.team{
    padding-top: var(--main-padding);
    padding-bottom: var(--main-padding);
}
.team .container > h2{
    margin-bottom: 70px;
    text-align: center;
    font-family: Cairo;
    font-size: 48px;
    font-weight: 600;
    line-height: 90px;
    letter-spacing: 0em;
    text-align: center;
}
.team .container .list{
    display: flex;
    justify-content: space-between;
    max-width: 1150px;
}
.team .container .list .box{
    margin-left: 10px;
    margin-right: 10px;
    max-width: 21%;
}
.team .container .list .box img{
    max-width: 100%;
}
.team .container .list .box h2{
    font-size: 32px;
    font-weight: 600;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: right;
}
.team .container .list .box p{
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: right;
    color: var(--main-paragraph-color);
}
/* END TEAM */
</style>