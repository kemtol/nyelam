$(document).ready(function(){
  $.get("https://kemtol.github.io/nyelam/ajax/services-bali.html", function(data){
    $("#hotdeal").append(data);
  });
});
