$(document).ready(function() {
		//Generate play button and audio
		$("<button>").attr("id", "pl-sk-hi").html("Play Sky High").appendTo("#elektronomia-sky-high-js-player-div");
    	$("#pl-sk-hi").on("click", function() {
			console.log("Clicked!");
			document.title = "Playing: Sky High - 25yeht";
			$("<p>").addClass("container-p").html("Song: Elektronomia - Sky High [NCS Release]<br>Music provided by NoCopyrightSounds<br>Free Download/Stream: <a href='http://ncs.io/skyhigh' target='_blank'>http://ncs.io/skyhigh</a><br>Watch: <a href='http://youtu.be/TW9d8vYrVFQ' target='_blank'>http://youtu.be/TW9d8vYrVFQ</a>").appendTo("#elektronomia-sky-high-js-player-div");
        	$("<audio>").attr("src", "/cdn/audio/elekskhi.mp3").attr("autoplay", true).attr("controls", true).appendTo("#elektronomia-sky-high-js-player-div");
			$("<br>").appendTo("#elektronomia-sky-high-js-player-div");
            $("<button>").attr("id", "gba").text("Get Buttons Again").appendTo("#elektronomia-sky-high-js-player-div");
            $("#pl-sk-hi").remove();
            $("#lp-sk-hi").remove();
			$("#gba").on("click", function() {
				window.location.pathname = window.location.pathname;
				$("#gba").text("Reloading...");
			});
        });
    $("<button>").text("Loop Sky High").attr("id", "lp-sk-hi").appendTo("#elektronomia-sky-high-js-player-div");
    $("#lp-sk-hi").on("click", function() {
            console.log("Clicked!");
			document.title = "Playing: Sky High - 25yeht";
			$("<p>").addClass("container-p").html("Song: Elektronomia - Sky High [NCS Release]<br>Music provided by NoCopyrightSounds<br>Free Download/Stream: <a href='http://ncs.io/skyhigh' target='_blank'>http://ncs.io/skyhigh</a><br>Watch: <a href='http://youtu.be/TW9d8vYrVFQ' target='_blank'>http://youtu.be/TW9d8vYrVFQ</a>").appendTo("#elektronomia-sky-high-js-player-div");
            $("<audio>").attr("src", "/cdn/audio/elekskhi.mp3").attr("autoplay", true).appendTo("body");
            $("<button>").attr("id", "gba").text("Get Buttons Again").appendTo("#elektronomia-sky-high-js-player-div");
            $("#pl-sk-hi").remove();
            $("#lp-sk-hi").remove();
			$("#gba").on("click", function() {
				window.location.pathname = window.location.pathname;
				$("#gba").text("Reloading...");
			});
        	var dasInterval = window.setInterval(function() {
            	$("#cur-aud").remove();
            	$("<audio>").attr("src", "/cdn/audio/elekskhi.mp3").attr("autoplay", true).attr("id", "cur-aud").appendTo("body");
        }, (3000*60) + 5500);
    });
    window.onbeforeunload = function() {
        document.title = "25yeht";
    };
});
