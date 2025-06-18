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