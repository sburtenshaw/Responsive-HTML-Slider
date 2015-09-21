$(document).ready(function() {
	windowWidth = $(window).width();

	// Settings
	autoSlide = true;
	autoCanSlide = true;
	clickCanSlide = true;

	if (windowWidth <= 768) {
		$('#small-slider').addClass('active-slider');
	} else if (windowWidth > 768 && windowWidth <= 1170) {
		$('#large-slider').addClass('active-slider');
	} else if(windowWidth > 1170) {
		$('#large-slider').addClass('active-slider');
	}

	$('.slider').each(function() {
		$(this).find('.slider-element').each(function(i) {
			$(this).attr('id', i+1);
		});
	});

	$('.active-slider #1.slider-element').addClass('show-element active');

	setTimeout(function() {
		$('.active-slider #1.slider-element .slider-element-text').addClass('show-slider-element-text');
	}, 500);

	$('.slider').each(function() {
		var indicator = '';
		$(this).find('.slider-element').each(function(i) {
			if ($(this).hasClass('active')) {
				indicator += '<a href="#" class="indicator-link"><div id='+(i+1)+' class="indicator active-indicator"></div></a>';
			} else {
				indicator += '<a href="#" class="indicator-link"><div id='+(i+1)+' class="indicator"></div></a>';
			}
		});
		$(this).find('.indicators-container').append(indicator);
	});

	// Variables
	var height = $('.active-slider .active img').height();

	if (windowWidth <= 500) {
		$('.slider').height(180);
	} else if (windowWidth > 500 && windowWidth <= 1170) {
		$('.slider').height(height);
	} else {
		$('.slider').height(422);
	}

	$('.right-control').on('click', function(e) {
		e.preventDefault();
		if (clickCanSlide == true) {
			clickCanSlide = false;
			autoCanSlide = false;
			var currentID = parseInt($('.active-slider .slider-element.active').attr('id'));
			if (currentID != $('.active-slider .slider-element').length) {
				var nextID = currentID + 1;
			} else {
				var nextID = 1;
			}
			$('.active-slider #'+nextID+'.slider-element').addClass('active right-next');
			setTimeout(function() {
				$('.active-slider #'+currentID+'.slider-element').addClass('left-remove');
				$('.active-slider #'+nextID+'.slider-element').addClass('show-element');
			}, 10);
			$('.active-slider #'+currentID+'.indicator').removeClass('active-indicator');
			$('.active-slider #'+nextID+'.indicator').addClass('active-indicator');
			setTimeout(function() {
				$('.active-slider #'+currentID+'.slider-element').removeClass('show-element left-remove right-next active');
				$('.active-slider #'+currentID+'.slider-element .slider-element-text').removeClass('show-slider-element-text');
				$('.active-slider #'+nextID+'.slider-element .slider-element-text').addClass('show-slider-element-text');
				setTimeout(function() {
					clickCanSlide = true;
				}, 250);
				setTimeout(function() {
					autoCanSlide = true;
				}, 2500);
			}, 1000);
		}
	});

	$('.left-control').on('click', function(e) {
		e.preventDefault();
		if (clickCanSlide == true) {
			clickCanSlide = false;
			autoCanSlide = false;
			var currentID = parseInt($('.active-slider .slider-element.active').attr('id'));
			if (currentID != 1) {
				var nextID = currentID - 1;
			} else {
				var nextID = $('.active-slider .slider-element').length;
			}
			$('.active-slider #'+nextID+'.slider-element').addClass('active left-next');
			setTimeout(function() {
				$('.active-slider #'+currentID+'.slider-element').addClass('right-remove');
				$('.active-slider #'+nextID+'.slider-element').addClass('show-element');
			}, 10);
			$('.active-slider #'+currentID+'.indicator').removeClass('active-indicator');
			$('.active-slider #'+nextID+'.indicator').addClass('active-indicator');
			setTimeout(function() {
				$('.active-slider #'+currentID+'.slider-element').removeClass('show-element right-remove left-next active');
				$('.active-slider #'+currentID+'.slider-element .slider-element-text').removeClass('show-slider-element-text');
				$('.active-slider #'+nextID+'.slider-element .slider-element-text').addClass('show-slider-element-text');
				setTimeout(function() {
					clickCanSlide = true;
				}, 250);
				setTimeout(function() {
					autoCanSlide = true
				}, 2500);
			}, 1000);
		}
	});

	$('.indicator-link').on('click', function(e) {
		e.preventDefault();
		if (clickCanSlide == true) {
			clickCanSlide = false;
			autoCanSlide = false;
			var currentID = parseInt($('.active-slider .indicator.active-indicator').attr('id'));
			var nextID = parseInt($(this).find('.indicator').attr('id'));
			if (nextID > currentID) {
				$('.active-slider #'+nextID+'.slider-element').addClass('active right-next');
				setTimeout(function() {
					$('.active-slider #'+currentID+'.slider-element').addClass('left-remove');
					$('.active-slider #'+nextID+'.slider-element').addClass('show-element');
				}, 10);
				$('.active-slider #'+currentID+'.indicator').removeClass('active-indicator');
				$('.active-slider #'+nextID+'.indicator').addClass('active-indicator');
				setTimeout(function() {
					$('.active-slider #'+currentID+'.slider-element').removeClass('show-element left-remove right-next active');
					$('.active-slider #'+nextID+'.slider-element').removeClass('right-next');
					$('.active-slider #'+currentID+'.slider-element .slider-element-text').removeClass('show-slider-element-text');
					$('.active-slider #'+nextID+'.slider-element .slider-element-text').addClass('show-slider-element-text');
					setTimeout(function() {
						clickCanSlide = true;
					}, 250);
					setTimeout(function() {
						autoCanSlide = true
					}, 2500);
				}, 1000);
			} else if (nextID < currentID) {
				$('.active-slider #'+nextID+'.slider-element').addClass('active left-next');
				setTimeout(function() {
					$('.active-slider #'+currentID+'.slider-element').addClass('right-remove');
					$('.active-slider #'+nextID+'.slider-element').addClass('show-element');
				}, 10);
				$('.active-slider #'+currentID+'.indicator').removeClass('active-indicator');
				$('.active-slider #'+nextID+'.indicator').addClass('active-indicator');
				setTimeout(function() {
					$('.active-slider #'+currentID+'.slider-element').removeClass('show-element right-remove left-next active');
					$('.active-slider #'+nextID+'.slider-element').removeClass('left-next');
					$('.active-slider #'+nextID+'.slider-element .slider-element-text').addClass('show-slider-element-text');
					$('.active-slider #'+currentID+'.slider-element .slider-element-text').removeClass('show-slider-element-text');
					setTimeout(function() {
						clickCanSlide = true;
					}, 250);
					setTimeout(function() {
						autoCanSlide = true
					}, 2500);
				}, 1000);
			}
		}
	});

	$(window).resize(function() {
		windowWidth = $(window).width();
		if (windowWidth < 768 && !$('#small-slider .slider-element.active').length) {
			$('#large-slider').removeClass('active-slider').find('.slider-element.active').removeClass('active show-element').find('.col-sm-6').removeClass('show-first-element-content');
			$('#large-slider .active-indicator').removeClass('active-indicator');
			$('#small-slider').addClass('active-slider').find('.slider-element:first-child').addClass('active show-element').find('.slider-element-text').addClass('show-slider-element-text');
			$('#small-slider .indicator-link:first-child .indicator').addClass('active-indicator');
		} else if (windowWidth >= 768 && !$('#large-slider .slider-element.active').length) {
			$('#small-slider').removeClass('active-slider').find('.slider-element').removeClass('active show-element').find('.slider-element-text').removeClass('show-slider-element-text');
			$('#small-slider .active-indicator').removeClass('active-indicator');
			$('#large-slider').addClass('active-slider').find('.slider-element:first-child').addClass('active show-element').find('.col-sm-6').addClass('show-first-element-content');
			$('#large-slider .indicator-link:first-child .indicator').addClass('active-indicator');
		}

		var height = $('.active-slider .active img').height();

		if (windowWidth <= 500) {
			$('.slider').height(180);
		} else if (windowWidth > 500 && windowWidth <= 1170) {
			$('.slider').height(height);
			$('.first-element .container').width($(window).width() - ($('.first-element .container').width() / 6));
		} else {
			$('.slider').height(422);
			$('.first-element .container').width(1032);
		}

		if (windowWidth > 992) {
			$('.right-control').removeClass('show-controls');
			$('.left-control').removeClass('show-controls');
			$('.indicators-container').removeClass('show-indicators');
		} else {
			$('.right-control').addClass('show-controls');
			$('.left-control').addClass('show-controls');
			$('.indicators-container').addClass('show-indicators');
		}
	});

	function doAutoSlide() {
		setTimeout(function() {
			if (autoCanSlide == true) {
				$('.right-control').trigger('click');
				doAutoSlide();
			} else {
				doAutoSlide();
			}
		}, 5000);
	}
	doAutoSlide();

	if (windowWidth > 992) {
		$('.slider').on('mouseover', function() {
			autoCanSlide = false;
			$('.right-control').addClass('show-controls');
			$('.left-control').addClass('show-controls');
			$('.indicators-container').addClass('show-indicators');
		});

		$('.slider').on('mouseout', function() {
			autoCanSlide = true;
			$('.right-control').removeClass('show-controls');
			$('.left-control').removeClass('show-controls');
			$('.indicators-container').removeClass('show-indicators');
		});
	} else {
		$('.active-slider .right-control').addClass('show-controls');
		$('.active-slider .left-control').addClass('show-controls');
		$('.active-slider .indicators-container').addClass('show-indicators');
	}
});