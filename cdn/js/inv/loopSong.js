if(document.getElementsByName("jquery")[0]) {
    console.log("template.js started!");
    //When the document is loaded, do code inside of function in parameter.
    $(document).ready(() => {
        //After the document is fully loaded, you can properly manipulate HTML.
		var l = "";
		var urls = {
			everything: "/cdn/audio/music/everything.mp3",
			mp3: "/cdn/audio/music/mp3.mp3",
			skyline: "/cdn/audio/music/skyline.mp3"
		};
        $("#play").click(() => {
			if($("#url").val()) {
				if(urls[$("#url").val().toLowerCase()]) {
					$("#aud").attr("src", urls[$("#url").val().toLowerCase()])[0].play();
				} else {
					$("#aud").attr("src", $("#url").val())[0].play();
				}
				$("#url").attr("placeholder", $("#url").val());
				l = $("#url").val();
			} else {
				$("#aud").attr("src", l)[0].play();
			}
		});
		$("#url").keydown(e => {
			if(e.keyCode == 13) {
				alert(2);
				if($("#url").val()) {
					if(urls[$("#url").val().toLowerCase()]) {
						$("#aud").attr("src", urls[$("#url").val().toLowerCase()])[0].play();
					} else {
						$("#aud").attr("src", $("#url").val())[0].play();
					}
					l = $("#url").val();
				} else {
					$("#aud").attr("src", l)[0].play();
				}
			}
		});
    });
} else {
    console.log("jQuery not found. Maybe put [name=loopSong.js] in front of it?");
}
