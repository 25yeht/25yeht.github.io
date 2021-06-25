if(document.getElementsByName("jquery")[0]) {
    console.log("genHeader.js started!");
    $(document).ready(function() {
        $("<h1>").addClass("centered").text("Welcome!").appendTo("#header-div");
    })
} else {
    console.log("jQuery not found!")
}