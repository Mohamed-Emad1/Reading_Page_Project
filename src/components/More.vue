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
            <div class="heading" v-if="pageType === 'heading'">
          <h2>الأكثر<span class="gradient"> قراءة</span></h2>
          <a href="">عرض الجميع</a>
        </div>
        <div class="heading-new" v-else>
          <a href=""><p>إقرأ المزيد</p></a>
          <h2>مواضيع ذات صلة</h2>
        </div>
            <div class="list">
              <div class="box" v-for="book in books" :key="book.id">
                <div class="image">
                  <img :src="book.image" alt="image" />
                </div>
                <div class="p">
                  <p>{{ book.date }}</p>
                  <p>كتب بواسطة :  {{ book.author }}</p>
                </div>
                <h2>{{ book.description }}</h2>
              </div>
            </div>
          </div>
        </div>
        <!-- END MORE -->
    </div>
</template>

<script>
export default {
  props: {
    pageType: {
      type: String,
      required: true
    }
  },
      data() {
    return {
      books: [
        {
        id: 1,
        image: require("../assets/Rectangle_13.png"),
        author: "أحمد السيد",
        description: "اليوم العالمي للغة العربية",
        date: "2 فبراير 5 دقائق قراءة"
            },
            {
                id: 2,
        image: require("../assets/Rectangle_14.png"),
        author: "أحمد السيد",
        description: "كتب تعريفك بتراث وتقاليد الشعوب",
        date: "2 فبراير 5 دقائق قراءة"
            },
            {
                id: 3,
        image: require("../assets/Rectangle_15.png"),
        author: "أحمد السيد",
        description:"جولة في عالم الأدب العربي",
        date: "2 فبراير 5 دقائق قراءة"
            },
        // Add more book objects here
      ]
    };
  },
  // computed: {
  //   showHeadingNew() {
  //     return this.pageType === "heading-new";
  //   }
  // },
    }
</script>

<style scoped>
/* START MORE */
.more {
  padding-bottom: var(--main-padding);
}

.more .container .heading {
  display: flex;
  justify-content: space-around;;
  align-items: start;
  margin-bottom: 30px;
}
.more .container .heading-new{
  display: flex;
  justify-content: space-around;;
  align-items: start;
  margin-bottom: 30px;
  display: none;
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
    flex-direction: column;
  }
}
.more .container .heading a {
  color: var(--main-color);
  font-size: 20px;
}
@media (max-width: 767px) {
  .more .container .heading a {
    margin-top: 10px;
    font-size: 12px;
  }
}
.more .container .heading-new{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
.more .container .heading-new p{
    color: var(--main-paragraph-color);
  }
.more .container .list {
  display: flex;
}
@media (max-width: 991px) {
  .more .container .list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .more .container .list .box img {
    max-width: 98%;
  }
}
@media (max-width: 767px) {
  .more .container .list {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .more .container .list .box {
    max-width: 98%;
  }
  .more .container .list .box img {
    max-width: 95%;
  }
  
}
.more .container .list .box {
  margin-left: 20px;
  margin-right: 20px;
  max-width: 100%;

}
.more .container .list .box .p {
  display: flex;
  justify-content: space-between;
  color: var(--main-paragraph-color);
  margin-bottom: 15px;
}
@media (max-width: 767px) {
  .more .container .list .box .p {
    justify-content: space-evenly;
  }
}
.more .container .list .box h2 {
  font-weight: normal;
  font-size: 21px;
}

/* END MORE */


</style>