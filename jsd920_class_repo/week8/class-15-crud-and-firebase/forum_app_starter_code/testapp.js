$(document).ready(function() {

  var messageAppReference = firebase.database();

  // CREATE
    $('#message-form').submit(function(event) {
    event.preventDefault()

    var message = $('#message').val()

    $('#message').val('')

    var messagesReference = messageAppReference.ref('messages');

    messagesReference.push({
      message: message,
      votes: 0
    })
  })

  function getFanMessages() {
    
    messageAppReference.ref('messages').on('value', function (results) {

          
          $('.message-board').empty();

      results.forEach(function (msg) {
        
        var id = msg.key
        var message = msg.val();
        var messageText = message.message;

        // add the message text to the <li>
        $li.text(messageText);

        $('.message-board').append($li);
      })
    })
  }


});


