$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    var awesomeValue = $(this).data('heading');
    $('#awesomeness_holder').text(awesomeValue);
  });

  $('.skill_teller').on('click', function(){
    var path = window.location.pathname;
    var regex = /[^/]+$/;
    var skill = regex.exec(path);
    $('#skill_holder').text(skill[0]);
  });

  $('.meal_teller').on('click', function(){
    var meal = meals[Math.floor(Math.random()*meals.length)];
    $('#meal_holder').text(meal);
  });
});
