$(document).ready(function(){
		var windowSize = $(window).width();
	var buyinfo = document.getElementsByClassName('videoinfo2');

	if (windowSize <= 900){
	$(buyinfo).remove();
}
});