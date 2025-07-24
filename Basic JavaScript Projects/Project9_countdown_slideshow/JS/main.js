function countdown() {
    let seconds = document.getElementById("seconds").value;

    function tick() {
        seconds--;
        document.getElementById("timer").innerHTML = seconds;
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            document.getElementById("timer").innerHTML = "Time's up!";
        }
    }

    tick();
}

let slideIndex = 0;
let slides;

window.onload = function () {
    slides = document.querySelectorAll(".slide");
    showSlides();
};

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 3000);
}
