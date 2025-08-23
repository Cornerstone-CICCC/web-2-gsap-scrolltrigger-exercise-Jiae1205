gsap.registerPlugin(ScrollTrigger)

// YOUR CODE HERE

// line-one
const Tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-one",
    start: "top top",
    end: "+=2500",
    scrub: true,
    pin: true
  }
})

Tl1.from(".line-one span", {
  y: 500,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power2.in"
})
  .to(".line-one", {
    backgroundColor: "yellow",
    duration: 1
  })
  .from(".sun", {
    x: "100vw",
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  })
  .add("out")
  .to(".sun", {
    x: "-100vw",
    opacity: 0,
    duration: 1,
    ease: "power2.in"
  }, "out")
  .to(".line-one", {
    backgroundColor: "white",
    duration: 1
  }, "out")
  .to(".line-one span", {
    x: "100vw",
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power2.in"
  }, "out")


// line-two
const Tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-two",
    start: "top top",
    end: "+=150%",
    scrub: true,
    pin: true,
    x: (i) => i % 2 === 0 ? -200 : 200,
  }
})

Tl2.fromTo(".line-two span", {
  z: 3000,
  scale: 5,
  autoAlpha: 0,
  force3D: true
}, {
  z: 0,
  scale: 1,
  autoAlpha: 1,
  x: 0,
  ease: "expo.out",
  duration: 1.2
})
  .to(".line-two span", {
    y: (i) => i % 2 === 0 ? -10 : 10,
    duration: 1,
    ease: "none"
  })
  .to(".line-two span", {
    y: (i) => i % 2 === 0 ? 10 : -10,
    duration: 1,
    ease: "none"
  })
  .to(".line-two span", {
    x: 0,
    y: 0,
    duration: 1,
    ease: "power2.out"
  })

// line-three
const lineThree = document.querySelector(".line-three")

const overlay = document.createElement("div")
overlay.style.position = "absolute"
overlay.style.top = 0
overlay.style.left = "-100%"
overlay.style.width = "100%"
overlay.style.height = "100%"
overlay.style.backgroundColor = "black"
overlay.style.zIndex = 0
lineThree.appendChild(overlay)

document.querySelectorAll(".line-three span").forEach(span => {
  span.style.position = "relative"
  span.style.zIndex = 1
})

const moon = document.querySelector(".moon")
moon.style.position = "absolute"
moon.style.top = "5vh"
moon.style.right = "5vw"
moon.style.zIndex = 2

const Tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-three",
    start: "top top",
    end: "+=2500",
    scrub: true,
    pin: true,
    markers: true
  }
})

Tl3.from(".line-three span", {
  y: 500,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power2.in"
})
  .to(overlay, {
    x: "100%",
    duration: 1,
    ease: "none"
  })
  .to(".line-three span", {
    color: "white",
    duration: 1,
    ease: "power2.in"
  }, "<")
  .from(".moon", {
    x: "100vw",
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  })