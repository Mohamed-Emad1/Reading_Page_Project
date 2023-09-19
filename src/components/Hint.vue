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
     <!-- START HINT -->
      <div class="hint">
          <div class="container">
              <div class="text">
                  <h2>لمحة عن <span class="gradient">قُرَّاءْ</span> </h2>
                  <div class="short">
                      <img src="../assets/2.png" alt="photo">
                          <p>تقدم قُرَّاءْ تدريبات أكاديمية وتخصصية ومهارية لكل لجنة خاصة بوظيفتها. مثال: لجنة الإعلام يأخذ الشخص المُنضم حديثاً للجنة تدريبات في المجال الإعلامي، ولجنة الإعلام لها أقسام وهى: - التصميم - التسويق - التصوير - فحسب اختياره للقسم الذي يريد التدريب فيه يأخذ تدريبات أكاديمية، وعملية داخله، ليكون قادراً على تأدية المهام الخاصة بهذا القسم، وهكذا في باقي اللجان.</p>
                        </div>
                    </div>
                    <div class="image">
                    <img src="../assets/Rectangle_647.png" alt="group">
                </div>
                <div class="box">
                    <div class="goals"></div>
                      <h2>اهدفنا</h2>
                          <p>تحقيق التنمية الثقافية واالجتماعية كجزء من التنمية المستدامة. ممارسة اللغة العربية الفصيحة من خالل ورش اللغة. لقاءات مع نماذج مشرفة وإبراز دورهم في المجتمع.</p>
                </div>
               <div class="see">
                 <h2>رؤيتنا</h2>
                         <p>نطمح إلى تشجيع ثقافة القراءة وإثراء المعرفة في المجتمع العربي. نسعى لأن نصبح المصدر الرئيسي والموجه لكل محبي القراءة في العالم العربي، ونسهم في بناء جيل قارئ مثقف ومبدع.</p>
 
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
/* START HINT */
.hint{
    margin-top: 100px;
    padding-top: var(--main-padding);
    padding-bottom: var(--main-padding);
}
.hint .container .text{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    margin-bottom: 90px;

}
.hint .container .text h2{
    font-size: 120px;
    font-weight: normal;
    
}


.hint .container .text h2 span{
    margin-right: 230px;
    line-height: 10px;
}
@media(max-width:767px){
    .hint .container .text h2{
    font-size: 24px;
    }
 
}
@media(max-width:991px){
    .hint .container .text h2{
        font-size: 70px;
        margin-top: 80px;
    }
    .hint .container .text h2 span{
        /* display: block; */
        margin-top: 20px;
        margin-right: 15px;
    }
}
.hint .container .text .short{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.hint .container .text .short img{
    max-height: 100px;
    max-width: 100px;
}
@media(max-width:767px){
    .hint .container .text .short img{
        margin-top: 60px;
        margin-bottom: 30px;
    }
}
.hint .container .text .short p{
    font-size: 20px;
    font-family: 'Cairo';
    line-height: 1.8;
    color: var(--main-paragraph-color);
}
@media(max-width:767px){
    .hint .container .text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

}

.hint .container .image img{
    max-width: 100%;
}
.hint .container .box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
}
.hint .container .box h2{
    font-size: 43px;
    font-weight: 400;
    margin-bottom: 30px;
}
.hint .container .box p{
    width: 90%;
    line-height: 1.8;
    color: var(--main-paragraph-color);
}
@media(max-width:767px){
    .hint .container .box{
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .hint .container .box h2{
        margin-top: 30px;
    }
        
}
.hint .container .see{
    text-align: center;
    margin-top: 10px;
    
}
.hint .container .see h2{
    font-size: 30px;
}
/* END HINT */
</style>