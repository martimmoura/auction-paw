function register(){


    var formData = JSON.stringify({email: $('#email').val(), password: $('#password').val(), name: $("#firstName").val() + " " + $("#lastName").val()});
  
    $.ajax({
        type: 'POST',
        url: '/register',
        data: formData,
        success:function(){
          window.location.replace('/me')
        },
        dataType: 'json',
        contentType : 'application/json'})
}

function redirect(){
  window.location.href = "http://localhost:3000/"; 
  // a(href='http://localhost:3000/register')
}