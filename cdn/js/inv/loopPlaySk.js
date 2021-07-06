$(document).ready(function() {
		//Generate play button and audio
		$("<button>").attr("id", "pl-sk-hi").html("Play Sunburst").appendTo("#elektronomia-sky-high-js-player-div");
    	$("#pl-sk-hi").on("click", function() {
			$("<p>").addClass("container-p").html("Music: Tobu & Itro - Sunburst<br><a href='http://youtube.com/tobuofficial' target='_blank'>http://youtube.com/tobuofficial</a><br><a href='https://www.youtube.com/user/officialitro' target='_blank'>https://www.youtube.com/user/officialitro</a><br>Released by NCS <a href='https://www.youtube.com/NoCopyrightSounds' target='_blank'>https://www.youtube.com/NoCopyrightSounds</a>").appendTo("#elektronomia-sky-high-js-player-div");
        	$("<audio>").attr("src", "/cdn/audio/Tobu & Itro - Sunburst.mp3").attr("autoplay", true).attr("controls", true).appendTo("#elektronomia-sky-high-js-player-div");
			$("<br>").appendTo("#elektronomia-sky-high-js-player-div");
            $("<button>").attr("id", "gba").text("Get Buttons Again").appendTo("#elektronomia-sky-high-js-player-div");
            $("#pl-sk-hi").remove();
            $("#lp-sk-hi").remove();
			$("#gba").on("click", function() {
				window.location.pathname = window.location.pathname;
				$("#gba").text("Reloading...");
			});
        });
    $("<button>").text("Loop Sunburst").attr("id", "lp-sk-hi").appendTo("#elektronomia-sky-high-js-player-div");
    $("#lp-sk-hi").on("click", function() {
            console.log("Clicked!");
			document.title = "Playing: Sunburst - 25yeht";
			$("<p>").addClass("container-p").html("Music: Tobu & Itro - Sunburst<br><a href='http://youtube.com/tobuofficial' target='_blank'>http://youtube.com/tobuofficial</a><br><a href='https://www.youtube.com/user/officialitro' target='_blank'>https://www.youtube.com/user/officialitro</a><br>Released by NCS <a href='https://www.youtube.com/NoCopyrightSounds'target='_blank'>https://www.youtube.com/NoCopyrightSounds</a>").appendTo("#elektronomia-sky-high-js-player-div");
            $("<audio>").attr("src", "/cdn/audio/Tobu & Itro - Sunburst.mp3").attr("autoplay", true).appendTo("body");
            $("<button>").attr("id", "gba").text("Get Buttons Again").appendTo("#elektronomia-sky-high-js-player-div");
            $("#pl-sk-hi").remove();
            $("#lp-sk-hi").remove();
			$("#gba").on("click", function() {
				window.location.pathname = window.location.pathname;
				$("#gba").text("Reloading...");
			});
        	var dasInterval = window.setInterval(function() {
            	$("#cur-aud").remove();
            	$("<audio>").attr("src", "/cdn/audio/Tobu & Itro - Sunburst.mp3").attr("autoplay", true).attr("id", "cur-aud").appendTo("body");
        }, (3000*60) + 5500);
    });
    window.onbeforeunload = function() {
        document.title = "25yeht";
    };
});
