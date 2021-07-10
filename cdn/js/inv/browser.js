if(document.getElementsByName("jquery")[0]) {
    console.log("template.js started!");
    //When the document is loaded, do code inside of function in parameter.
    $(document).ready(function() {
        //After the document is fully loaded, you can properly manipulate HTML.
        $("#go").click(function() {
			$("#web-container").attr("src", $("#src").val());
		});
    });
} else {
    console.log("jQuery not found. Maybe put [name=browser.js] in front of it?")
}
