$(document).ready( function(){
    let basket = $('.basket'),
        productPage = $('.sale__wrapper_box'),
        shadow = $('.aside_shadow'),
        close = $('.close');
    $('.price_buy_btn__img').on('click', function(e){
        e.preventDefault();
        basket.show();
        shadow.show();
    });

    productPage.on('click', function(){
        location.href="product.html";
    });

    close.on('click', function(){
        basket.hide();
        shadow.hide();
    });
});