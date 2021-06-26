$(document).ready(function() {
    $("<button>").text("Loop Sky High").attr("id", "lp-sk-hi").appendTo("#elektronomia-sky-high-js-player-div");
    $("#lp-sk-hi").on("click", function() {
            console.log("Clicked!");
            $("<audio>").attr("src", "https://25yeht.github.io/cdn/audio/Elektronomia_-_Sky_High_NCS_Release[GetVideo.watch].mp3").attr("autoplay", true).appendTo("body");
            $("#pl-sk-hi").remove();
            $("#lp-sk-hi").remove();
        var dasInterval = window.setInterval(function() {
            $("#cur-aud").remove();
            $("<audio>").attr("src", "https://25yeht.github.io/cdn/audio/Elektronomia_-_Sky_High_NCS_Release[GetVideo.watch].mp3").attr("autoplay", true).attr("id", "cur-aud").appendTo("body");
        }, (3000*60) + 50000);
    });
});
