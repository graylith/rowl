preLoader()

function preLoader(){
    var tl = gsap.timeline();
    tl.to(".preLoader-front", {
        duration: 1.2,
        height:"100%",
        top: "-100%",
        ease: "Expo.easeInOut",
    });

    tl.to(".preLoader-front img", {
        duration: 1.2,
        width:"20%",
        ease: "Expo.easeInOut",
    });

    tl.to(".preLoader-front", {
        duration: 1,
        top: "-200%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    
    tl.to(".preLoader-back", {
        duration: 1,
        top: "-200%",
        ease: "Expo.easeInOut",
        delay: -1
    });
    
    tl.to(".first-section .heading .text", {
        duration: 1,
        width:"100%",
        ease:"Expo.easeInout",
        delay: -0.4
    })
    
}

