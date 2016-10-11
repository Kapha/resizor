jQuery.fn.extend({
	resizor: function(container, measure, percent) {
	if (container == null){
		console.log('No container provided: usage OBJECT.resizor(CONTAINER, MEASURE, PERCENT)');
		return $(this);
		END
	}
	if (measure == null){
		console.log('No measure provided use "height" or "width": usage OBJECT.resizor(CONTAINER, MEASURE, PERCENT)');
		return $(this);
		END
	}
	if (percent == null){
		console.log('No percent provided: usage OBJECT.resizor(CONTAINER, MEASURE, PERCENT)');
		return $(this);
		END
	}
	$(this).css('font-size', 1);
			if (measure = "height"){
				while( $(this).outerHeight() < container.outerHeight() * percent ) {
					$(this).css('font-size', parseInt($(this).css('font-size')) +1);
				} 
			} else {
				if (measure = "width"){
					while( $(this).outerWidth() < container.outerWidth() * percent ) {
				$(this).css('font-size', parseInt($(this).css('font-size')) +1);
					}
				} else {
					console.log('please specify "height" or "width"');
				}
			}
		return $(this);
	}
});
