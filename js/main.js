// COUNTDOWN TIMER
// http://devingredients.com/jcounter

$(".countdown").jCounter({
    date: "30 May 2015 12:00:00", // add the countdown's end date (i.e. 5 May 2015 12:00:00)
    timezone: "Europe/Athens", // add the timezone of your country (list of supported timezones and syntax: http://php.net/manual/en/timezones.php ) 
    format: "dd:hh:mm:ss",
    twoDigits: 'on', // choose between on and off (i.e. for two digits choose on)
    customDuration: 10*40*20*260, // Delete or comment this line and set your date up to line 2
    callback: function() { console.log("Counter finished!") }
});


// BACKGROUND IMAGES & OVERLAY

$('body').vegas({
    slides: [
        { src: 'img/background_01.jpg' },
        { src: 'img/background_02.jpg' },
        { src: 'img/background_03.jpg' }
    ],
    overlay: "img/vegas/06.png"
});


// MAILCHIMP 

// http://stackoverflow.com/a/15120409/477958

$(function () {
  var $form = $('#mc-embedded-subscribe-form');

  $('#mc-embedded-subscribe').on('click', function(event) {
    if(event) event.preventDefault();
    register($form);
  });
});

function register($form) {
  $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    cache       : false,
    dataType    : 'json',
    contentType: "application/json; charset=utf-8",
    error       : function(err) { $('#notification_container').html('<span class="alert">Could not connect to server. Please try again later.</span>'); },
    success     : function(data) {
     
      if (data.result != "success") {
        var message = data.msg.substring(4);
        $('#notification_container').html('<span class="alert">'+message+'</span>');
      } 
      
      else {
        var message = data.msg;
        $('#notification_container').html('<span class="success">'+message+'</span>');
      }
    }
  });
}