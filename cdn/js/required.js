if(document.getElementsByName("jquery")[0]) {
    console.log("required.js started!");
            console.log("Welcome home!");
            $(document).ready(function() {
    //Add favicon
	$("<link>").attr("rel", "shortcut icon").attr("href", "https://math.afficienta.com/static/favicon.ico").appendTo("head");
                $("<button>").text("Play Sky High").attr("id", "pl-sk-hi").appendTo("#elektronomia-sky-high-js-player-div");
                $("#pl-sk-hi").on("click", function() {
                    $("<audio>").attr("src", "/cdn/audio/Elektronomia_-_Sky_High_NCS_Release[GetVideo.watch].mp3").attr("controls", true).attr("autoplay", true).appendTo("#elektronomia-sky-high-js-player-div");
                    $("#pl-sk-hi").remove();
                });
            });
} else {
    console.log("jQuery not found! Maybe try adding the script as the first?");
}
