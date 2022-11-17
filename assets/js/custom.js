
(function($) {

 "use strict";
  $(document).on('ready', function() {


	//Pre-loader
	$(window).on('load', function() {
	 	$('.loader').fadeOut();
		$('.preloader').delay(250).fadeOut('slow');
		$('body').delay(250).css({'overflow':'visible'});
	 });



	//Sidemenu abr toggle

	$('.menu-toggle').on('click', function(){
  		$('.header_two').toggleClass("open");
	})
	
	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$('ul.nav').each( function( i, liList ) {
	  var $liList = $( liList );
	  $liList.on( 'click', 'li a', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	  });
	});
	
	

	//Progress bar
	$('.progress .progress-bar').progressbar({display_text: 'top'});



	//Isotope activation js codes
	var $gellary_img = $('.portfolio_items').isotope({
	  itemSelector: '.portfolio_item',
	  percentPosition: true,
	  transitionDuration: '0.5s',
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.portfolio_item',
		gutter: 15
	  },
	  getSortData: {
		name: '.name',
		symbol: '.symbol',
		number: '.number parseInt',
		category: '[data-category]',
		weight: function( itemElem ) {
		  var weight = $( itemElem ).find('.weight').text();
		  return parseFloat( weight.replace( /[\(\)]/g, '') );
		}
	  }
	});

	// filter functions
	var filterFns = {
	  // show if number is greater than 50
	  numberGreaterThan50: function() {
		var number = $(this).find('.number').text();
		return parseInt( number, 10 ) > 50;
	  },
	  // show if name ends with -ium
	  ium: function() {
		var name = $(this).find('.name').text();
		return name.match( /ium$/ );
	  }
	};

	// bind filter button click
	$('.portfolio_menu').on( 'click', 'li', function() {
	  var filterValue = $( this ).attr('data-filter');
	  // use filterFn if matches value
	  filterValue = filterFns[ filterValue ] || filterValue;
	  $gellary_img.isotope({ filter: filterValue });
	});



	// change is-checked class on buttons
	$('.portfolio_menu').each( function( i, liList ) {
	  var $liList = $( liList );
	  $liList.on( 'click', 'li ', function() {
		$liList.find('.active').removeClass('active');
		$( this ).addClass('active');
	  });
	});	
	
	
	
	//lightcase
	$('a[data-rel^=lightcase]').lightcase();



	//client slider
	$('.client_items').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		responsive: [
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 3
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 2
				  }
				},
				{
				  breakpoint: 680,
				  settings: {
					slidesToShow: 1
				  }
				},
			]
	});


 	//Google map
	var styleArray = [
		  {
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#EDEDED"
			  }
			]
		  },
		  {
			"elementType": "labels.icon",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#616161"
			  }
			]
		  },
		  {
			"elementType": "labels.text.stroke",
			"stylers": [
			  {
				"color": "#EDEDED"
			  }
			]
		  },
		  {
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#bdbdbd"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#eeeeee"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#757575"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#e5e5e5"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#9e9e9e"
			  }
			]
		  },
		  {
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#ffffff"
			  }
			]
		  },
		  {
			"featureType": "road.arterial",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#757575"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#BCBCBC"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#616161"
			  }
			]
		  },
		  {
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#9e9e9e"
			  }
			]
		  },
		  {
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#e5e5e5"
			  }
			]
		  },
		  {
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#eeeeee"
			  }
			]
		  },
		  {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#c9c9c9"
			  }
			]
		  },
		  {
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#9e9e9e"
			  }
			]
		  }

	];			  
	var mapOptions = {
	  center: new google.maps.LatLng(23.739296,90.3870653),
	  zoom: 12,
	  styles: styleArray,
	  scrollwheel: false,
	  backgroundColor: 'transparent',
      mapTypeControl: false,				  
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"),
		mapOptions);				
	var myLatlng = new google.maps.LatLng(23.739296,90.3870653);			
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		icon: 'assets/images/map.png'
	});			


  });

})(jQuery);

