if(document.getElementsByName("jquery")[0]) {
    console.log("template.js started!");
    //When the document is loaded, do code inside of function in parameter.
    $(document).ready(() => {
        //After the document is fully loaded, you can properly manipulate HTML.
		var l = "";
        $("#play").click(() => {
			if($("#url").val()) {
				$("#aud").attr("src", $("#url").val())[0].play();
				$("#url").attr("placeholder", $("#url").val()).val("");
				l = $("#url").val();
			} else {
				$("#aud").attr("src", l)[0].play();
				$("#url").attr("placeholder", l).val("");
			}
		});
    });
} else {
    console.log("jQuery not found. Maybe put [name=loopSong.js] in front of it?");
}
