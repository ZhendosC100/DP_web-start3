$(document).ready( function(){
    let basket = $('.basket'),
        close = $('.close');
    $('.modal_basket').on('click', function(e){
        e.preventDefault();
        basket.show();
    });

    close.on('click', function(){
        basket.hide();
    });
});