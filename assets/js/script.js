jQuery('[type="button"]').click(function() {
  jQuery.post( 
  
  "submit.php", //url
  
  { //данные из формы
    email: jQuery('[name="email"]').val(),
    name: jQuery('[name="name"]').val(),
    phone: jQuery('[name="phone"]').val(),
    message: jQuery('[name="message"]').val()
  }, 
  
  function( data ) { //после отправки данных
   jQuery( ".result" ).html(data);
  }
  
  );
});