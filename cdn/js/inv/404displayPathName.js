if(document.getElementsByName("jquery")[0]) {
    console.log("template.js started!");
    //When the document is loaded, do code inside of function in parameter.
    $(document).ready(() => {
        //After the document is fully loaded, you can properly manipulate HTML.
		if(!window.location.search.toLowerCase().includes("switch=true")) {
        	$("#pathname").text("Got a 404 response error when trying to process pathname '" + window.location.pathname + "'. Sorry! :(").css("font-family", "monospace").addClass("centered").css("text-align", "center");
		} else {
			$("#pathname").text("Got a 404 response error when trying to process pathname '" + window.location.pathname + "'. Note: Some beta/stable features may not be available on both sites.").css("font-family", "monospace").addClass("centered").css("text-align", "center");
			$("<button>").text("Go back").addClass("centered").click(() => {
				history.back();
			});
		}
    });
} else {
    console.log("jQuery not found. Maybe put [name=template.js] in front of it?")
}
