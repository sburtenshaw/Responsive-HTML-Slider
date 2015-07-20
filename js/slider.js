$(document).ready(function() {
	windowWidth = $(window).width();

	// Settings
	autoSlide = true;
	autoCanSlide = true;
	clickCanSlide = true;

	if (windowWidth <= 768) {
		$('.first-element').remove();
	} else if (windowWidth > 768 && windowWidth <= 1170) {
		$('.first-element .container').width($(window).width() - ($('.first-element .container').width() / 6));
	} else {
		$('.first-element .container').width(1032);
	}

	$('.slider-element').each(function(i) {
		$(this).attr('id', i+1);
	});

	$('#1.slider-element').addClass('show-element active');

	setTimeout(function() {
		if (windowWidth > 768) {
			$('.first-element .col-sm-6').addClass('show-first-element-content');
		} else {
			$('#1.slider-element').find('.slider-element-text').addClass('show-slider-element-text');
		}
	}, 500);

	$('.slider-element').each(function(i) {
		if ($(this).hasClass('active')) {
			var indicator = '<a href="#" class="indicator-link"><div id='+(i+1)+' class="indicator active-indicatior"></div></a>'
		} else {
			var indicator = '<a href="#" class="indicator-link"><div id='+(i+1)+' class="indicator"></div></a>'
		}
		$('.indicators-container').append(indicator);
	});

	// Variables
	var height = $('.active img').height();
	hasRemovedFirstIndicator = false;

	if (windowWidth <= 500) {
		$('.slider').height(180);
	} else if (windowWidth > 500 && windowWidth <= 1170) {
		$('.slider').height(height);
	} else {
		$('.slider').height(422);
	}

	if (windowWidth > 768) {
		$('.slider-element.first-element .col-sm-6').each(function() {
			$(this).css({
				'margin-top' : ($('.slider-element').height() / 2) - ($(this).height() / 2)
			});
		});
	}

	$('.right-control').on('click', function(e) {
		e.preventDefault();
		if (clickCanSlide == true) {
			clickCanSlide = false;
			autoCanSlide = false;
			var currentID = parseInt($('.slider-element.active').attr('id'));
			if (currentID != $('.slider-element').length) {
				var nextID = currentID + 1;
				$('#'+nextID+'.slider-element').css('margin-top', '-' + $('.slider').css('height'));
			} else {
				var nextID = 1;
				$('#'+currentID+'.slider-element').css('margin-top', '-' + $('.slider').css('height'));
			}
			$('#'+nextID+'.slider-element').addClass('active right-next');
			setTimeout(function() {
				$('#'+currentID+'.slider-element').addClass('left-remove');
				$('#'+nextID+'.slider-element').addClass('show-element');
			}, 10);
			$('#'+currentID+'.indicator').removeClass('active-indicatior');
			$('#'+nextID+'.indicator').addClass('active-indicatior');
			if (windowWidth > 768) {
				if (currentID == 1 && $('.home-video-div video').get(0).paused == false) {
					$('.home-video-div video').get(0).pause();
				}
			}
			setTimeout(function() {
				$('#'+currentID+'.slider-element').removeClass('show-element left-remove right-next active');
				$('#'+nextID+'.slider-element').removeClass('right-next').css({
					'transition' : 'none',
					'-moz-transition' : 'none',
					'-o-transition' : 'none',
					'-webkit-transition' : 'none',
					'margin-top' : 'auto'
				});
				setTimeout(function() {
					$('#'+nextID+'.slider-element').css({
						'transition' : '1s ease-in-out',
						'-moz-transition' : '1s ease-in-out',
						'-o-transition' : '1s ease-in-out',
						'-webkit-transition' : '1s ease-in-out'
					});
				}, 50);
				if (currentID != 1) {
					$('#'+currentID+'.slider-element .slider-element-text').removeClass('show-slider-element-text');
				} else {
					if (windowWidth <= 768) {
						$('#'+currentID+'.slider-element .slider-element-text').removeClass('show-slider-element-text');
					} else {
						$('#'+currentID+'.first-element .col-sm-6').removeClass('show-first-element-content');
					}
				}
				if (nextID != 1) {
					$('#'+nextID+'.slider-element .slider-element-text').addClass('show-slider-element-text');
				} else {
					if (windowWidth <= 768) {
						$('#'+nextID+'.slider-element .slider-element-text').addClass('show-slider-element-text');
					} else {
						$('#'+nextID+'.first-element .col-sm-6').addClass('show-first-element-content');
					}
				}
				setTimeout(function() {
					clickCanSlide = true;
				}, 250);
				setTimeout(function() {
					autoCanSlide = true
				}, 2500);
			}, 1000);
		}
	});

	$('.left-control').on('click', function(e) {
		e.preventDefault();
		if (clickCanSlide == true) {
			clickCanSlide = false;
			autoCanSlide = false;
			var currentID = parseInt($('.slider-element.active').attr('id'));
			if (currentID != 1) {
				var nextID = currentID - 1;
				$('#'+currentID+'.slider-element').css('margin-top', '-' + $('.slider').css('height'));
			} else {
				var nextID = $('.slider-element').length;
				$('#'+nextID+'.slider-element').css('margin-top', '-' + $('.slider').css('height'));
			}
			$('#'+nextID+'.slider-element').addClass('active left-next');
			setTimeout(function() {
				$('#'+currentID+'.slider-element').addClass('right-remove');
				$('#'+nextID+'.slider-element').addClass('show-element');
			}, 10);
			$('#'+currentID+'.indicator').removeClass('active-indicatior');
			$('#'+nextID+'.indicator').addClass('active-indicatior');
			if (currentID == 1 && $('.home-video-div video').get(0).paused == false) {
				$('.home-video-div video').get(0).pause();
			}
			setTimeout(function() {
				$('#'+currentID+'.slider-element').removeClass('show-element right-remove left-next active');
				$('#'+nextID+'.slider-element').removeClass('left-next').css({
					'transition' : 'none',
					'-moz-transition' : 'none',
					'-o-transition' : 'none',
					'-webkit-transition' : 'none',
					'margin-top' : 'auto'
				});
				setTimeout(function() {
					$('#'+nextID+'.slider-element').css({
						'transition' : '1s ease-in-out',
						'-moz-transition' : '1s ease-in-out',
						'-o-transition' : '1s ease-in-out',
						'-webkit-transition' : '1s ease-in-out'
					});
				}, 50);
				if (currentID != 1) {
					$('#'+currentID+'.slider-element .slider-element-text').removeClass('show-slider-element-text');
				} else {
					if (windowWidth <= 768) {
						$('#'+currentID+'.slider-element .slider-element-text').removeClass('show-slider-element-text');
					} else {
						$('#'+currentID+'.first-element .col-sm-6').removeClass('show-first-element-content');
					}
				}
				if (nextID != 1) {
					$('#'+nextID+'.slider-element .slider-element-text').addClass('show-slider-element-text');
				} else {
					if (windowWidth <= 768) {
						$('#'+nextID+'.slider-element .slider-element-text').addClass('show-slider-element-text');
					} else {
						$('#'+nextID+'.first-element .col-sm-6').addClass('show-first-element-content');
					}
				}
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
			var currentID = parseInt($('.indicator.active-indicatior').attr('id'));
			var nextID = parseInt($(this).find('.indicator').attr('id'));
			if (nextID > currentID) {
				$('#'+nextID+'.slider-element').css('margin-top', '-' + $('.slider').css('height')).addClass('active right-next');
				setTimeout(function() {
					$('#'+currentID+'.slider-element').addClass('left-remove');
					$('#'+nextID+'.slider-element').addClass('show-element');
				}, 10);
				$('#'+currentID+'.indicator').removeClass('active-indicatior');
				$('#'+nextID+'.indicator').addClass('active-indicatior');
				if (currentID == 1 && $('.home-video-div video').get(0).paused == false) {
					$('.home-video-div video').get(0).pause();
				}
				setTimeout(function() {
					$('#'+currentID+'.slider-element').removeClass('show-element left-remove right-next active');
					$('#'+nextID+'.slider-element').removeClass('right-next').css('margin-top', 'auto');
					if (currentID != 1) {
						$('#'+currentID+'.slider-element .slider-element-text').removeClass('show-slider-element-text');
					} else {
						if (windowWidth <= 768) {
							$('#'+currentID+'.slider-element .slider-element-text').removeClass('show-slider-element-text');
						} else {
							$('#'+currentID+'.first-element .col-sm-6').removeClass('show-first-element-content');
						}
					}
					$('#'+nextID+'.slider-element .slider-element-text').addClass('show-slider-element-text');
					setTimeout(function() {
						clickCanSlide = true;
					}, 250);
					setTimeout(function() {
						autoCanSlide = true
					}, 2500);
				}, 1000);
			} else if (nextID < currentID) {
				$('#'+currentID+'.slider-element').css('margin-top', '-' + $('.slider').css('height'));
				$('#'+nextID+'.slider-element').addClass('active left-next');
				setTimeout(function() {
					$('#'+currentID+'.slider-element').addClass('right-remove');
					$('#'+nextID+'.slider-element').addClass('show-element');
				}, 10);
				$('#'+currentID+'.indicator').removeClass('active-indicatior');
				$('#'+nextID+'.indicator').addClass('active-indicatior');
				setTimeout(function() {
					$('#'+currentID+'.slider-element').removeClass('show-element right-remove left-next active');
					if (nextID != 1) {
						$('#'+nextID+'.slider-element').removeClass('left-next').css('margin-top', 'auto');
						$('#'+nextID+'.slider-element .slider-element-text').addClass('show-slider-element-text');
					} else {
						$('#'+currentID+'.slider-element').removeClass('left-next').css('margin-top', 'auto');
						if (windowWidth <= 768) {
							$('#'+nextID+'.slider-element .slider-element-text').addClass('show-slider-element-text');
						} else {
							$('#'+nextID+'.slider-element .col-sm-6').addClass('show-first-element-content');
						}
					}
					$('#'+currentID+'.slider-element .slider-element-text').removeClass('show-slider-element-text');
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
		var height = $('.active img').height();

		if (windowWidth <= 500) {
			$('.slider').height(180);
			$('.first-element .container').width($(window).width() - ($('.first-element .container').width() / 6));
		} else if (windowWidth > 500 && windowWidth <= 1170) {
			$('.slider').height(height);
			$('.first-element .container').width($(window).width() - ($('.first-element .container').width() / 6));
		} else {
			$('.slider').height(422);
			$('.first-element .container').width(1032);
		}

		if (windowWidth <= 768) {
			if ($('.first-element').hasClass('active')) {
				var firstElementSelected = true;
			}
			$('.first-element').remove();

			if (hasRemovedFirstIndicator == false) {
				$('#1.indicator').parent().remove();
				hasRemovedFirstIndicator = true;
			}
			$('.slider-element').each(function(i) {
				$(this).attr('id', i+1);
			});
			$('.indicator-link').each(function(i) {
				$(this).find('.indicator').attr('id', i+1);
			});
			if (firstElementSelected) {
				$('#1.slider-element').addClass('show-element active');
				$('#1.indicator').addClass('active-indicatior');
				setTimeout(function() {
					$('#1.slider-element').find('.slider-element-text').addClass('show-slider-element-text');
				}, 500);
			}
		} else {
			$('.slider-element.first-element .col-sm-6').each(function() {
				$(this).css('margin-top', ($('.slider-element').height() / 2) - ($(this).height() / 2));
			});
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
			if (autoCanSlide == true && $('.home-video-div video').get(0).paused == false) {
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
		$('.right-control').addClass('show-controls');
		$('.left-control').addClass('show-controls');
		$('.indicators-container').addClass('show-indicators');
	}

	$('.home-video-div video').on('click', function() {
		if ($(this).get(0).paused) {
			$(this).get(0).play();
		} else {
			$(this).get(0).pause();
		}
	});
});