if(document.getElementsByName("jquery")[0]) {
    console.log("rjst.js started!");
    //When the document is loaded, do code inside of function in parameter.
    $(document).ready(function() {
        //After the document is fully loaded, you can properly manipulate HTML.
        $("<button>").text("Run (jQuery is included)").attr("id", "rjst-btn").appendTo("#rjst-btn-div");
        $("#rjst-btn").on("click", function() {
            eval($("#notepad").val());
        });
    });
} else {
    console.log("jQuery not found. Maybe put [name=template.js] in front of it?")
}
