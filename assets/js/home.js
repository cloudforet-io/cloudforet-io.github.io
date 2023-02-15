(function() {
    // swiper
    const breakpoint = window.matchMedia( '(min-width: 1024px)' );
    let mainSwiper;
    const breakpointChecker = function() {
        if ( breakpoint.matches === false ) {
            if ( mainSwiper !== undefined ) mainSwiper.destroy();
        } else if ( breakpoint.matches === true ) {
            window.scrollTo(0, 0);
            return (
                enableSwiper()
            )
        }
    };
    const enableSwiper = function() {
        mainSwiper = new Swiper ('.swiper', {
            direction: 'vertical',
            speed: 500,
            autoHeight: true,
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.swiper-button-next',
            },
            mousewheel: {
                invert: false,
                sensitivity: 0,
            },
            keyboard: {enabled: true,},
            on: {
                activeIndexChange: function () {
                    if(mainSwiper.realIndex - mainSwiper.previousIndex > 0) {
                        navbar[0].classList.add('active');
                    } else {
                        navbar[0].classList.remove('active');
                    }
                }
            },
        });
    };
    breakpoint.addEventListener('change', breakpointChecker);
    breakpointChecker();

    // navbar
    const navbar = document.getElementsByClassName('navbar');
    let before = 0;
    window.addEventListener('scroll',(ev)=>{
        if(before < window.scrollY) navbar[0].classList.add('active');
        else navbar[0].classList.remove('active');
        before = window.scrollY;
    });

    // lottie
    $(function () {
        bodymovin.loadAnimation({
            container: document.getElementById('cloud'),
            path: '/images/home/lottie_cloud.json',
            renderer: 'svg',
            loop: true,
            autoplay: true,
        });
        bodymovin.loadAnimation({
            container: document.getElementById('architecture'),
            path: '/images/home/lottie_puzzle.json',
            renderer: 'svg',
            loop: true,
            autoplay: true,
        });
        bodymovin.loadAnimation({
            container: document.getElementById('box'),
            path: '/images/home/lottie_box.json',
            renderer: 'svg',
            loop: true,
            autoplay: true,
        });
    });
}());
