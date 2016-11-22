$(document).ready(function () {
  var apiKey = 'd5f81af7e565653bdaca9a5f863d08a0'

  // var apiKey = 
  var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';

 
  $.get(weatherUrl + 'New York City')
    .fail(function (xhr) {
      console.log(xhr);
    })
    .done(function (response) {
      console.log(response);

      var temp = response.main.temp;
      var humidity = response.main.humidity;
      var windSpeed = response.wind.speed;

    $('#nyc-weather')
      .append('<p>Temperature: ' + temp + '</p>')
      .append('<p>Humidity: ' + humidity + '</p>')
      .append('<p>Wind Speed: ' + windSpeed + '</p>')

    })
    
    $('#weather-form').submit(function (event) {
      event.preventDefault();

      // get user input
      var city = $('#city').val();
      var state = $('#state').val();

      $.ajax({
        url: weatherUrl + city + ',' + state,
        type: 'GET',
        success: function (response) {
          // pipe AJAX reponse to outside function for cleaner code
          outputWeather(response);
        },
        error: function (xhr) {
          console.log(xhr);
        }
      });
    })

    function outputWeather (response) {
      console.log(response);

      var city = response.name;
      var temp = response.main.temp;
      var humidity = response.main.humidity;
      var windSpeed = response.wind.speed;

      // change background color
      colorBackground(temp);

      $('#weather-output')
        .empty() // be sure to clear out any data from previous searches!
        .append('<p>City: ' + city + '</p>')
        .append('<p>Temperature: ' + temp + '</p>')
        .append('<p>Humidity: ' + humidity + '</p>')
        .append('<p>Wind Speed: ' + windSpeed + '</p>')

    function colorBackground (temp) {
      if (temp > 75) {
        $('body').css('background', 'red');
      } else {
        $('body').css('background', 'blue');
      }
    }

});
