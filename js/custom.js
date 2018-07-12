jQuery(window).on('load', function () {
	//Masonry
	jQuery('.testimonials-list').masonry({
	  // options
	  itemSelector: '.testimonial-item',
	});

	jQuery('.faq-list .row').masonry({
	  // options
	  itemSelector: '.faq-item',
	});
});
