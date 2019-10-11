$(document).ready(init);

function init()
{
    $('#slider').nivoSlider({
        effect: 'fade', // Specify sets like: 'fold,fade,sliceDown'
        slices: 15, // For slice animations
        boxCols: 8, // For box animations
        boxRows: 4, // For box animations
        animSpeed: 500, // Slide transition speed
        pauseTime: 4000, // How long each slide will show
        startSlide: 0, // Set starting Slide (0 index)
        directionNav: false, // Next & Prev navigation
        directionNavHide: false, // Only show on hover
        controlNav: false, // 1,2,3... navigation
        controlNavThumbs: false, // Use thumbnails for Control Nav
        pauseOnHover: false, // Stop animation while hovering
        manualAdvance: false, // Force manual transitions
        prevText: 'Vorige', // Prev directionNav text
        nextText: 'Volgende', // Next directionNav text
        randomStart: false // Start on a random slide
    });
    
    $(window).scroll(function()
    {
        if($(this).scrollTop() != 0)
        {
            $('#toTop').fadeIn();
        }
        else
        {
            $('#toTop').fadeOut();
        }
    });
    
	$('#toTop').click(function()
	{
    	$('body,html').animate({scrollTop:0}, 800);
    });
    
    var ts = new Date(2015, 6, 11, 9);
		
	$('#countdown').countdown({
		timestamp	: ts
	});
}