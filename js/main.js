$(document).ready( function(){
    let basket = $('.basket'),
        productPage = $('.sale__img'),
        shadow = $('.aside_shadow'),
        question = $('.question'),
        buy = $('.buy'),
        close = $('.close');
    $('.price_buy_btn__img').on('click', function(e){
        e.preventDefault();
        basket.show();
        shadow.show();
    });

    $('.menu__hamburger_img').on('click', function(){

        if ($(window).width() <= '950'){
            $('.humburger-section').toggleClass('active_menu');
        }
        
    });

    $('.basket__end').on('click', function(){
        buy.addClass('active_question');
    });

    $('.contact__btn, .navbar-info__btn').on('click', function(){
        question.addClass('active_question');
        shadow.show();
    });

    productPage.on('click', function(){
        location.href="product.html";
    });

    close.on('click', function(){
        basket.hide();
        question.removeClass('active_question');
        buy.removeClass('active_question');
        shadow.hide();
    });
});