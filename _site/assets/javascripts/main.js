function facebookClientGallery() {
  var openGraphUrl = "https://graph.facebook.com/v2.8/";
  var albumID = "936209046430553";
  var token = "EAADPAHttTCwBABoL3ypQ0lZBs2K4QZBeFCivMErpXjLsxikQfPMkldHZC8VzVVTcTaDqpchwhwpsnRhvZBssw7L7wkVJItHEcw59gVYDDFJZBicMkWRgZCAk9R2poSXup2ZCY3TGZCE2JGOw75HXDOEcgtKAH8g0e5EZD";
  var limit = "30";

  var endpoint = openGraphUrl + "/" + albumID + "/photos?access_token=" + token + "&fields=images&limit=" + limit;

  $.getJSON(endpoint, function(data) {
      for( var i = 0; i < data.data.length; i++ ){
        $('.fb-album-container').append(
        '<div class="col-md-2 col-sm-3 col-xs-4 facebook-photo-wrapper"><img class="thumbnail facebook-photo" src="'
          + data.data[i].images[4].source +
        '"></div>');
      }
  }).fail(function() {
    alert('Could not receive data. Please contact admin.');
  });
}

function mobileMenu() {
  $('.hamburger').on('click', function() {
    $('.mobile-menu ul').slideToggle('fast', function() {
      $('.mobile-menu ul').show();
    });
    $('.hamburger').hide();
    $('.cross').show();
  });

  $('.cross').on('click', function() {
    $('.mobile-menu ul').slideToggle('fast', function() {
      $('.mobile-menu ul').hide();
    });
    $('.cross').hide();
    $('.hamburger').show();
  });
}

var $contactForm = $('.get-in-touch-form');
var $btn = $('.btn-get-in-touch');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/foreverlovepetcare@yahoo.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
      $btn.addClass('alert--loading');
			$btn.prop('value', 'Sending Message...');
		},
		success: function(data) {
			$btn.find('.alert--loading').hide();
			$btn.prop('value', 'Message Sent!');
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
		}
	});
});

$(document).ready(function() {
  facebookClientGallery();
  mobileMenu();
});
