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
                <i><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M10.3636 3C8.90722 3 7.48354 3.43187 6.2726 4.24099C5.06167 5.05011 4.11786 6.20015 3.56052 7.54567C3.00319 8.89119 2.85737 10.3718 3.14149 11.8002C3.42562 13.2286 4.12693 14.5406 5.15675 15.5704C6.18657 16.6003 7.49863 17.3016 8.92703 17.5857C10.3554 17.8698 11.836 17.724 13.1815 17.1667C14.527 16.6093 15.6771 15.6655 16.4862 14.4546C17.2953 13.2437 17.7272 11.82 17.7272 10.3636C17.7271 8.41069 16.9512 6.5378 15.5703 5.15688C14.1894 3.77597 12.3165 3.00012 10.3636 3Z" stroke="#383838" stroke-miterlimit="10"/>
<path d="M15.8574 15.8574L21 21.0001" stroke="#383838" stroke-miterlimit="10" stroke-linecap="round"/>
</g>
</svg></i>
              <input type="text" placeholder="بحث" id="search2">
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
                <a href="" id="use"><img src="../assets/Rectangle_2.png" alt="" class="img2" /></a>
                
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
import { useRouter } from 'vue-router';
    export default {
  mounted()
  {
        const router = useRouter();
        let search2 = document.getElementById('search2');
        search2.addEventListener('input', function () {
      if (search2.value === "قرائة" || search2.value === "قراءة") {
        router.push('/search');
      }
        });


        let imageToUseful = document.getElementById("use");
        imageToUseful.onclick = function (e)
        {
          e.preventDefault();
          router.push('/useful')
        }
  }
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
  .landing .container form i{
    margin-top: 5px;
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