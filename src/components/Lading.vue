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
           <div class="landing">
          <div class="container">
            <form action="">
                <i class="fas fa-search"></i>
              <input type="text" placeholder="بحث" id="search2"/>
            </form>
            <div class="boxes">
              <div class="two">
                <div class="box">
                  <img src="../assets/Rectangle_3.png" alt="" class="img3" />
                  <div class="text">
                    <div class="paragraph">
                      <span>2 فبراير . 5 دقائق قراءة</span>
                      <span>كتب بواسطة احمد السيد</span>
                    </div>
                    <h2 class="normal">تعزيز التفكير النقدي من خلال القراءة</h2>
                  </div>
                </div>
                <div class="box">
                  <img src="../assets/Rectangle_4.png" alt="" class="img4" />
                  <div class="text">
                    <div class="paragraph">
                      <span>2 فبراير . 5 دقائق قراءة</span>
                      <span>كتب بواسطة احمد السيد</span>
                    </div>
                    <h2 class="normal">رجلة ممتعة لاكتشاف التراث</h2>
                  </div>
                </div>
              </div>
              <div class="box">
                <img src="../assets/Rectangle_2.png" alt="" class="img2" />
                <div class="text">
                  <div class="paragraph">
                    <span>2 فبراير . 5 دقائق قراءة</span>
                    <span>كتب بواسطة احمد السيد</span>
                  </div>
                  <h2 class="big">فوائد القراءة اليومية</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.landing {
  margin-top: 100px;
  padding-top: var(--main-padding);
}
/* SEARCH MOBILE */
.landing .container form{
  display: none;
}
@media (max-width: 991px) {
  .landing .container form{
    display: flex;
    margin-top: -30px;
    margin-bottom: 40px;
    justify-content: center;
    align-items: center;
    background-color: var(--border-color);
    padding-right: 9px;
  }
  .landing .container form input{
    background-color: var(--border-color);
    width: 100%;
    border: none;
    outline: none;
    padding: 10px 8px 15px 0px;
  }
}
/* SEARCH MOBILE */

.landing .container .boxes {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 40px;
}
@media (max-width: 991px) {
  .landing .container .boxes {
    display: flex;
    flex-direction: column;
  }
}

.two {
  grid-template-rows: 1fr 1fr; /* Make 2 small photos under each other*/
}

@media (max-width: 991px) {
  .two {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 991px) {
  .two {
    display: flex;
  }
  .two img {
    max-width: 100%;
    max-height: 100%;
  }
}
.landing .container .boxes .box {
  width: 100%;
}

.landing .container .boxes .box .img2 {
  max-width: 100%;
  max-height: 400px;
}
@media(max-width:991px){
  .landing .container .boxes .box:nth-child(1) {
    margin-left: 15px;
  }
}
.landing .container .boxes .box img {
  border-radius: 2px;
  height: auto;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -ms-border-radius: 2px;
  -o-border-radius: 2px;
}
.landing .container .boxes .box .text .paragraph {
  color: var(--main-paragraph-color);
  padding: 5px;
  display: flex;
  justify-content: space-between;
}
.landing .container .boxes .box .text .normal {
  font-family: Cairo;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: right;
  padding-bottom: 15px;
}
.landing .container .boxes .box .text .big {
  font-family: Cairo;
  font-size: 36px;
  font-weight: 400;
  line-height: 67px;
  letter-spacing: 0em;
  text-align: right;
}
</style>