try {
	Notification.requestPermission();
} catch(e) {
	alert("Notifications are not supported in this browser! Error: " + e);
}
if(document.getElementsByName("jquery")[0]) {
    console.log("template.js started!");
    //When the document is loaded, do code inside of function in parameter.
    $(document).ready(_ => {
        //After the document is fully loaded, you can properly manipulate HTML.
        var aud = new Audio($("#chs-msc").val());
		var ding = new Audio("/cdn/audio/ding.mp3");
		aud.loop = true;
		$("#pl-msc").click(_ => {
			aud.pause();
			aud.currentTime = 0;
			aud.src = $("#chs-msc").val()
			aud.play();
		});
		$("#ps-msc").click(_ => {
			aud.pause();
		});
		$(".whitespace").text("\t");
		$("#start").click(_ => {
			$("#start").fadeOut(1500, _ => {
				$("#start").remove();
				$("#sec").css({
					color: "black",
					textAlign: "center"
				}).hide().fadeIn();
				var secLeft = 480000;
				var fin = false;
				var don = false;
				var minInt = setInterval(_ => {
					if(secLeft <= 0) {
						fin = true;
						if(localStorage) {
							if(!localStorage.getItem("workout-times")) {
								localStorage.setItem("workout-times", 1)
							} else if(!don) {
								localStorage["workout-times"] = parseFloat(localStorage.getItem("workout-times")) + 1;
								don = true;
							}
							$("#sec").text("Finished! Reload the page to redo! You have done this workout " + localStorage.getItem("workout-times") + " time(s)!");
						} else {
							$("#sec").text("Finished! Reload the page to redo!");
						}
					} else {
						$("#sec").text("You have " + secLeft + " milliseconds left.");
						secLeft -= 1;
					}
				}, 10);
				var t30SecInt = setInterval(_ => {
					if(!fin) {
						new Notification("Reminder", {
							body: "30 seconds have passed, now do another exersize!"
						});
						ding.play();
					}
				}, 30000);
			});
		});
    });
} else {
    console.log("jQuery not found. Maybe put [name=workout.js] in front of it?");
}
