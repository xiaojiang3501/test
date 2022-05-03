gsap.registerPlugin(ScrollTrigger);

//---------------------Landing Page ScrollTrigger---------------------
function LandingPageScrollTrigger() {

    // gsap.to('body', { // LoadingAnimation---------------------
    //     opacity: 1, duration: 1.3,
    // }) // /LoadingAnimation---------------------

    // $("#codeby a").mouseenter(function () { // HoverAnimation---------------------
    //     gsap.to('#ImgWrapper', { backgroundColor: " ", })
    // });
    // $("#codeby a").mouseout(function () {
    //     gsap.to('#ImgWrapper', { backgroundColor: "#000000", })
    //     gsap.to('#codeby a', { color: "#e6e6e6", })
    //     gsap.to('#codeby a span', { color: "#f0f0f0", })
    // }); // /HoverAnimation---------------------

    let LandingPageScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: "#ImgWrapper",
            start: "0% 0%",
            end: "100% 0%",
            pin: "#ImgWrapper",
            scrub: 2.2,
        }
    })
    LandingPageScrollTrigger
        
        .to('#ImgWrapper #img', { y: -800, }, 0)
        .to('#ImgWrapper #img', { z: 2800, }, 0)

        .from('#codeby', { y : 130, opacity: 0 }, 0.31)
}
//---------------------/Landing Page ScrollTrigger---------------------

window.onload = () => {
    LandingPageScrollTrigger()
}