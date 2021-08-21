$(document).ready(() => {
	//Define song variables
	var name = "Sunburst";
	var url = "/cdn/audio/Tobu & Itro - Sunburst.mp3";
	var attrText = "Song: Tobu & Itro - Sunburst [NCS Release]<br>Music provided by NoCopyrightSounds<br>Free Download/Stream: N/A<br>Watch: <a href=\"javascript:open(&quot;http://youtu.be/4lXBHD5C8do&quot;, &quot;_blank&quot;, &quot;width=450, height=650&quot)\">http://youtu.be/4lXBHD5C8do</a>";
	var logText = "Play/loop button clicked!";
	//Generate play button and audio
	$("<button>").attr("id", "pl-sk-hi").html("Play " + name).appendTo("#elektronomia-sky-high-js-player-div");
	$("#pl-sk-hi").on("click", function() {
		console.log(logText);
		document.title = "Playing: " + name +" - 25yeht";
		$("<p>").addClass("container-p").html(attrText).appendTo("#elektronomia-sky-high-js-player-div");
		$("<audio>").attr("src", url).attr("autoplay", true).attr("controls", true).appendTo("#elektronomia-sky-high-js-player-div");
		$("<br>").appendTo("#elektronomia-sky-high-js-player-div");
		$("<button>").attr("id", "gba").text("Get Buttons Again").appendTo("#elektronomia-sky-high-js-player-div");
		$("#pl-sk-hi").remove();
		$("#lp-sk-hi").remove();
		$("#gba").on("click", function() {
			location.reload();
			$("#gba").text("Reloading...");
		});
	});
    $("<button>").text("Loop " + name).attr("id", "lp-sk-hi").appendTo("#elektronomia-sky-high-js-player-div");
    $("#lp-sk-hi").on("click", function() {
		console.log(logText);
		document.title = "Playing: " + name + " - 25yeht";
		$("<p>").addClass("container-p").html(attrText).appendTo("#elektronomia-sky-high-js-player-div");
		$("<audio>").attr("src", url).attr("autoplay", true).attr("loop", true).appendTo("body");
		$("<button>").attr("id", "gba").text("Get Buttons Again").appendTo("#elektronomia-sky-high-js-player-div");
		$("#pl-sk-hi").remove();
		$("#lp-sk-hi").remove();
		$("#gba").on("click", function() {
			location.reload();
			$("#gba").text("Reloading...");
		});
    });
    window.onbeforeunload = () => {
        document.title = "25yeht";
    };
});
