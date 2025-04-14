window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})



const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => (
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        }
        else {
            icon.className = 'uil uil-plus';
        }
    })
))

// import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

// neonCursor({
//   el: document.getElementById('app'),
//   shaderPoints: 16,
//   curvePoints: 80,
//   curveLerp: 0.5,
//   radius1: 5,
//   radius2: 30,
//   velocityTreshold: 10,
//   sleepRadiusX: 100,
//   sleepRadiusY: 100,
//   sleepTimeCoefX: 0.0025,
//   sleepTimeCoefY: 0.0025
// })



const menu=document.querySelector(".nav__menu");

const menuBtn=document.querySelector("#open-menu-btn");

const closeBtn=document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {


    menu.style.display = "flex";

    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})
// close nav menu

const closeNav = () => {
    menu.style.display = "none";

    closeBtn.style.display = "none";

    menuBtn.style.display = "inline-block";

}
closeBtn.addEventListener('click', closeNav);




