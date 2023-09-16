let scrollable = document.querySelector(".list");
let arrowAfter = document.querySelector(".arrow");
let arrowBefore = document.querySelector(".bearrow");


scrollable.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollable.scrollLeft += evt.deltaY;
    scrollable.style.scrollBehavior = "smooth";
});


arrowAfter.addEventListener("click", () =>{
    scrollable.scrollLeft += 1046;
});

arrowBefore.addEventListener("click", () =>{
    scrollable.scrollLeft -= 1046;
});