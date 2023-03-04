(function () {

    const icons = [
        {
            class: 'footer__social-media-icons-twitter',
            link: 'https://twitter.com/',
            svgPicture: 'img/footer/social-media/twitter-icon.svg'
        },
        {
            class: 'footer__social-media-icons-facebook',
            link: 'https://www.facebook.com/',
            svgPicture: 'img/footer/social-media/facebook-icon.svg'
        },
        {
            class: 'footer__social-media-icons-instagram',
            link: 'https://www.instagram.com/',
            svgPicture: 'img/footer/social-media/instagram-icon.svg'
        }
    ];

    function renderIcons(icons) {
        const iconsConteiner = document.querySelector('.footer__social-media-icons');
        iconsConteiner.innerHTML = '';

        for (const icon of icons) {
            iconsConteiner.innerHTML += `
            <a class="${icon.class} footer__social-media-icons-button" href="${icon.link}"
                            target="_blank">
                            <svg class="footer__social-media-icons-item-svg">
                                <use href="${icon.svgPicture}#icon"></use>
                            </svg>
                        </a>
            `;
        }
    }

    renderIcons(icons);

})();