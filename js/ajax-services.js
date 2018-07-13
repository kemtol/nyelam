$(document).ready(function(){
  var servicespot = $(location).attr('pathname');
  console.log(servicespot);
  $.get("https://kemtol.github.io/nyelam/ajax/services-bali.html", function(data){
    $("#service--list").append(data);
  });
});
