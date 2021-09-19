$(document).ready(function() {
	//Define song variables
	var name = "Symbolism";
	var url = "/cdn/audio/music/symbolism_Electro-Light_NCS_Release.mp3";
	var attrText = "Song: Electro-Light - Symbolism [NCS Release]<br>Music provided by NoCopyrightSounds<br>Free Download/Stream: <a href=\"http://ncs.io/symbolism\" target=\"_blank\">http://ncs.io/symbolism</a><Br>Watch: <a href=\"http://youtu.be/__CRWE-L45k\" target=\"_blank\">http://youtu.be/__CRWE-L45k</a>";
	var logText = "Play/loop button clicked!";
	var canDownload = false;
	var $t25yehtGithubIoAudio;
	//Generate play button and audio
	//Play music button
	$("<button>").attr("id", "pl-sk-hi").html("Play " + name).appendTo("#elektronomia-sky-high-js-player-div");
	$("#pl-sk-hi").on("click", function() {
		console.log(logText);
		document.title = "Playing: " + name +" - 25yeht";
		$("<p>").addClass("container-p").html("<span aria-label='Attribution text'>" + attrText + "</span>").appendTo("#elektronomia-sky-high-js-player-div");
		$t25yehtGithubIoAudio = $("<audio>").attr("src", url).attr("autoplay", true).attr("controls", true).appendTo("#elektronomia-sky-high-js-player-div");
		if(!canDownload) {
			$t25yehtGithubIoAudio.attr("controlslist", "nodownload");
		}
		$("<br>").appendTo("#elektronomia-sky-high-js-player-div");
		$("<button>").attr("id", "gba").text("Get Buttons Again").appendTo("#elektronomia-sky-high-js-player-div");
		$("#pl-sk-hi").remove();
		$("#lp-sk-hi").remove();
		$("#gba").on("click", function() {
			location.reload();
			$("#gba").text("Reloading...");
		});
	});
	//Loop music button
    $("<button>").text("Loop " + name).attr("id", "lp-sk-hi").appendTo("#elektronomia-sky-high-js-player-div");
    $("#lp-sk-hi").on("click", function() {
		console.log(logText);
		document.title = "Playing: " + name + " - 25yeht";
		$("<p>").addClass("container-p").html("<span aria-label='Attribution text'>" + attrText + "</span><span id='gdl'><br><br><a style='color: lightblue; cursor: pointer;' id='dl' href='javascript:void(0);' aria-label='Disable Loop Button'>Disable loop</a></span>").appendTo("#elektronomia-sky-high-js-player-div");
		$t25yehtGithubIoAudio = $("<audio>").attr("src", url).attr("autoplay", true).attr("loop", true).attr("controls", true).appendTo("#elektronomia-sky-high-js-player-div");
		if(!canDownload) {
			$t25yehtGithubIoAudio.attr("controlslist", "nodownload");
		}
		$("#dl").click(function() {
			$("#gdl").remove();
			$t25yehtGithubIoAudio.attr("loop", false);
			$t25yehtGithubIoAudio[0].pause();
			$t25yehtGithubIoAudio[0].currentTime = 0;
			$t25yehtGithubIoAudio[0].play();
		});
		$("<br>").appendTo("#elektronomia-sky-high-js-player-div");
		$("<br>").appendTo("#elektronomia-sky-high-js-player-div");
		$("<button>").attr("id", "gba").text("Get Buttons Again").appendTo("#elektronomia-sky-high-js-player-div");
		$("#pl-sk-hi").remove();
		$("#lp-sk-hi").remove();
		$("#gba").on("click", function() {
			location.reload();
			$("#gba").text("Reloading...");
		});
    });
	//Detect 25yeht PPLS plugin
	var t25yehtPluginDetectorFaded = false;
	var canChangeTitle = true;
	var t25yeht_PPLSPluginDetectionInterval = setInterval(_ => {
		if(this) {
			if(this["t25yeht_PPLS:RUNNING"] && !t25yehtPluginDetectorFaded) {
				if($t25yehtGithubIoAudio) {
					try{
						$t25yehtGithubIoAudio.remove();
						t25yehtPluginDetectorFaded = true;
					} catch(error) {
						alert("There was an error allowing the extension! Error: " + error);
						clearInterval(t25yeht_PPLSPluginDetectionInterval);
					}
				}
				$("#elektronomia-sky-high-js-player-div").hide().html("<h1>Plugin detected!</h1><br>").fadeIn();
				t25yehtPluginDetectorFaded = true;
			}
			if(t25yehtPluginDetectorFaded) {
				if(name.toUpperCase() != this["t25yeht_PPLS:SONGNAMES"][urlIndex].toUpperCase()) {
					$("#elektronomia-sky-high-js-player-div").html("<h1>Plugin detected!<br><br>Now playing: " + this["t25yeht_PPLS:SONGNAMES"][urlIndex] + "</h1><br>");
				} else {
					$("#elektronomia-sky-high-js-player-div").html("<h1>Plugin detected!<br><br>Now playing: " + this["t25yeht_PPLS:SONGNAMES"][urlIndex] + " (Theme song)</h1><br>");
				}
				if(canChangeTitle) {
					document.title = "Playing " + this["t25yeht_PPLS:SONGNAMES"][urlIndex] + " from plugin - 25yeht";
				}
			}
		}
	}, 100);
    window.onbeforeunload = function() {
		canChangeTitle = false;
        document.title = "25yeht";
    };
});
