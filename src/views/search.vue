<template>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
/>
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
            <swiper class="ls" :slides-per-view="3" :space-between="30" :slidesPerGroup="3" :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange" >
            
                
                    <swiper-slide v-for="(category, index) in categories" :key="index">
            <li :class="{ press: activeCategory === category }" @click="setActiveCategory(category)">
              <a href="#">{{ category }}</a>
            </li>
          </swiper-slide>

                
            
        </swiper>
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
          <div class="box" v-for="book in books" :key="book.id">
            <img :src="book.image" alt="book">
            <div class="text">
              <p>كتب بواسطة : {{ book.author }}</p>
              <h2>{{ book.title }}</h2>
              <p>{{ book.description }}</p>
              <p class="phone">{{ book.descriptionPhone }}</p>
              <div class="last">
                <p>{{ book.date }}</p>
                <p :class="getCategoryClass(book.category)">{{ book.category }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">         
    <a class="active" href="#">التالي</a>
    <a href="#">10</a>
    <a href="#">...</a>
    <a href="#">4</a>
    <a href="#">3</a>
    <a  href="#">2</a>
    <a class="active" href="#">1</a>
    <a href="#" style="color: var(--main-color); background-color: #EBEBEB82;">السابق</a>
</div>
    </div>
    </div>
     <TheEnd/>
    </div>
</template>




<script>
import navPar from '@/components/navPar.vue';
import TheEnd from '@/components/TheEnd.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
// import { Navigation } from 'swiper/modules';
// Import Swiper styles

import 'swiper/css';
// import 'swiper/css/navigation';

export default {
  components: {
    navPar,
    TheEnd,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      // console.log(swiper);
    };

    const onSlideChange = () => {
      console.log('slide change');
    };
      return {
        onSwiper,
      onSlideChange,
    //   modules: [Navigation],
      };
    },

    data() {
    return {
      books: [
        {
        id: 1,
        image: require("../assets/Rectangle_114.png"),
        author: "أحمد السيد",
        title: "فوائد القراءة اليومية",
        description: "لقراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا.",
        descriptionPhone: "القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.",
        category: "أدب",
        date: "2 فبراير 5 دقائق قراءة"
            },
            {
                id: 2,
        image: require("../assets/Rectangle_11man.png"),
        author: "أحمد السيد",
        title: "فوائد القراءة اليومية",
        description: "لقراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا.",
        descriptionPhone: "القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.",
        category: "فن",
        date: "2 فبراير 5 دقائق قراءة"
            },
            {
                id: 3,
        image: require("../assets/Rectangle_113.png"),
        author: "أحمد السيد",
        title: "فوائد القراءة اليومية",
        description: "لقراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا.",
        descriptionPhone: "القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.",
        category: "فلسفة",

        date: "2 فبراير 5 دقائق قراءة"
            },
            {
                id: 4,
        image: require("../assets/Rectangle_11rd.png"),
        author: "أحمد السيد",
        title: "فوائد القراءة اليومية",
        description: "لقراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا.",
        descriptionPhone: "القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.",
        category: "أدب",
        date: "2 فبراير 5 دقائق قراءة"
        },
        // Add more book objects here
        ],
        categories: ['أدب', 'فلسفة', 'لغة', 'فن', 'الكل'],
        activeCategory: 'الكل',
    };
    },
    methods: {
        getCategoryClass(category)
        {
            if (category === "أدب")
            {
                return "category-1";
            } else if (category === "فن")
            {
                return "category-2";
            } else if (category === "فلسفة")
            {
                return "category-3";
            } 
        },
        setActiveCategory(category) {
      this.activeCategory = category;
    },
    }
    
};

</script>

<style scoped>
/* START COLORS OF CATEGORIES */
.search .container .boxes .box .text .category-1 {
  color: var(--main-color);
}
.search .container .boxes .box .text .category-2 {
  color: #EED600;
}
.search .container .boxes .box .text .category-3 {
  color: #ED0287;
}
/* END COLORS OF CATEGORIES */
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
.search .container .list > .text{
    grid-template-columns: 1/1/2/2;
    position: relative;
}

.search .container .list > .text::before{
    content: '';
    position: absolute;
    width: 61px;
    height: 2px;
    background-color: #EED600;
    top: 60px;
}
.search .container .list > .text::after{
    content: '';
    position: absolute;
    width: 366px;
    height: 2px;
    background-color: #00000026;
    top: 403px;
    left: 51px;
    transform: rotate(-90deg);
    transform-origin: 0% 0%;
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
/* .search .container .list .box .text .phone{
    display: none;
} */
@media(max-width:991px){
    .search .container .list .box .text p:nth-child(3){
        display: none;   
         /* this the discreption  */
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
.search .container .swiper {
    display: none;
}
@media(max-width:991px){
    .search .container .list > .text{
        display: none;
    }
}
/* END SEARCH */
/* START SWIPER */

@media(max-width:991px){
    .search .container .swiper {
        display: block;
    }
    .search .container .swiper .swiper-wrapper{
        display: flex;
        justify-content: space-evenly;


    }
    .search .container .swiper .swiper-wrapper a{
        background-color: #eee;
        padding: 10px 35px;
    }
    .search .container .swiper .swiper-wrapper a{
        color: black;
        transition-delay: 0.5s;
        transition: 0.5s;
    }
    .search .container .swiper .swiper-wrapper a:hover {
        color: #EED600;
        
    }
    .search .container .swiper .swiper-wrapper a:hover  {
        background-color: white;
        border: 2px solid #EED600;
    }
}

.swiper {
  max-width: 600px;
  max-height: 300px;
}
/* END SWIPER */

.pagination {
    margin-top: var(--main-padding);
    margin-bottom: var(--main-padding);
    display: flex;
    justify-content: flex-end;
}
.pagination a {
  
  color: black;
  padding: 5px 12px;
  text-decoration: none;
  transition: 1s;
  margin-right: 8px;
  border: 1px solid #eee;
}
@media(max-width:767px){
    .pagination{
        max-width: 100%;
    }
    .pagination a {
        padding: 3px 9px;

}
}

.pagination a.active {
  background-color: var(--main-color);
  color: white;
}
.pagination a:hover:not(.active) {background-color: #ddd;}


.search .container .swiper{
    display: none;
}
.search .container .swiper a{
    margin-left: 10px;
    background-color: #EEEEEE;
    padding: 5px 10px;
}
@media(max-width:991px){
    .search .container .swiper{
        display: flex;
        flex-direction: row;
        justify-content: start;
        margin-top: 10px;
        margin-bottom: 20px;
    }

}
.search .container .swiper  li .press{
    background-color: white;
    color: #FECE2F;
    border: 1px solid #FECE2F;
}



</style>