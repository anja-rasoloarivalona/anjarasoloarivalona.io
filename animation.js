$(document).ready(function(){ 


    var tl = new TimelineMax({repeat:-1});
    
    tl
    .to(".intro__layout--1", 1.5, {autoAlpha: 0}, '+=10')
    .to(".intro__layout--1", 2, {autoAlpha: 1}, '+=10')


    var t2 = new TimelineMax({repeat:-1});
    
    t2

    .to(".intro--1", 1.5, {autoAlpha: 0}, '+=10')
    .to(".intro--1", 2, {autoAlpha: 1}, '+=10')
})