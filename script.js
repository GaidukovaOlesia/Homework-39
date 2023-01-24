const slider = document.querySelector(".slider");
const sliderItems = Array.from(slider.children);
const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");
btnPrev.classList.add("hidden");

sliderItems.forEach(function (slide, index) {
    if (index !== 0) slide.classList.add("hidden");
    slide.dataset.index = `${index}`;
    sliderItems[0].setAttribute("data-active", "");

    slide.addEventListener("click", function() {

        slide.classList.add("hidden");
        slide.removeAttribute("data-active");

        const nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;

        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
        nextSlide.classList.remove("hidden");
        nextSlide.setAttribute("data-active", "");
    })
})

btnNext.onclick = function() {
    showNextSlide("next");
}

btnPrev.onclick = function() {
    showNextSlide("prev");
}

function showNextSlide(direction) {
    const currentSlide = slider.querySelector("[data-active]");
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add("hidden");
    currentSlide.removeAttribute("data-active");

    let nextSlideIndex;
    if (direction === "prev") {
        nextSlideIndex = currentSlideIndex - 1;
        if (currentSlideIndex === 1) {
                btnPrev.classList.add("hidden");
                btnNext.classList.remove("hidden")
            } else {
                btnNext.classList.remove("hidden")
            }
    } else if (direction === "next") {
        nextSlideIndex = currentSlideIndex + 1;
        if (currentSlideIndex === sliderItems.length - 2) {
                btnNext.classList.add("hidden");
                btnPrev.classList.remove("hidden");
            } else {
                btnPrev.classList.remove("hidden");
            }
    }
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove("hidden");
    nextSlide.setAttribute("data-active", "");
}

