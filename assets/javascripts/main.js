function facebookClientGallery() {
  var openGraphUrl = "https://graph.facebook.com/v2.8/";
  var albumID = "936209046430553";
  var token = "EAADPAHttTCwBAOq5uq7ZCxjCwv4jre0hyteA8v03UdEDUHZAvIm9oef5J9pQtP4lXX1xdD0ZBP7qJEP9Kve9wPKvBfjV3Hcn5iTssz4AdGKLOOPGUZBUKcZAs6R18cou3PwuEl7mY0kVaJpaZBUXDTQfvtJZAJVR5awvv1238bRBQZDZD";
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
  $navigationList = $('.navigation ul');
  $('.mobile-menu').append($navigationList);
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

function formSpreeAjax() {
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
}

$(document).ready(function() {
  facebookClientGallery();
  formSpreeAjax();
  if (window.outerWidth < 700) {
    mobileMenu();
  }
});
