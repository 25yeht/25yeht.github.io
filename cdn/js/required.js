if(document.getElementsByName("jquery")[0]) {
    console.log("required.js started!");
    console.log("Welcome home!");
    
    $(document).ready(function() {
		//Generate play button and audio
		$("<button>").attr("id", "pl-sk-hi").html("Play Sky High").appendTo("#elektronomia-sky-high-js-player-div");
    	$("#pl-sk-hi").on("click", function() {
        	$("<audio>").attr("src", "/cdn/audio/Elektronomia_-_Sky_High_NCS_Release[GetVideo.watch].mp3").attr("controls", true).attr("autoplay", true).appendTo("#elektronomia-sky-high-js-player-div");
            $("#pl-sk-hi").remove();
        });
	    //Generate h2 site is under development
		$("h1 .centered").append($("<br>"));
		$("h1 .centered").append($("<h2").text("This site is currently under development."));
    });
} else {
    console.log("jQuery not found! Maybe try adding the script as the first?");
}
