if(document.getElementsByName("jquery")[0]) {
    console.log("required.js started!");
    if(window.location.pathname.charAt(window.location.pathname.length - 1) == "/") {
        if(window.location.pathname == "/") {
            console.log("Welcome home!");
            $(document).ready(function() {
                $("<button>").text("Play Sky High").attr("id", "pl-sk-hi").appendTo("#ad-js-player-div");
                var isAppended = false;
                $("#pl-sk-hi").on("click", function() {
                    if(isAppended == false) {
                        $("<audio>").attr("src", "/cdn/audio/Elektronomia_-_Sky_High_NCS_Release[GetVideo.watch].mp3").attr("controls", true).attr("autoplay", true).appendTo("#ad-js-player-div");
                    isAppended = true;
                    }
                });
            });
        }
    } else {
        console.log("Welcome home!");
            $(document).ready(function() {
                $("<button>").text("Play Sky High").attr("id", "pl-sk-hi").appendTo("#ad-js-player-div");
                var isAppended = false;
                $("#pl-sk-hi").on("click", function() {
                    if(isAppended == false) {
                        $("<audio>").attr("src", "/cdn/audio/Elektronomia_-_Sky_High_NCS_Release[GetVideo.watch].mp3").attr("controls", true).attr("autoplay", true).appendTo("#ad-js-player-div");
                    isAppended = true;
                    }
                });
            });
        }
} else {
    console.log("jQuery not found! Maybe try adding the script as the first?");
}
