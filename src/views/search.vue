<template>
     <link rel="stylesheet" href="../assets/font.css" />
     <link rel="stylesheet" href="../assets/normalize.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&family=Open+Sans:wght@400;700&family=Work+Sans:wght@200;300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <div class="search">
    <navPar/>
    <!-- Search START -->
    <div class="search">
        <div class="container">
            <div class="choose">
                <ul class="category">
                    <li><a href="#">أدب</a></li>
                    <li><a href="#">فلسفة</a></li>
                    <li><a href="#">لغة</a></li>
                    <li><a href="#">موسيقي</a></li>
                    <li><a href="#">فن</a></li>
                    <li class="all"><a href="#">الكل</a></li>
                </ul>
            </div>
            <h2>نتائج البحث عن : قرائة</h2>
            <div class="list">
                <div class="text">
                    <h2>الأقسام</h2>
                    <ul class="links">
                        <li><a href="#">أدب</a></li>
                        <li><a href="#">فلسفة</a></li>
                        <li><a href="#">لغة</a></li>
                        <li><a href="#">موسيقي</a></li>
                        <li><a href="#">فن</a></li>
                    
                    </ul>
                </div>

                <div class="boxes">
                <div class="box">
                    <img src="../assets/Rectangle_114.png" alt="">
                    <div class="text">
                    <p>كتب بواسطة : أحمد السيد</p>
                    <h2>فوائد القراءة اليومية</h2>
                    <p>لقراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا.</p>
                 <p class="phone">القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.</p>
         <div class="last">
             <p>2 فبراير 5 دقائق قراءة</p>
             <p class="first">أدب</p>
         </div>
     </div>
     </div>

     <div class="box">
         <img src="../assets/Rectangle_11_man.png" alt="">
         <div class="text">
         <p>كتب بواسطة : أحمد السيد</p>
         <h2>فوائد القراءة اليومية</h2>
         <p>لقراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا.</p>
         <p class="phone">القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.</p>
         <div class="last">
             <p>2 فبراير 5 دقائق قراءة</p>
             <p class="third">فلسفة</p>
         </div>
     </div>
     </div>

     <div class="box">
         <img src="../assets/Rectangle_113.png" alt="">
         <div class="text">
         <p>كتب بواسطة : أحمد السيد</p>
         <h2>فوائد القراءة اليومية</h2>
         <p>لقراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا.</p>
         <p class="phone">القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.</p>
         <div class="last">
             <p>2 فبراير 5 دقائق قراءة</p>
             <p class="second">فن</p>
         </div>
     </div>
     </div>

     <div class="box">
         <img src="../assets/Rectangle_11rd.png" alt="">
         <div class="text">
         <p>كتب بواسطة : أحمد السيد</p>
         <h2>فوائد القراءة اليومية</h2>
         <p>لقراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا.</p>
                    <p class="phone">القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.</p>
                    <div class="last">
                        <p>2 فبراير 5 دقائق قراءة</p>
                        <p class="first">أدب</p>
                    </div>
                </div>
                </div>
            </div>

            </div>
        </div>
    </div>
     <TheEnd/>
    </div>
</template>

<script>
import navPar from '@/components/navPar.vue';
import TheEnd from '@/components/TheEnd.vue';
    export default {
    components: {
        navPar,
        TheEnd,
    }         
    }
</script>

<style scoped>
.search{
    padding-top: var(--main-padding);
}
.search .container > h2{
    text-align: right;
    font-size: 32px;
    font-weight: 400;
    
}
@media(max-width:767px){
    .search .container > h2{
        text-align: right;

        font-size: 20px;
    }
}
.search .container .list{
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(7,minmax(250px, 1fr));
    gap: 0px;
}
@media(max-width:991px){
    .search .container .list{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
.search .container .list  .text{
    grid-template-columns: 1/1/2/2;
}
.search .container .list > .text > h2{
    font-size: 32px;
    font-weight: normal;
    color: var(--text-color);
}
.search .container .list > .text .links{
    margin-top: 15px;
}

.search .container .list > .text .links li{
    margin-top: 15px;
    font-size: 20px;
    font-weight: 400;
}

.search .container .list > .text .links li a{
    color: var(--text-color);
    transition-delay: 0.5s;
    transition: 0.5s;
}
.search .container .list > .text .links li:hover a{
    color: #EED600;
}
@media(max-width:767px){
    .search .container .list > .text{
        display: none;
    }
    .search .container .list .text > h2{
        text-align: right;
        font-size: 20px;
        margin-left: 40px;
    }
    .search .container .list > .text .links li a{
        font-size: 13px;
        text-align: right;
    }
}
.search .container .list .boxes {
    grid-area: 1/2/2/8;
    max-width: 1000px;
}
.search .container .list .box{
    display: flex;
    justify-content: start;
    align-items: center;
    max-width: 98%;
    max-height: 50%;
}
.search .container .list .box img{
    margin-top: 40px;
    max-width: 80%;
    max-height: 100%;
}
@media(max-width:991px){
    .search .container .list .box img{
        width: 80%;
    }
}
@media(max-width:767px){
    .search .container .list .box img{
        width: 55%;
        height:100%;
    }
}
.search .container .list .box .text{
    margin-top: 20px;
}
@media(max-width:767px){
    .search .container .list .box .text{
        width: 50%;
        max-height: 50%;
    }

}
.search .container .list .box .text p{
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 30px;
    color: var(--main-paragraph-color);
    max-width: 500px;
    line-height: 1.8;
}
.search .container .list .box .text .phone{
    display: none;
}
@media(max-width:991px){
    .search .container .list .box .text p:nth-child(3){
        display: none;
    }
}
@media(max-width:767px){
    .search .container .list .box .text .phone{
        display: block;
    }
}
.search .container .list .box .text h2{
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 15px;
}
@media(max-width:767px){
    .search .container .list .box .text h2{
        font-size: 16px;
    }
    .search .container .list .box .text p{
        font-size: 10px;
        margin-top: 0px;
        margin-bottom: 0px;
        margin-right: 15px;
    }
}
.search .container .list .box .text .last{
    display: flex;
    justify-content: space-between;
}
.search .container .list .box .text .last .first{
    color: var(--main-color);
}
.search .container .list .box .text .last .second{
    color: #EED600;
}
.search .container .list .box .text .last .third{
    color: #ED0287;
}
.search .container .choose {
    display: none;
}
@media(max-width:991px){
    .search .container .list > .text{
        display: none;
    }
    .search .container .choose {
        display: block;
    }
    .search .container .choose .category{
        display: flex;
        justify-content: space-evenly;


    }
    .search .container .choose .category li{
        background-color: #eee;
        padding: 10px 35px;
    }
    .search .container .choose .category li a{
        color: black;
        transition-delay: 0.5s;
        transition: 0.5s;
    }
    .search .container .choose .category li:hover a{
        color: #EED600;
        
    }
    .search .container .choose .category li:hover {
        background-color: white;
        border: 2px solid #EED600;
    }
}
/* END SEARCH */


</style>