function startAll() {

    anime({
        targets: '.Texts',
        translateX: [570 , 0],
        duration: 4500,
    opacity: [0,1] 
      });
       anime({
        targets: '.imgBorder',
        translateY: [-570 , 0],
        duration: 4500,
    opacity: [0,1] 
      });

    let animeLetter = function (target, delay) {
        anime({
            targets: target,
            color: ['#426cc9', '#8a2be2', '#710280', '#9a89ff', '#077944', '#426cc9'],
            duration: 1000,
            easing: 'linear',
            delay: delay,
            loop: true
        });
    }
    animeLetter('.hLetter', 150 );
    animeLetter('.aLetter', 60);
    animeLetter('.mLetter', 250);
    animeLetter('.a2Letter', 20);
    const container = document.querySelector('.fireworks');
    const fireworks = new Fireworks(container, {
        rocketsPoint: 50, // center
        speed: 2,
        acceleration: 1.2,
        friction: 1,
        gravity: 1.8,
        particles: 590,
        trace: 3,
        explosion: 6,
        autoresize: true,
        brightness: {
            min: 50,
            max: 80,
            decay: {
                min: 0.015,
                max: 0.03
            }
        },
        boundaries: {
            x: 1,
            y: 0,
            width: container.clientWidth,
            height: container.clientHeight,


        },
        sound: {
            enable: true,
            files: [
                'assets/audio/explosion0.mp3',
                'assets/audio/explosion1.mp3',
                'assets/audio/explosion2.mp3',
            ],
            volume: {
                min: 30,
                max: 60
            }
        },
        mouse: {
            click: true,
            move: false,
            max: 3
        }
    });
    
    fireworks.start();
    document.querySelector('#hbdAudio').play();
    
}
let timeOut = 5;
let timer = setInterval(() => {
    document.querySelector('.timer h1').textContent = ` ${timeOut--}`
    if (timeOut < 0) {
        document.querySelector('.countDown').style.opacity = 0;
        document.querySelector('.balloon').style.opacity = 1;

        clearInterval(timer);
        startAll();
         
    }
}, 1000)

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    speed: 500,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    effect: 'fade',
 
  });