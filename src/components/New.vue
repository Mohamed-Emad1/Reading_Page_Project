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
        <!-- START NEW -->
        <div class="new">
          <div class="container">
            <div class="heading">
              <h2>أحدث <span class="gradient">المقالات</span></h2>
              <a href="">عرض الجميع</a>
            </div>
            <div class="sections">
              <div class="section">
                <div class="image">
                  <img src="../assets/Rectangle_11more.png" alt="" />
                </div>
                <div class="text">
                  <p>كتب بواسطة : أحمد السيد</p>
                  <h2>فوائد القراءة اليومية</h2>
                  <p>
                    القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن
                    القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير
                    الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن
                    أن تؤثر بشكل إيجابي على حياتنا.
                  </p>
                  <a href="#">أقرأ المزيد</a>
                  <p>2 فبراير <span>5 دقائق قراءة</span></p>
                </div>
              </div>
              <div class="section">
                <div class="image">
                  <img src="../assets/Rectangle_12.png" alt="" />
                </div>
                <div class="text">
                  <p>كتب بواسطة : أحمد السيد</p>
                  <h2>فوائد القراءة اليومية</h2>
                  <p>
                    القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن
                    القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير
                    الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن
                    أن تؤثر بشكل إيجابي على حياتنا.
                  </p>
                  <a href="#">أقرأ المزيد</a>
                  <p>2 فبراير <span>5 دقائق قراءة</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END NEW -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
/* START NEW */
.new .container .heading {
  display: flex;
  justify-content: space-between;
}
.new .container .heading h2 {
  font-size: 40px;
}
@media(max-width:767px){
  .new .container .heading {
    justify-content: space-evenly;
    flex-direction: column;
  }
  .new .container .heading h2 {
    font-size: 23px;
    margin-bottom: 20px;
  }
}
.new .container .heading a {
  color: var(--main-color);
  font-size: 20px;
  margin-top: 8px;
}
.new .container .sections .section {
  display: flex;
}
@media (max-width: 991px) {
  .new .container .sections .section {
    flex-direction: column;
  }
}
.new .container .sections .section .image {
  margin-bottom: 60px;
}
@media (max-width: 767px) {
  .new .container .sections .section .image img {
    height: 180px;
  }
  .new .container .sections .section .image {
  margin-bottom: 0px;
}
}
.new .container .sections .section .text {
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  padding: 20px;
}
.new .container .sections .section .text p {
  color: var(--main-paragraph-color);
  margin-top: 15px;
  margin-bottom: 15px;
  line-height: 1.8;
}
.new .container .sections .section .text h2 {
  margin-top: 15px;
  font-size: 35px;
  font-weight: normal;
}
@media (max-width: 767px) {
  .new .container .sections .section .text h2 {
    font-size: 20px;
  }
}
.new .container .sections .section .text a {
  color: var(--main-color);
}

/* END NEW */

</style>