$(document).ready(function(){
  var hostname = "http://e-nyelam.com";
  var servlist = $(location).attr('pathname').split(/[\s-]+/);
  var datasource = hostname + "/ajax/services-" + servlist[servlist.length-1];
  
  $.get(datasource, function(data){
    $("#service--list").append(data);
  });
});
