/* Funcion Animaciones con ScrollMagic */
var controller = new ScrollMagic.Controller();

/* -- Animaciones (Sección Última Colección) -- */
var scene = new ScrollMagic.Scene({
    triggerElement: "#col-2"
})
.setTween('#img5', 2, {translateY: '-100px'})
.addTo(controller);

var scene = new ScrollMagic.Scene({
    triggerElement: "#col-2"
})
.setTween('#img6', 2, {translateY: '100px'})
.addTo(controller);

/* -- Animaciones (Sección Tendencias) -- */
var scene = new ScrollMagic.Scene({
    triggerElement: "#img-box1",
    triggerHook: 0.4,
    offset: 50,
    reverse: false,
})
.setClassToggle('#img7', 'visible')
.addTo(controller);

var scene = new ScrollMagic.Scene({
    triggerElement: "#img-box2",
    triggerHook: 0.4,
    offset: 50,
    reverse: false,
})
.setClassToggle('#img8', 'visible')
.addTo(controller);

/* Funcion para activar el sticky menu */
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('active', window.scrollY > 0);
});

/* Funcion para activar el menu responsive */
function toggleMenu() {
    var menuToggle = document.querySelector('.menuToggle');
    var navbor = document.querySelector('.nav');
    menuToggle.classList.toggle('active');
    navbor.classList.toggle('active');
}