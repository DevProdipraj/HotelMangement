// this code for mobile menu 
const bars = document.getElementById('bars');
const mobileMenu = document.getElementById('mobile_menu');
bars.addEventListener('click', function(){
    bars.classList.toggle('hambarger')
    mobileMenu.classList.toggle('show_menu')
})


// this is use for stikey header 
let header = document.querySelector('.main_header');

window.addEventListener('scroll', function(){
    header.classList.toggle('sticky', window.scrollY > 0);
})
