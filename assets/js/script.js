jQuery('[type="button"]').click(function() {
  jQuery.post( 
  
  "submit.php", //url
  
  { //������ �� �����
    email: jQuery('[name="email"]').val(),
    name: jQuery('[name="name"]').val(),
    phone: jQuery('[name="phone"]').val(),
    message: jQuery('[name="message"]').val()
  }, 
  
  function( data ) { //����� �������� ������
   jQuery( ".result" ).html(data);
  }
  
  );
});