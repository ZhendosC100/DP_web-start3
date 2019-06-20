$(document).ready( function(){
    let basket = $('.basket'),
        shadow = $('.aside_shadow'),
        close = $('.close');
    $('.price_buy_btn__img').on('click', function(e){
        e.preventDefault();
        basket.show();
        shadow.show();
    });

    close.on('click', function(){
        basket.hide();
        shadow.hide();
    });
});