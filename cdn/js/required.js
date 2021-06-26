if(document.getElementsByName("jquery")[0]) {
    console.log("required.js started!");
    console.log("Welcome home!");
    
    $(document).ready(function() {
		//Generate play button and audio
		$("<button>").attr("id", "pl-sk-hi").html("Play Sky High").appendTo("#elektronomia-sky-high-js-player-div");
    	$("#pl-sk-hi").on("click", function() {
        	$("<audio>").attr("src", "/cdn/audio/Elektronomia_-_Sky_High_NCS_Release[GetVideo.watch].mp3").attr("controls", true).attr("autoplay", true).appendTo("#elektronomia-sky-high-js-player-div");
            $("#pl-sk-hi").remove();
			$("#lp-sk-hi").remove();
        });
	    //Generate h2 site is under development
		$("h1 .centered").append($("<br>"));
		$("h1 .centered").append($("<h2").text("This site is currently under development."));
	    //Loop Sky High Audio
	    var $lpBtn = $("<button>");
	    $lpBtn.attr("id", "lp-sk-hi");
	    $lpBtn.text("Loop Sky High");
	    $("#elektronomia-sky-high-js-player-div").append($lpBtn);
		//$("<button>").text("Loop Sky High").attr("id", "lp-sk-hi").appendTo("#elektronomia-sky-high-js-player-div");
		$("#lp-sk-hi").on("click", function() {
				console.log("Clicked!");
				$("<audio>").attr("src", "/cdn/audio/Elektronomia_-_Sky_High_NCS_Release[GetVideo.watch].mp3").attr("autoplay", true).appendTo("body");
				$("#pl-sk-hi").remove();
				$("#lp-sk-hi").remove();
			var theInterval = window.setInterval(function() {
				$("#cur-aud").remove();
				$("<audio>").attr("src", "/cdn/audio/Elektronomia_-_Sky_High_NCS_Release[GetVideo.watch].mp3").attr("autoplay", true).attr("id", "cur-aud").appendTo("body");
			}, (3000*60) + 50000);
    });
    });
} else {
    console.log("jQuery not found! Maybe try adding the script as the first?");
}
