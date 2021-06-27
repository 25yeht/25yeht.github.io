$(document).ready(function() {
		//Generate play button and audio
		$("<button>").attr("id", "pl-sk-hi").html("Play Sky High").appendTo("#elektronomia-sky-high-js-player-div");
    	$("#pl-sk-hi").on("click", function() {
    		$("<button>").attr("id", "gba").appendTo("#elektronomia-sky-high-js-player-div");
		$("#gba").append($("<a>").text("Get buttons again").attr("href", window.location.pathname));
			document.title = "Playing: Sky High - 25yeht";
        	$("<audio>").attr("src", "/cdn/audio/Elektronomia_-_Sky_High_NCS_Release[GetVideo.watch].mp3").attr("autoplay", true).appendTo("#elektronomia-sky-high-js-player-div");
            $("#pl-sk-hi").remove();
			$("#lp-sk-hi").remove();
        });
    $("<button>").text("Loop Sky High").attr("id", "lp-sk-hi").appendTo("#elektronomia-sky-high-js-player-div");
    $("#lp-sk-hi").on("click", function() {
            console.log("Clicked!");
			document.title = "Playing: Sky High - 25yeht";
            $("<audio>").attr("src", "/cdn/audio/Elektronomia_-_Sky_High_NCS_Release[GetVideo.watch].mp3").attr("autoplay", true).appendTo("body");
            $("<button>").attr("id", "gba").appendTo("#elektronomia-sky-high-js-player-div");
	    $("#gba").append($("<a>").text("Get buttons again").attr("href", window.location.pathname));
            $("#pl-sk-hi").remove();
            $("#lp-sk-hi").remove();
        var dasInterval = window.setInterval(function() {
            $("#cur-aud").remove();
            $("<audio>").attr("src", "/cdn/audio/Elektronomia_-_Sky_High_NCS_Release[GetVideo.watch].mp3").attr("autoplay", true).attr("id", "cur-aud").appendTo("body");
        }, (3000*60) + 50000);
    });
});
