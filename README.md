# resizor
This jQuery code was designed to auto resize text to fit within another container based on percentage.

Usage:
Add both a version of jQuery plus the js file to your document
    &lt;script src="//code.jquery.com/jquery-X.X.X.min.js"&gt;&lt;/script&gt; 
    &lt;script src="/path/to/file/resizor.min.js">&lt;/script>

Call any object and it's container provide height or width and a percentage.

  $('#object').resizor($('#container'), "height", .5);
</script>

This can also be chained to other commands as it returns the original object back after it's done.
$('#object').resizor($('#container'), "height", .5).css('font-family', '"Cool Font"');
