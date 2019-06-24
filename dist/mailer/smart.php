<?php 

$email = $_POST['user_email'];
$text = $_POST['user_text'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'jablonski_serwis@mail.ru';                 // Наш логин
$mail->Password = 'serwisWarszawa';                            // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('jablonski_serwis@mail.ru', 'Евгений Третьяк');   // От кого письмо 
$mail->addAddress('zhendos@tut.by');     // Add a recipient
$mail->addAddress('velmoren@gmail.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Дипломная работа)';
$mail->Body    = '
	Пользователь оставил свои данные <br> 
	E-mail: ' . $email . ' <br>
	Послание от замученного студента: ' . $text . '';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>