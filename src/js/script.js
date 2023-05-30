'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.header');
    const wrapper = document.querySelector('.wrapper');
    const headerMenu = document.querySelector('.header__menu');            
    const scrollWidth = window.innerWidth - wrapper.offsetWidth + 'px';  
    const burger = document.querySelector('.header__burger'); 
    const headerLinks = document.querySelectorAll('.header__link');

    //Header
    function headerMenuActions() {
        if (headerMenu.classList.contains('active')) {
            document.body.style.paddingRight = scrollWidth;
            header.style.paddingRight = scrollWidth;
            document.body.classList.add('hidden');
            
        } else {
            document.body.classList.remove('hidden');
            document.body.style.paddingRight = '';
            header.style.paddingRight = '';            
        }
    }

    function removeClasses() {
        if (headerMenu.classList.contains('active')) {
            headerMenu.classList.remove('active');        
        }

        if (burger.classList.contains('active')) {
            burger.classList.remove('active');       
        } 
    }
    
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        
        headerMenuActions();
        
    });

    headerLinks.forEach(link => {
        link.addEventListener('click', () => {
            removeClasses();
            headerMenuActions();
            
        });
    });

    function headerOnScroll() {
        if (window.scrollY > 0) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }

    window.addEventListener('scroll', headerOnScroll); 
    window.addEventListener('load', headerOnScroll); 


    //Range Slider
    let stepSlider = document.querySelector('.slider-form__slider');

    if (stepSlider) {
        noUiSlider.create(stepSlider, {
            start: [75],
            step: 1,
            range: {
                'min': [0],
                'max': [100]
            }
        });
    }

    const sliderValue = document.querySelector('.slider-form__number');
    stepSlider.noUiSlider.on('update', function (values) { 
        sliderValue.textContent = Math.round(values);
    });


    //Select    
    const select = document.querySelector('.form-order__select');

    const choices = new Choices(select, {
        shouldSort: false,
        position: 'bottom',
        searchEnabled: false,
        itemSelectText: '',
    });

    const selectList = document.querySelector('.choices__list[aria-expanded]');
    selectList.setAttribute('data-simplebar', '');  
    
});