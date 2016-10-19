$(document).ready(function() {
  $("#inputForm form").submit(function(event) {
    var name = $("#name").val();
    $(".name").text(name);
    $(".letter").show();
    $("#inputForm").hide();
    event.preventDefault();
  });
});
