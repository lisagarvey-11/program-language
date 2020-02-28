$(document).ready(function() {
  var answer1 = parseInt($("input:radio[name=answer1]:checked").val());
  var answer2 = parseInt($("input:radio[name=answer2]:checked").val());
  var answer3 = parseInt($("input:radio[name=answer3]:checked").val());
 
  if (answer1 === 5 || answer1 < 5) {
    $('#answers').show();
  } else if (answer2 > 5 && answer2 < 10 || answer2 === 10) {
    $('#answers').show();
  } else if (answer3 > 10 && answer3 < 15 || answer3 === 15) {
    $('#answers').show();
  };
  $("#output").text(result);

  $(".clickable").click(function() {
    $(".answer-showing").show();
  });
}); 