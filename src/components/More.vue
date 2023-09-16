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
        <!-- START MORE -->
        <div class="more">
          <div class="container">
            <div class="heading">
              <h2>الأكثر<span class="gradient"> قراءة</span></h2>
              <a href="">عرض الجميع</a>
            </div>
            <div class="list">
              <div class="box">
                <div class="image">
                  <img src="../assets/Rectangle_13.png" alt="" />
                </div>
                <div class="p">
                  <p>2 فبراير <span>5 دقائق قراءة</span></p>
                  <p>كتب بواسطة : أحمد السيد</p>
                </div>
                <h2>اليوم العالمي للغة العربية</h2>
              </div>
              <div class="box">
                <div class="image">
                  <img src="../assets/Rectangle_14.png" alt="" />
                </div>
                <div class="p">
                  <p>2 فبراير <span>5 دقائق قراءة</span></p>
                  <p>كتب بواسطة : أحمد السيد</p>
                </div>
                <h2>كتب تعريفك بتراث وتقاليد الشعوب</h2>
              </div>
              <div class="box">
                <div class="image">
                  <img src="../assets/Rectangle_15.png" alt="" />
                </div>
                <div class="p">
                  <p>2 فبراير <span>5 دقائق قراءة</span></p>
                  <p>كتب بواسطة : أحمد السيد</p>
                </div>
                <h2>جولة في عالم الأدب العربي</h2>
              </div>
            </div>
          </div>
        </div>
        <!-- END MORE -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
/* START MORE */
.more {
  padding-bottom: var(--main-padding);
}

.more .container .heading {
  display: flex;
  justify-content: space-between;
  margin-bottom: 140px;
}
.more .container .heading h2 {
  font-size: 40px;
}
@media (max-width: 767px) {
  .more .container .heading h2 {
    font-size: 25px;
  }
  .more .container .heading {
    justify-content: space-evenly;
  }
}
.more .container .heading a {
  color: var(--main-color);
  font-size: 20px;
}
@media (max-width: 767px) {
  .more .container .heading a {
    margin-top: 10px;
  }
}
.more .container .list {
  display: flex;
}
@media (max-width: 991px) {
  .more .container .list {
    display: flex;
    justify-content: center;
  }
  .more .container .list .box img {
    width:98%;
  }
}
@media (max-width: 767px) {
  .more .container .list {
    display: flex;
    justify-content: center;
  }
  .more .container .list .box {
    width: 98%;
  }
  .more .container .list .box img {
    width: 95%;
  }
  
}
.more .container .list .box {
  margin-left: 20px;
  margin-right: 20px;
  width: 100%;

}
.more .container .list .box .p {
  display: flex;
  justify-content: space-between;
  color: var(--main-paragraph-color);
  margin-bottom: 15px;
}
.more .container .list .box h2 {
  font-weight: normal;
  font-size: 21px;
}

/* END MORE */

</style>