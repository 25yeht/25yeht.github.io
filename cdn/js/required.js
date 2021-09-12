if(document.getElementsByName("jquery")[0]) {
    console.log("required.js started!");
    console.log("Welcome home!");
    $(document).ready(_ => {
		//Prevent pathname ending with "index.html" glitches/errors
		if(window.location.href.toLowerCase().includes("index.html")) {
			window.location.href = window.location.href.replace("index.html", "");
		}
		//Unfocus inputs when enter is pressed
		$("input").keydown(e => {
			if(e.keyCode == 13) {
				$("input").blur();
			}
		});
		//Detect slow connection
		var slowLoad = setTimeout(function() {
			alert("Hmm... Your connection to the server is slow so some of the fonts/scripts may not load.");
		}, 250);

		addEventListener('load', function() {
			clearTimeout(slowLoad);
		}, false);
    });
} else {
    console.log("jQuery not found! Maybe try adding the script as the first?");
}
