$(document).ready(function(){
    // $('#form_question').validate({
    //     errorClass: "invalid",
    //     errorElement: "div",
    //     rules: {
    //         user_text: {
    //             required: true,
    //             minlength: 5,
    //         },
    //         // user_phone: {
    //         //     required: true
    //         // },
    //         user_email: {
    //             required: true,
    //             email: true
    //         }
    //     },
    //     messages: {
    //         user_text: {
    //             required: "Заполните поле 'Введите Ваш вопрос!'",
    //             minlength: jQuery.validator.format("Минимум {0} символа!")
                
    //         },
    //         // user_phone: "Заполните поле 'Ваш номер'!",
    //         user_email: {
    //             required: "Заполните поле 'Ваш e-mail'",
    //             email: "Введите в формате name@domain.com"
    //         }
    //     }
    // });


    let userTextOn = $('.user_text'),
        userEmailOn = $('.user_email');



    $('#form_question').on('submit', function(e){
        e.preventDefault();
        let userName = userTextOn.val(),
            userEmail = userEmailOn.val();

            if(userName!= '' && userEmail != ''){
                $.ajax({
                    type: "POST",
                    url: ('/mailer/smart.php'),
                    data: $(this).serialize(), // serializes the form's elements.
                    success: function(data)
                    {
                        alert("Спасибо! Ваш вопрос принят."); // show response from the php script.
                        userName = '';
                        userEmail = '';
                    },
                    error: function (data) {
                     alert("Что-то пошло не так!!");
                 }
                  });
            } else {
                alert('Заполните все поля!');
            }
    });

    
        ;
});