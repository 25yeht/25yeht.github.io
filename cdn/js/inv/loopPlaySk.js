$(document).ready(() => {
		//Generate play button and audio
		$("<button>").attr("id", "pl-sk-hi").html("Play Everything").appendTo("#elektronomia-sky-high-js-player-div");
    	$("#pl-sk-hi").on("click", function() {
			console.log("Clicked!");
			document.title = "Playing: Everything - 25yeht";
			$("<p>").addClass("container-p").html("Song: Diamond Eyes - Everything [NCS Release]<br>Music provided by NoCopyrightSounds<br>Free Download/Stream: <a href='http://ncs.io/Everything' target='_blank'>http://ncs.io/Everything</a><br>Watch: <a href='http://youtu.be/_XspQUK22-U' target='_blank'>http://youtu.be/_XspQUK22-U</a>").appendTo("#elektronomia-sky-high-js-player-div");
        	$("<audio>").attr("src", "/cdn/audio/music/everything.mp3").attr("autoplay", true).attr("controls", true).appendTo("#elektronomia-sky-high-js-player-div");
			$("<br>").appendTo("#elektronomia-sky-high-js-player-div");
            $("<button>").attr("id", "gba").text("Get Buttons Again").appendTo("#elektronomia-sky-high-js-player-div");
            $("#pl-sk-hi").remove();
            $("#lp-sk-hi").remove();
			$("#gba").on("click", function() {
				window.location.pathname = window.location.pathname;
				$("#gba").text("Reloading...");
			});
        });
    $("<button>").text("Loop Everything").attr("id", "lp-sk-hi").appendTo("#elektronomia-sky-high-js-player-div");
    $("#lp-sk-hi").on("click", function() {
            console.log("Clicked!");
			document.title = "Playing: Everything - 25yeht";
			$("<p>").addClass("container-p").html("Song: Diamond Eyes - Everything [NCS Release]<br>Music provided by NoCopyrightSounds<br>Free Download/Stream: <a href='http://ncs.io/Everything' target='_blank'>http://ncs.io/Everything</a><br>Watch: <a href='http://youtu.be/_XspQUK22-U' target='_blank'>http://youtu.be/_XspQUK22-U</a>").appendTo("#elektronomia-sky-high-js-player-div");
            $("<audio>").attr("src", "/cdn/audio/music/everything.mp3").attr("autoplay", true).attr("loop", true).appendTo("body");
            $("<button>").attr("id", "gba").text("Get Buttons Again").appendTo("#elektronomia-sky-high-js-player-div");
            $("#pl-sk-hi").remove();
            $("#lp-sk-hi").remove();
			$("#gba").on("click", function() {
				window.location.pathname = window.location.pathname;
				$("#gba").text("Reloading...");
			});
    });
    window.onbeforeunload = () => {
        document.title = "25yeht";
    };
});
