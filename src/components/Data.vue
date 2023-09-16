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
        <!-- Start DATA -->
       <div class="data">
           <div class="container">
               <div class="shape">
                   <h2>تواصل معنا</h2>
                   <p>نحن نتطلع لسماع أخباركم والاستماع إلى ما لديكم لتقولوه. لا تترددوا في التواصل معنا</p>
                   <img src="../assets/2.png" alt="logo">
               </div>
               <form action="">
                   <label for="name">الإسم</label>
                   <input type="text" name= "name" id="name" required>
                   <label for="mail">البريد الألكتروني</label>
                   <input type="email" name="email" id="mail" required>
                   <label for="address"> عنوان الرسالة</label>
                   <input type="text" id="address">
                   <label for="text">الرسالة </label>
                   <input type="text" id="text" required >
                   <input type="submit" value="إرسل">
               </form>
           </div>
       </div>
       <!-- END DATA -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
/* Start DATA */
.data{
    margin-top: 100px;
    padding-top: var(--main-padding);
    padding-bottom: var(--main-padding);
}
.data .container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 150px;
    position: relative;
}
@media(max-width:991px){
    .data .container{
        display: flex;
        flex-direction: column;
    }
}
.data .container form{
    display: flex;
    flex-direction: column;
}
.data .container form label{
    margin-bottom: 10px;
    margin-top: 5px;
    font-size: 24px;
    font-weight: 400;
}
.data .container form input{
    background-color: var(--border-color);
    padding: 11px;
    border: none;
    outline: none;
}
.data .container form input#text{
    padding-top: var(--main-padding);
    padding-bottom: 100px
}
.data .container form :last-child{
    margin-top: 26px;
    width: 20%;
    padding: 10px;
    color: white;
    background-color: var(--main-color);
}
.data .container form:hover :last-child{
    cursor: pointer;
}
.data .container .shape{
    text-align: center;
}
.data .container .shape {
  background: linear-gradient(to left, #EFEFEF96 59%, #EFEFEF00);
  height: 130%;
  padding-top:120px;
  margin-top: -120px;
  
}
.data .shape h2{
    margin-bottom: 30px;
    font-size: 48px;
}
.data .shape p{
    margin-bottom: 30px;
    font-size: 24px;
}
.data .shape img{
    max-height: 410px;
}
@media(max-width:767px){
    .data .shape img{
        height: 200px;
    }
}
/* END DATA */
</style>