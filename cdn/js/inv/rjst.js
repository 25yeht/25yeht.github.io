if(document.getElementsByName("jquery")[0]) {
    console.log("rjst.js started!");
    //When the document is loaded, do code inside of function in parameter.
    $(document).ready(function() {
        //After the document is fully loaded, you can properly manipulate HTML.
        $("<button>").text("Run (jQuery is included)").attr("id", "rjst-btn").appendTo("#rjst-btn-div");
        $("#rjst-btn").on("click", function() {
            eval($("#notepad").val());
        });
        $("<div>").attr("id", "dev-console").addClass("dev").html("Here are some links you can copy and paste from:<br><a href='/cdn/js/genLinks.js' target='_blank'>Generate Links</a><br><a href='/cdn/js/inv/genNews.js' target='_blank'>Generate News</a><br><a href='/cdn/js/inv/rjst.js' target='_blank'>The script used to generate this box!</a>").appendTo("#rjst-btn-div");
    });
} else {
    console.log("jQuery not found. Maybe put [name=rjst.js] in front of it?")
}
