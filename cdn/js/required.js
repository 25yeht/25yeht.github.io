if(document.getElementsByName("jquery")[0]) {
    console.log("required.js started!");
    console.log("Welcome home!");
    $(document).ready(() => {
		if(window.location.href.toLowerCase().includes("index.html")) {
			window.location.href = window.location.href.replace("index.html", "");
		}
    });
} else {
    console.log("jQuery not found! Maybe try adding the script as the first?");
}
