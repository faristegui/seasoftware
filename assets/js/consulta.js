function enviarConsulta()
{
  var textoenvio = "";

  textoenvio += "<h2>Consulta Faristegui Software</h2><h3>";

  textoenvio += "Nombre y apellido: " + $('#name').val() + " " + $('#surname').val() + ".\n";

  textoenvio += "Email: " + $('#email').val() + ".\n";

  textoenvio += "Mensaje: " + $('#message').val() + ".</h3>";

  var url = "https://telemedicina-life.ar/api/enviaremail.php";

  $.post( url, { textoenvio }, null, "json" )
    .done(function( data ) {
          if (data["status"].includes('correctamente'))
          {
            $('#name').val('');
            $('#surname').val('');
            $('#email').val('');
            $('#message').val('');
            alert("Su consulta ha sido enviada. Responderemos a la brevedad. Muchas gracias!");
          }
      });
}