if(document.getElementsByName("jquery")[0]) {
    console.log("required.js started!");
    console.log("Welcome home!");
    $(document).ready(_ => {
		if(window.location.href.toLowerCase().includes("index.html")) {
			window.location.href = window.location.href.replace("index.html", "");
		}
		$("input").keydown(e => {
			if(e.keyCode == 13) {
				$("input").blur();
			}
		});
    });
} else {
    console.log("jQuery not found! Maybe try adding the script as the first?");
}
