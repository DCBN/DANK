$(function() {
	var landingWrap =  document.getElementById('landingWrap');
	if(landingWrap){
		$('.banner').velocity('transition.slideUpIn', {duration: 500});
		$('.btn').velocity('transition.slideUpIn', {delay: 500, duration: 500});
	}
});