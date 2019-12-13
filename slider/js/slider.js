const slider = document.getElementById('tut-budet-slider');
const sliderData = [
    {
        image: 'images/slides/1.jpg',
        title: 'Slide Title 1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ea quibusdam at repellendus adipisci est fugiat nisi animi nemo sint.'
    },
    {
        image: 'images/slides/2.jpg',
        title: 'Slide Title 2',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ea quibusdam at repellendus adipisci est fugiat nisi animi nemo sint.'
    },
    {
        image: 'images/slides/3.jpg',
        title: 'Slide Title 3',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ea quibusdam at repellendus adipisci est fugiat nisi animi nemo sint.'
    },
    {
        image: 'images/slides/4.jpg',
        title: 'Slide Title 4',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ea quibusdam at repellendus adipisci est fugiat nisi animi nemo sint.'
    }
];

;(function(){
    
    let activeSlide = 0;
    let duration = 5000;
    let autoplay;
    
    let sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');
    slider.appendChild(sliderContainer);
    
    //SLIDES
    let slides = document.createElement('div');
    slides.classList.add('slides');
    sliderContainer.appendChild(slides);
    
    //NEXT PREV BTNS
    let btnPrev = document.createElement('button');
    let btnNext = document.createElement('button');
    btnPrev.classList.add('slider-prev');
    btnNext.classList.add('slider-next');
    let btnPrevIcon = document.createElement('i');
    let btnNextIcon = document.createElement('i');
    btnPrevIcon.classList.add('icon-left-open-big');
    btnNextIcon.classList.add('icon-right-open-big');
    btnPrev.appendChild(btnPrevIcon);
    btnNext.appendChild(btnNextIcon);
    sliderContainer.appendChild(btnPrev);
    sliderContainer.appendChild(btnNext);
    
    //BULLETS
    let sliderBullets = document.createElement('div');
    sliderBullets.classList.add('slider-bullets');
    sliderContainer.appendChild(sliderBullets);
    
    //LOOP
    sliderData.map((slide, index) => {
    
        let bullet = document.createElement('a');
        bullet.href = '#';
        sliderBullets.appendChild(bullet);
    
        let slideItem = document.createElement('div');
        slideItem.classList.add('slide-item');
        let slideItemImage = document.createElement('div');
        slideItemImage.classList.add('slide-item-image');
        let slideItemText = document.createElement('div');
        slideItemText.classList.add('slide-item-text');
    
        let img = document.createElement('img');
        img.src = slide.image;
        img.alt = slide.title;
    
        let h3 = document.createElement('h3');
        h3.innerHTML = slide.title;
        let p = document.createElement('p');
        p.innerHTML = slide.text;
    
        slideItemImage.appendChild(img);
        slideItemText.appendChild(h3);
        slideItemText.appendChild(p);
    
        slideItem.appendChild(slideItemImage);
        slideItem.appendChild(slideItemText);
    
        slides.appendChild(slideItem);
    
    });
    
    function changeSlide() {
        if(document.querySelector('.slide-item.active')) {
            document.querySelector('.slide-item.active').classList.remove('active');
            document.querySelector('.slider-bullets>a.active').classList.remove('active');
        }
        document.querySelectorAll('.slide-item')[activeSlide].classList.add('active');
        document.querySelectorAll('.slider-bullets>a')[activeSlide].classList.add('active');
        
        clearInterval(autoplay);
        autoplay = setInterval(nextSlide, duration);
    }

    function nextSlide() {
        activeSlide++;
        if(activeSlide === sliderData.length) {
            activeSlide = 0;
        }
        changeSlide();
    }
    function prevSlide() {
        if(activeSlide === 0) {
            activeSlide = sliderData.length;
        }
        activeSlide--;
        changeSlide();
    }

    btnPrev.addEventListener('click', prevSlide);
    btnNext.addEventListener('click', nextSlide);

    document.querySelectorAll('.slider-bullets>a').forEach((element, index) => {
        element.addEventListener('click', (event)=>{
            event.preventDefault();
            activeSlide = index;
            changeSlide();
        })
    })

    changeSlide();

})();
