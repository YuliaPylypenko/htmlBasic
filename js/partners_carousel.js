(function () {

    const slides = [
        '<img src="img/partners/partner_first.png" alt="partner"></img>',
        '<img src="img/partners/partner_second.png" alt="partner"></img>',
        '<img src="img/partners/partner_third.png" alt="partner"></img>',
        '<img src="img/partners/partner_fourh.png" alt="partner"></img>'
    ];

    let currentSlide = 0;

    function renderSlides(slides) {
        const slidesContainer = document.querySelector('.partners');
        slidesContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 450) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slidesContainer.innerHTML += slides[secondSlide];
        if (window.innerWidth > 768) {
            const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
            slidesContainer.innerHTML += slides[thirdSlide];

            if (window.innerWidth > 900) {
                const fouthSlide = thirdSlide + 1 >= slides.length ? 0 : thirdSlide + 1;
                slidesContainer.innerHTML += slides[fouthSlide];
            }
        }
    }
}


    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderSlides(slides);
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
        renderSlides(slides);
    }

    renderSlides(slides);

    const nextButton = document.querySelector('.partners-carousel__next');
    nextButton.addEventListener('click', nextSlide);

    const prevButton = document.querySelector('.partners-carousel__prev');
    prevButton.addEventListener('click', prevSlide);

    window.addEventListener('resize', () => {
        renderSlides(slides);
    });
})();