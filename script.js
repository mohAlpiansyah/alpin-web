const nav = document.querySelector(".navbar");
window.addEventListener ("scroll", function() {
    nav.classList.toggle (".navbar", window.scrollY > 100);
});

