$(document).ready(function(){
  var servicespot = $(location).attr('pathname');
  var servlist = servicespot.split(/[\s-]+/);
  console.log("https://kemtol.github.io/nyelam/ajax/services-" + servlist.[servlist.length-1]);
  
  $.get("https://kemtol.github.io/nyelam/ajax/services-bali.html", function(data){
    $("#service--list").append(data);
  });
});
