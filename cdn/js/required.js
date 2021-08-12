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
		//Define function $getSearchParams(param);
		function $getSearchParam(param) {
			return new URL(location.href).searchParams.get(param);
		}
    });
} else {
    console.log("jQuery not found! Maybe try adding the script as the first?");
}
