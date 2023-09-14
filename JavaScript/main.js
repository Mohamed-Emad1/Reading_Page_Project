let btn = document.querySelector('.toggle-menu');
let mobile = document.querySelector('.mobile');

btn.onclick = function ()
{
    if(mobile.style.display === "none")
        mobile.style.display = "flex";
    else
    {
        mobile.style.display = "none";
    }
}

let widthMatch = window.matchMedia("(min-width: 992px)");
// mm in the function arg is the matchMedia object, passed back into the function
widthMatch.addEventListener('change', function(mm) {
    if (mm.matches) {
        // it matches the media query: that is, min-width is >= 500px
        // document.body.addEventListener(  );
        mobile.style.display = "flex";
    }
});

let mobileCheck = window.matchMedia("(max-width: 991px)");
// mm in the function arg is the matchMedia object, passed back into the function
mobileCheck.addEventListener('change', function(mm) {
    if (mm.matches) {
        // it matches the media query: that is, min-width is >= 500px
        // document.body.addEventListener(  );
        mobile.style.display = "none";
    }
});



let flag = false;
let search1 = document.getElementById('search1');
let search2 = document.getElementById('search2');


let fun = setInterval(() => {
    
    if (search1.value === "قرائة" || search1.value === "قراءة" || search2.value === "قرائة" || search2.value === "قراءة" && flag === false)
    {
        flag = true;
        window.open("/search.html","_self")
    }
    else if(flag)
    { 
        
        clearInterval(fun);
        // history.back();
        //     // window.open("/index.html", "_self");
        // flag = false
    }

}, 500);


