$(document).ready(function(){
  $.get("{{site.url}}/ajax/services-bali.html", function(data){
    alert(data);
  });
});
