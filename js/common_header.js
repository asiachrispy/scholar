$(function() {
	$(".login_urse").mousemove(function() {
		$(".afterList").css("display", "block");
	});
	$(".afterList").mouseout(function() {
		$(".afterList").css("display", "none");
	});
});