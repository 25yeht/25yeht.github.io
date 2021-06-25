if(document.getElementsByName("jquery")[0]) {
    console.log("template.js started!");
    //When the document is loaded, do code inside of function in parameter.
    $(document).ready(function() {
        //After the document is fully loaded, you can properly manipulate HTML.
        $("#pathname").text("Got a 404 response error when trying to process pathname '" + window.location.pathname + "'. Sorry! :(").css("font-family", "monospace");
    });
} else {
    console.log("jQuery not found. Maybe put [name=template.js] in front of it?")
}