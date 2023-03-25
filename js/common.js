$(document).ready(function() {

	$("#form").on("submit", function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Success.");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});