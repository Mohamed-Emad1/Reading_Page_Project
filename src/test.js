// test.js
import router from './router'; // Import the Vue Router instance

export function testFunction() {
  let btn = document.querySelector('.toggle-menu');
  let mobile = document.querySelector('.mobile');

  btn.onclick = function() {
    if (mobile.style.display === "none")
      mobile.style.display = "flex";
    else {
      mobile.style.display = "none";
    }
  }

  let widthMatch = window.matchMedia("(min-width: 992px)");
  widthMatch.addEventListener('change', function(mm) {
    if (mm.matches) {
      mobile.style.display = "flex";
    }
  });

  let mobileCheck = window.matchMedia("(max-width: 991px)");
  mobileCheck.addEventListener('change', function(mm) {
    if (mm.matches) {
      mobile.style.display = "none";
    }
  });

  let flag = false;
  let search1 = document.getElementById('search1');
  let search2 = document.getElementById('search2');

  let fun = setInterval(() => {
    if ((search1.value === "قرائة" || search1.value === "قراءة") || (search2.value === "قرائة" || search2.value === "قراءة") && flag === false) {
      flag = true;
      router.push('/search'); // Use router.push() to navigate to the search route
    } else if (flag) {
      clearInterval(fun);
    }
  }, 500);
};
