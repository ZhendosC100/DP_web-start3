$(document).ready( function(){
    let basket = $('.basket'),
        productPage = $('.sale__img'),
        shadow = $('.aside_shadow'),
        question = $('.question'),
        buy = $('.buy'),
        nameEnterBtn = $('.dress_correct'),
        close = $('.close');
        console.log(buy);
    $('.price_buy_btn__img').on('click', function(e){
        e.preventDefault();
        basket.show();
        shadow.show();
    });

    $('.navbar-logo').on('click', function(){     
	    window.location.href='index.html';
    });

    $('.menu__hamburger_img').on('click', function(){

        if ($(window).width() <= '950'){
            $('.humburger-section').toggleClass('active_menu');
        }
        
    });

    nameEnterBtn.on('click', function(){
        $('.name').css("display", "flex");
        shadow.show();
    });

    $('.name_exit').on('click', function(){
        $('.name').css("display", "none");
        shadow.hide();
    });

    $('.basket__end').on('click', function(){
        $('.buy').css("display", "block");
        basket.hide();
        shadow.show();
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
        $('.buy').css("display", "none");
        shadow.hide();
    });
});