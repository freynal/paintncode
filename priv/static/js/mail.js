$(function() {
	
$("#sendmail").submit( function(event) {

event.preventDefault();

var $form = $this,
	from = $form.find("input[name='from']").val(),
	subject  = $form.find("input[name='subject']").val(),
	message = $form.find("input[name='message']").val(),
	url = $form.attr("action");

var posting = $.post (url, {from: from, subject: subject, message: message});

posting.done(function(data){$("#message").attr("class", "ok").html(data);})
	.fail(function(data){$("#message").attr("class", "error").html(data);});


});
});