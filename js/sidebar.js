$(document).ready(function() {
	$('#static-content').find('h2').each(function() {
		prevTitle = $('#sidebar-menu .main-menu').find('#' + $("h1").attr('id') + '-menu');
		prevTitle.not(":has(ul)").append('<ul class="sub-menu"></ul>');
		prevTitle.find('.sub-menu').append('<li id="'+ $(this).attr('id') + '-menu"><a href="#' + $(this).attr('id') + '">' + $(this).html() + '</li>');
	});
});
