var browser = function() {
    // Return cached result if avalible, else get result then cache it.
    if (browser.prototype._cachedResult)
        return browser.prototype._cachedResult;

    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    return browser.prototype._cachedResult =
        isOpera ? 'Opera' :
        isFirefox ? 'Firefox' :
        isSafari ? 'Safari' :
        isChrome ? 'Chrome' :
        isIE ? 'IE' :
        isEdge ? 'Edge' :
        isBlink ? 'Blink' :
        "null";
};

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
	
	//patch for wa api in firefox and opera
	//check if mobile
	if (typeof window.orientation == 'undefined'){
		$("a[href*='whatsapp']").each(function() {
			$(this).attr("href", $(this).attr('href').replace(/\bapi\b/g, 'web'));
		});
	}
	console.log(browser);
});
