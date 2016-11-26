$(function() {
  // DOM is now ready
  _500px.init({
    sdk_key: '0e2bfe357251c6b2a05e610ca5e66f09fe72fcd5'
  });

     $('#login').click(function() {
        console.log("login clicked");
        _500px.login();
    });

    _500px.on('authorization_obtained', function() {
        // Successful OAuth login!
        $('.sign-in-view').hide();
        $('.image-results-view').show();

        if (navigator.geolocation) {
            // if it is use the getCurrentPosition method to retrieve the Window's location
            navigator.geolocation.getCurrentPosition(function(position) {
              var lat = position.coords.latitude;
              var long = position.coords.longitude;

              console.log('lat: ', lat);
              console.log('long: ', long);

              var radius = '25mi';

              var searchOptions = {
                  geo: lat + "," + long + "," + radius,
                  only: 'Landscapes',
                  image_size: 3,
                  rpp: 28,
                  sort: 'highest_rating'
              };

                _500px.api('/photos/search', searchOptions, function(response) {
                    console.log(response);
                    if (response.data.photos.length == 0) {
                        alert('no photos found');
                    } else {
                        response.data.photos.forEach(function(photo) {
                          var image_url = photo.image_url;
                          var image_element = $('<img>');
                          image_element.attr('src', image_url);
                          $('div.images').append(image_element);
                        });

                        $("images").each(function() {
                            $(this).append('.images' + response.data.photos.image_url + '.images').attr('src');
                        });

                        //custom function
                    }
                });

            });
        } else {
            $('.images').append('Sorry, the browser does not support geolocation');
        }
    });
});