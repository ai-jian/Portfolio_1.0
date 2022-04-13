
// nav-toggle
const toggleBtn = document.querySelector('.nav-toggle')
const nav = document.querySelector('.navbar')

function navToggle() {
    nav.classList.toggle('toggled')
    toggleBtn.classList.toggle('toggled-btn')
}

toggleBtn.addEventListener('click', navToggle);

//fixed header - toggle
const showAnim = gsap
    .from(".main-tool-bar", {
        yPercent: -100,
        paused: true,
        duration: 0.2
    })
    .progress(1);

ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
    }
});


//custom cursor
const cursor = document.querySelector(".app__cursor")
const follower = document.querySelector(".cursor-follower")
const cursorScale = document.querySelectorAll(".app__cursor-scale")

gsap.set('.app__cursor', { xPercent: -50, yPercent: -50 })
gsap.set('.cursor-follower', { xPercent: -50, yPercent: -50 })

window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, 0.2, { x: e.clientX, y: e.clientY })
    gsap.to(follower, 0.9, { x: e.clientX, y: e.clientY })
})

// cursorScale.classList.add('cursor-grow')

cursorScale.forEach(link => {
    link.addEventListener('mousemove', () => {
        link.classList.contains('cursor-small') ?
            cursor.classList.add('grow-small') :
            cursor.classList.add('cursor-grow')

    })
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-grow')
        cursor.classList.remove('grow-small')
    })
})