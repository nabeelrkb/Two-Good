const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function loadingAnimation(){
    gsap.from("#page1 h1", {
    y:100,
    opacity:0, 
    delay:0.5,
    duration:0.9,
    stagger:0.3
})
    gsap.from("#page1 img", {
    scale:0.9,
    opacity:0, 
    delay:0.5,
    duration:0.5,
})
}

loadingAnimation()


document.addEventListener('mousemove', function(dets){
    gsap.to('#cursor', {
        left:dets.x,
        top:dets.y
    })
})


function child1Cursor(){
    document.querySelector('#child1').addEventListener('mouseenter', function(dets){
     gsap.to('#cursor', {
    transform: 'translate(-50%, -50%) scale(1)'
     })
    document.querySelector('#cursor').style.backgroundColor = "#FFF";

})
document.querySelector('#child1').addEventListener('mouseleave', function(dets){
     gsap.to('#cursor', {
    transform: 'translate(-50%, -50%) scale(0)'
     })
})
}
child1Cursor()

function child2Cursor(){
    document.querySelector('#child2').addEventListener('mouseenter', function(dets){
     gsap.to('#cursor', {
    transform: 'translate(-50%, -50%) scale(1)'

     })
    document.querySelector('#cursor').style.backgroundColor = "#F1EFE0";


})
document.querySelector('#child2').addEventListener('mouseleave', function(dets){
     gsap.to('#cursor', {
    transform: 'translate(-50%, -50%) scale(0)'

     })
})
}
child2Cursor()

function child3Cursor(){
    document.querySelector('#child3').addEventListener('mouseenter', function(dets){
     gsap.to('#cursor', {
    transform: 'translate(-50%, -50%) scale(1)'
     })
     document.querySelector('#cursor').style.backgroundColor = "#FFF";
})
document.querySelector('#child3').addEventListener('mouseleave', function(dets){
     gsap.to('#cursor', {
    transform: 'translate(-50%, -50%) scale(0)'
     })
})
}
child3Cursor()


function child4Cursor(){
    document.querySelector('#child4').addEventListener('mouseenter', function(dets){
     gsap.to('#cursor', {
    transform: 'translate(-50%, -50%) scale(1)'

     })
    document.querySelector('#cursor').style.backgroundColor = "#DFD1D1";

})
document.querySelector('#child4').addEventListener('mouseleave', function(dets){
     gsap.to('#cursor', {
    transform: 'translate(-50%, -50%) scale(0)'

     })
})
}
child4Cursor()

const gola = document.querySelectorAll(".gola")
gola.forEach((element) => {
    element.addEventListener('click', function(){
    element.style.backgroundColor = "#000";
    })
});