var currentImage = 1;
var totalImages = 3;
$(document).ready(function(){
    setInterval(function(){
        $('#home img:nth-child('+currentImage+')').css('opacity','0');
        currentImage = (currentImage + 1)%totalImages + 1;
        $('#home img:nth-child('+currentImage+')').css('opacity','1');
    },5000);
    $('#top .nav-item a[href^="#"]').on('click',function (e) {
    		console.log(this);
			e.preventDefault();

			var target = this.hash;
			$target = $(target);
			var pos;
			var topNavHeight;
	
			if(target == '#home'){
				pos = 0;
				topNavHeight = 0;
			}
			else{
				pos = $target.offset().top;
				topNavHeight = parseInt($('#top').css('height'), 10);
			}

			$('html, body').stop().animate({
					'scrollTop': pos-topNavHeight
					}, 1000, 'swing', function () {
			});
	});
});