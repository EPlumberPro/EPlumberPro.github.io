<?php
if (!empty($_POST['name']) AND !empty($_POST['email']) AND !empty($_POST['message'])) 
{
    $headers = "From: PlumberPro\r\n".
                "Reply-To: annyurova@gmail.com\r\n".
                "X-Mailer: PHP/". phpversion();
         
    $theme = "Новое сообщение с сайта PlumberPro";             
             
    $letter = "Данные сообщения:\r\n";
    $letter .="Имя: ".$_POST['name']." \r\n";
    $letter .="Email: ".$_POST['email']." \r\n";
    $letter .="Телефон: ".$_POST['phone']." \r\n";
    $letter .="Сообщение: ".$_POST['message']." \r\n";
    
    if (mail("annyurova@gmail.com", $theme, $letter, $headers)){
      header("Location: /thankyou.php");
    } else {
      header("Location: /");
    }  
              
} else {
  header("Location: /");
}