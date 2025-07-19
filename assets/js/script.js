const toggleBtn = document.getElementById("toggleBtn");
const closebtn = document.getElementById("closebtn");
gsap.registerPlugin(ScrollTrigger);

// Define the timeline ONCE, paused & reversed
const tl = gsap.timeline({ paused: true, reversed: true });

tl.to("#navbar", {
    right: 0,
    duration: 0.8,
    ease: "power3"
}).from(
    "#navbar li",
    {
        x: 180,
        stagger: 0.2,
        duration: 1,
        ease: "power2",
        opacity: 0,
    },
);

toggleBtn.addEventListener("click", () => {
    tl.play();
});

closebtn.addEventListener("click", () => {
    tl.reverse();
});

// Cursor 
const cursor = document.querySelector(".custom-cursor");

window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out"
    });
});

// Hero Heading
gsap.from("#heroText span", {
    y: 300,
    stagger: 0.2,
    duration: 1,
    ease: "power2"
});


// Button Effect
const ctaBtn = document.getElementById("getStartedBtn");

const shake = gsap.timeline({ paused: true });

shake.fromTo(
    ctaBtn,
    { rotation: 0 },
    { rotation: -10, duration: 0.1, yoyo: true, repeat: 2, ease: "power2.inOut" }
);

ctaBtn.addEventListener("mouseenter", () => {
    shake.restart();
});

ctaBtn.addEventListener("mouseleave", () => {
    gsap.to(ctaBtn, { rotation: 0, duration: 0.2, ease: "power2.inOut" });
});

// Slider
const tl2 = gsap.timeline();
tl2.to(".main", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".main", 
        end: "top 50%",     
        scrub: true,           
    }
})


// Slider

gsap.to(".imagesContainer", {
    width: "100%",
    duration: 2,
    stagger: 2,
    ease: "power2.inOut",
})

gsap.to(".textContainer h1", {
    ease: "power2.inOut",
    duration: 2,
    stagger: 2,
    top: 0
})

gsap.to(".textContainer h1", {
    delay: 2,
    ease: "power2.inOut",
    duration: 2,
    stagger: 2,
    top: "-100%"
})

gsap.to(".imagesContainer img", {
    delay: 2,
    ease: "power2.inOut",
    duration: 2,
    stagger: 2,
    width: "0%"
})



// Featured Plan 
let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#featured",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
  },
});
tl4.from(".card1", {
  x: -500,
  y: 300,
  rotation: 30,
},"<")
.from(".card2", {
  x: 500,
  y: -200,
  rotation: -30,
}, "<") 
.from(".card3", {
  x: 100,
  y: 500,
  rotation: 100,
}, "<").from(".card4", {
  x: 500,
  y: 300,
  rotation: -10,
}, "<");

ScrollTrigger.refresh();








