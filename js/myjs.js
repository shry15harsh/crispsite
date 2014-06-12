var currentImage = 1;
var totalImages = 3;
$(document).ready(function(){
    setInterval(function(){
        $('#home img:nth-child('+currentImage+')').css('opacity','0');
        currentImage = (currentImage + 1)%totalImages + 1;
        $('#home img:nth-child('+currentImage+')').css('opacity','1');
    },5000);
});