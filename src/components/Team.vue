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
                    <div class="box" v-for="book in books" :key="book.id">
                        <img :src="book.image" alt="person1">
                        <h2>{{ book.name }}</h2>
                        <p>{{ book.description }}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- END TEAM -->

    </div>
</template>

<script>
    export default {
        data() {
    return {
    books: [
        {
        id: 1,
        image: require("../assets/Rectangle_652.png"),
        name: "م. محمد علاء",
        description: "رئيس المبادرة لسنة 2023",
        },
        {
        id: 2,
        image: require("../assets/Rectangle_651.png"),
        name: "م. خالد حسن",
        description: "منسق بلجنة الإعلام لسنة 2023",
            },

            {
        id: 3,
        image: require("../assets/Rectangle_649.png"),
        name: "أ. سيف الدين سامر",
        description: "مستشار لجنة الإعلام لسنة 2023",
        },
            {
        id: 4,
        image: require("../assets/Rectangle_650.png"),
        name: "م. يوسف التركي",
        description: "رئيس التقييم بلجنة التقييم والتطوير لسنة 2023" ,
            },

        // Add more book objects here
    ]
    };
}  
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
@media(max-width:767px){
    .team .container .list{
        flex-direction: column;

    }
    .team .container .list .box{
        max-width: 100%;
    }
}
.team .container .list .box img{
    max-width: 100%;
}
.team .container .list .box h2{
    font-size: 27px;
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
@media(max-width:767px){
    .team .container .list .box {
        text-align: center;
    }
    .team .container .list .box h2,.team .container .list .box p{
        text-align: center;
    }
    .team .container .list .box p{
        margin-bottom: 10px;
    }
}
/* END TEAM */

</style>