$(document).ready(function(){ 




    var t1 = new TimelineMax({repeat:-1});  
    t1
    .to(".intro--1", 1.5, {autoAlpha: 0}, '+=5')
    .to(".intro--1", 2, {autoAlpha: 1}, '+=5')
})