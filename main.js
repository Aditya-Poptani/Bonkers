const lenis = new Lenis({
    autoRaf: true,
  });0

window.onload = function() {
    const body = document.body;
    const html = document.documentElement;
    let startingTl = gsap.timeline()
    startingTl.to(".center-logo-container",{
        top:0,
        transform:"translate(-50%,0%) scale(1)",
        duration:1,
        delay:5
    })
    .to(".main-img-overlay",{
        top:"100%",
        duration:0.85,
        borderRadius:"50%",
        // opacity:1,
        delay:0.1,
        // ease:"none"
    })
    .to(".content-container h2",{
        top:0,
        duration:0.3,
        opacity:1,
    },"H2P")
    .to(".content-container p",{
        top:0,
        duration:0.3,
        opacity:1,
    },"H2P")
    .to(".header-links-text",{
        top:0,
        duration:0.3,
        stagger:0.09
    })
    .to(".shopNow-btn",{
        opacity:1,
        duration:0.3,
    })
    .to(".launch-date-mainText",{
        top:"0",
        duration:0.3,
    })
    .to(body,{
        overflow:"visible",
        duration:0.1
    },"overflow-visible")
    .to(html,{
        overflow:"visible",
        duration:0.1
    },"overflow-visible")
}
const headerLinkELem = document.querySelectorAll(".header-links");

headerLinkELem.forEach(linkElem => {
    linkElem.addEventListener("mouseenter",() => {
        mainTextElem = linkElem.querySelector(".header-links-text")
        copyTextElem = linkElem.querySelector(".header-links-text-copy")
        gsap.to(mainTextElem,{
            top:"-100%",
            duration:0.5
        })
        gsap.to(copyTextElem,{
            top:"0%",
            duration:0.5
        })
    })

    linkElem.addEventListener("mouseleave",() => {
        mainTextElem = linkElem.querySelector(".header-links-text")
        copyTextElem = linkElem.querySelector(".header-links-text-copy")
        gsap.to(mainTextElem,{
            top:"0%",
            duration:0.5
        })
        gsap.to(copyTextElem,{
            top:"100%",
            duration:0.5
        })
    })
})

const cursorElem = document.querySelector(".cursor");
window.addEventListener("mousemove",function(dets){
    gsap.to(cursorElem,{
        x:dets.x,
        y:dets.y,
        duration:0.5
    })
})


const luanchDateELem = document.querySelector(".launch-date-mainText")
const firstContentElem = document.querySelector(".content-container h2")
const secondContentElem = document.querySelector(".content-container p")

luanchDateELem.addEventListener("mouseenter",() => {
    gsap.to(luanchDateELem,{
        backgroundColor:"white",
        color:"black",
        duration:0.3
    })
})
luanchDateELem.addEventListener("mouseleave",() => {
    gsap.to(luanchDateELem,{
        backgroundColor:"transparent",
        color:"white",
        duration:0.3
    })
})

firstContentElem.addEventListener("mouseenter",() => {
    gsap.to(firstContentElem,{
        backgroundColor:"white",
        color:"black",
        duration:0.3
    })
})
firstContentElem.addEventListener("mouseleave",() => {
    gsap.to(firstContentElem,{
        backgroundColor:"transparent",
        color:"white",
        duration:0.3
    })
})

secondContentElem.addEventListener("mouseenter",() => {
    gsap.to(secondContentElem,{
        backgroundColor:"white",
        color:"black",
        duration:0.3
    })
})
secondContentElem.addEventListener("mouseleave",() => {
    gsap.to(secondContentElem,{
        backgroundColor:"transparent",
        color:"white",
        duration:0.3
    })
})

const searchBtnElem = document.querySelector("#search-btn")
const searchbarClosingBtnElem = document.querySelector("#searchbar-closingBtn")

searchBtnElem.addEventListener("click",() => {
    gsap.to(".searchbar-container",{
        top:0,
        duration:0.5
    })
})

searchbarClosingBtnElem.addEventListener("click",() => {
    gsap.to(".searchbar-container",{
        top:"100%",
        duration:0.5
    })
})