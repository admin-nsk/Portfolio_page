$(function () {
	$('#AddTask')
	.on('click', function () {
		var newTask = ('<div class="task">\
					<div class="task_name">\
						<span>' + $('#name_form').val() + '</span>\
						<button class="delete"></button>\
						<button class="menu"></button>\
					</div>\
					<div class="task_desc">' + $('#text_input').val() + '</div>\
				</div>');
		$('#spisok_del').prepend(newTask);
		$('#name_form').val("");
		$('#text_input').val("");
	$('.delete')
	.click(function () {
		$(this).parents(".task").remove();
	});
	$('.menu')
	.click(function(){
		var slide = $(this).parents('.task');
			$(this).toggleClass('rotateButton');
			slide.find('.task_desc').toggle();
	});
	});
		
});