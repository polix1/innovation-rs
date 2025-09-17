document.addEventListener("DOMContentLoaded", () =>{
    let currentIndex = 0;
    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;

    document.getElementById("next").addEventListener("click", () => {
        showSlide(currentIndex + 1);
    });

    document.getElementById("prev").addEventListener("click", () => {
        showSlide(currentIndex - 1);
    });

    function showSlide(index){
        if(index < 0) index = totalSlides - 1;
        if(index >= totalSlides) index = 0;

        currentIndex = index;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }
});