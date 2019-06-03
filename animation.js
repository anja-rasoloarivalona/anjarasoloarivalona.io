$(document).ready(function(){ 




    var t1 = new TimelineMax({repeat:-1});  
    t1
    .to(".intro--1", 1.5, {autoAlpha: 0}, '+=5')
    .to(".intro--1", 2, {autoAlpha: 1}, '+=5')




    var a = new TimelineMax();
    
        a
        .to('.nav', 1, {background: '#131010'})

        var controller = new ScrollMagic.Controller();

        var scene1 = new ScrollMagic.Scene({
            triggerElement: '.trigger1',
            triggerHook: 0,
            duration: "100%",
            offset: 60 
            
        })
        .reverse(true)
        .setTween(a)
        .addTo(controller);


        var b = new TimelineMax();
    
        b
        .to('.nav', .3, {background: 'none'})

        var controller = new ScrollMagic.Controller();

        var scene2 = new ScrollMagic.Scene({
            triggerElement: '.trigger1',
            triggerHook: 0,
            duration: "100%",
            offset: 3590
            
        })
        .reverse(true)
        .setTween(b)     
        .addTo(controller);
})