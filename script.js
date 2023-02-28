// Script for navigation bar

const header = document.querySelector('#header');
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const shut = document.getElementById('close');
const lis = document.querySelectorAll('#navbar li a');
const activePage = window.location.pathname;
console.log(activePage)

window.onscroll =  function () {
    if (document.documentElement.scrollTop > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

lis.forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
        lis.forEach((link) => {
            link.classList.remove('active')
        })
        link.classList.add('active')
    }
})

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
    shut.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

// Single Product script
var mainImg = document.getElementById('mainImg');
var smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = () => {
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = () => {
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = () => {
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = () => {
    mainImg.src = smallImg[3].src;
}
