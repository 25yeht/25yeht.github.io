if(document.getElementsByName("jquery")[0]) {
    console.log("required.js started!");
    console.log("Welcome home!");
    $(document).ready(() => {
		if(window.location.href.toLowerCase().includes("index.html")) {
			//window.location.href = window.location.href.replace("index.html", "");
		}
		$("<h2>").text("SEVERE THUNDERSTORM REPORTED IN NOTHERN ILLINOIS AT 4:00 PM CENTERAL TIME 8/10/2021 US DATE FORMAT AND US DATE AND TIME").addClass("err-msg").appendTo("body").css("font-family", "arial, helvetica, sans-serif");
    });
} else {
    console.log("jQuery not found! Maybe try adding the script as the first?");
}
