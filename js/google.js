function GoogleAnalytics(url, title,value) {
	var redirectTriggered = false;
	gtag('event', 'ButtonClick', {
		[title]: value,
		'event_callback': function() {
		    if (url != null) {
		    	redirectTriggered = true;
		    	document.location = url;
		    }
		}
	});
	setTimeout(function() {
		if (!redirectTriggered && url != null) {
			document.location = url;
		}
	}, 1500);
}
