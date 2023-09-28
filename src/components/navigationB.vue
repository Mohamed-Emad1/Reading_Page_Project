<template>
   <link rel="stylesheet" href="../assets/font.css" />
   <link rel="stylesheet" href="../assets/normalize.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
     href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&family=Open+Sans:wght@400;700&family=Work+Sans:wght@200;300;400;500;600;700;800&display=swap"
     rel="stylesheet"
   />
     <header>
       <div class="container">
        <i class="toggle-menu" id="menu"><svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0005 18.5134C9.92981 18.5134 5.85908 18.5156 1.78945 18.5112C0.988234 18.5101 0.342659 18.0495 0.0960482 17.3311C-0.142891 16.6357 0.0730301 15.88 0.642976 15.4106C1.03317 15.0881 1.49132 15.0048 1.98235 15.0059C7.80128 15.0092 13.6202 15.0081 19.4391 15.0081C21.6652 15.0081 23.8924 15.0026 26.1185 15.0103C27.3723 15.0146 28.1977 16.0018 27.9412 17.1633C27.7636 17.9683 27.0622 18.5112 26.1722 18.5123C23.6721 18.5167 21.1731 18.5145 18.673 18.5145C17.1155 18.5145 15.558 18.5145 14.0005 18.5134Z" fill="#383838"/>
<path d="M14.0428 0.00234251C18.0862 0.00234251 22.1295 0.00234251 26.1717 0.00234251C26.8885 0.00234251 27.4399 0.300674 27.7796 0.936817C28.103 1.54225 28.0668 2.14987 27.6908 2.72021C27.3018 3.31029 26.7208 3.5121 26.0336 3.511C21.7448 3.50662 17.4559 3.50881 13.1671 3.50881C9.42409 3.50881 5.68218 3.5099 1.93917 3.50881C0.949434 3.50881 0.232616 2.98893 0.0473836 2.14878C-0.202516 1.01688 0.606372 0.00892544 1.79011 0.00453825C4.15319 -0.00313934 6.51627 0.00124799 8.87935 0.00124799C10.6002 0.00234479 12.322 0.00234251 14.0428 0.00234251Z" fill="#383838"/>
<path d="M13.9949 11.0011C9.96251 11.0011 5.93124 11.0022 1.89887 11C0.939827 11 0.251507 10.5065 0.0553142 9.69483C-0.218698 8.56513 0.573746 7.53305 1.75419 7.51988C3.28428 7.50343 4.81545 7.51549 6.34664 7.51549C12.9207 7.51549 19.4949 7.51549 26.069 7.51549C27.1179 7.51549 27.8106 8.0617 27.9662 9.00275C28.1273 9.97451 27.4017 10.9265 26.4175 10.9825C25.7358 11.0209 25.0518 11 24.3679 11C20.9109 11.0022 17.4529 11.0011 13.9949 11.0011Z" fill="#383838"/>
</svg>
</i>
         <div class="mobile">
           <div class="boxes">
             <div class="box">
               <a href="#">تطوع معنا</a>
             </div>
             <form action="">
               <i><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M10.3636 3C8.90722 3 7.48354 3.43187 6.2726 4.24099C5.06167 5.05011 4.11786 6.20015 3.56052 7.54567C3.00319 8.89119 2.85737 10.3718 3.14149 11.8002C3.42562 13.2286 4.12693 14.5406 5.15675 15.5704C6.18657 16.6003 7.49863 17.3016 8.92703 17.5857C10.3554 17.8698 11.836 17.724 13.1815 17.1667C14.527 16.6093 15.6771 15.6655 16.4862 14.4546C17.2953 13.2437 17.7272 11.82 17.7272 10.3636C17.7271 8.41069 16.9512 6.5378 15.5703 5.15688C14.1894 3.77597 12.3165 3.00012 10.3636 3Z" stroke="#383838" stroke-miterlimit="10"/>
