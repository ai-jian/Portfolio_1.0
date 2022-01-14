const toggleBtn = document.querySelector('.nav-toggle')
const nav = document.querySelector('.navbar')

function move() {
    nav.classList.toggle('toggled')
    toggleBtn.classList.toggle('toggled-btn')
}

toggleBtn.addEventListener('click', move);