<path d="M15.8574 15.8574L21 21.0001" stroke="#383838" stroke-miterlimit="10" stroke-linecap="round"/>
</g>
</svg>
</i>
               <input type="text" placeholder="بحث" id="search1" />
             </form>
           </div>
           <ul class="links">
            <li><router-link to="/">الرئيسية</router-link> </li>
             <li><router-link to="/aboutUs">من نحن</router-link></li>
             <li><router-link to="/about"> راسلنا</router-link></li>
             
             
           </ul>
         </div>
         <div class="logo">
           <img src="../assets/1.png" alt="" />
         </div>
       </div>
     </header>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  
  mounted()
  {
    const router = useRouter();
    let btn = document.querySelector('.toggle-menu');
    let mobile = document.querySelector('.mobile');

    btn.onclick = function () {
      if (mobile.style.display === "none")
        mobile.style.display = "flex";
      else {
        mobile.style.display = "none";
      }
    }

    let widthMatch = window.matchMedia("(min-width: 992px)");
    widthMatch.addEventListener('change', function (mm) {
      if (mm.matches) {
        mobile.style.display = "flex";
      }
    });

    let mobileCheck = window.matchMedia("(max-width: 991px)");
    mobileCheck.addEventListener('change', function (mm) {
      if (mm.matches) {
        mobile.style.display = "none";
      }
    });

    let search1 = document.getElementById('search1');

    search1.addEventListener('input', function () {
      if (search1.value === "قرائة" || search1.value === "قراءة") {
        router.push('/search');
      }
    });
  }
}

</script>


<style scoped>
/* START HEADER */
header {
  /* padding-bottom: var(--main-padding); */
  border-bottom: 3px solid var(--border-color);
  position: fixed;
  width: 100%;
  top: 0px;
  right: 0px;
  z-index: 10;
  background-color: white;
}
@media (max-width: 991px) {
  header {
    right: 0px;
    max-width: 99%;
  }
}
@media (max-width: 767px) {
  header {
    right: 0px;
    max-width: 100%;
    justify-content: space-between;
  }
}
header .container {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding-bottom: 15px;
  padding-top: 15px;
  position: relative;
}
header .container .boxes {
  display: flex;
  justify-content: space-between;
  width: 400px;
}
header .container .boxes .box {
  background: var(--main-color);
  width: 155px;
  height: 43px;
  text-align: center;
  z-index: 3;
}
@media (max-width: 991px) {
  header .container .boxes .box {
    width: 75px;
  }
}
header .container .boxes .box a {
  color: white;
  font-family: Cairo;
  font-size: 16px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: center;
}

header .container .boxes form {
  height: 43px;
  width: 237px;
  margin-right: -203px;
  position: relative;
}
@media (max-width: 991px) {
  header .container .boxes form {
    width: 150px;
    position: absolute;
    left: 580px;
  }
}
header .container .boxes form i {
  position: absolute;
  bottom: 0px;
  right: 2px;
  color: var(--main-paragraph-color);
}
header .container .boxes form input {
  width: 100%;
  height: 100%;
  background: var(--border-color);
  padding-right: 30px;
}
header .container .mobile {
  display: flex;
  justify-content: space-between;
}

header .container .links {
  display: flex;
  width: 372px;
  height: 14px;
  margin-right: 120px;
  font-family: Cairo;
  font-size: 20px;
  font-weight: 600;
  line-height: 37px;
  letter-spacing: 0em;
}
@media (max-width: 991px) {
  header .container .links {
    width: 500px;
    margin-right: 40px;
    padding: 20px 20px;
  }
}

header .container .links li {
  padding-left: 30px;
  padding-right: 30px;
}
header .container .links li .links {
  color: var(--text-color);
}
header .container .links li a{
  color: black;
}
header .container .links li:hover a{
  color: var(--main-color-alt);
}
header .container .logo {
  width: 50px;
  height: 50px;
  top: 8px;
  left: 70px;
}

header .container .logo img {
  border-style: none;
  height: 65px;
}
@media (min-width: 767px) {
  header .container .logo img {
    margin-left: 10px;
  }
}
@media (min-width: 992px) {
  header .container .toggle-menu {
    display: none;
  }

}

@media (min-width: 992px) {
  header .container .mobile {
    display: flex;
  }
}
@media (max-width: 991px) {
  header .container .mobile form {
    width: 0%;
    display: none;
  }
  header .container .mobile {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0px;
    width: 100%;
    height: 250px;
    z-index: 5;
    background-color: white;
    text-align: right;
    border-bottom: 5px solid var(--border-color);
    display: none;
  }
  header .container .links {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: -44px;
    top: -9px;
    width: 50%;
  }
  header .container .links li {
    margin-bottom: 10px;
  }
  header .container .boxes .box {
    position: absolute;
    bottom: 37px;
    right: 13px;
    width: 120px;
  }
}
/* END HEADER */



</style>