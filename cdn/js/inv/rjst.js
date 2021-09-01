if(document.getElementsByName("jquery")[0]) {
    console.log("rjst.js started!");
    //When the document is loaded, do code inside of function in parameter.
    $(document).ready(function() {
        //After the document is fully loaded, you can properly manipulate HTML.
	    $("textarea").focus();
		function enableTab(id) {
			var el = document.getElementById(id);
			el.onkeydown = function(e) {
				if (e.keyCode === 9) { // tab was pressed

					// get caret position/selection
					var val = this.value,
						start = this.selectionStart,
						end = this.selectionEnd;

					// set textarea value to: text before caret + tab + text after caret
					this.value = val.substring(0, start) + '\t' + val.substring(end);

					// put caret at right position again
					this.selectionStart = this.selectionEnd = start + 1;

					// prevent the focus lose
					return false;

				}
			};
		}
		enableTab("notepad");
        $("<button>").text("Run (jQuery is included)").attr("id", "rjst-btn").appendTo("#rjst-btn-div");
        $("#rjst-btn").on("click", function() {
            if($("#notepad").val()[0].includes("while(true) {") || $("#notepad").val().includes("while(true){") || $("#notepad").val().includes("while(true)|{")) {
                alert("Woah there buddy, a while true loop will lag this webpage!");
            } else {
                try {
                    eval($("#notepad").val());
                } catch(error) {
                    alert("Script error!\n\n" + error + "\n\n Please check your code and try again.")
                }
            }
        });
        $("<div>").attr("id", "dev-console").addClass("dev").html("Here are some links you can copy and paste from:<br><a href='/cdn/js/genLinks.js' target='_blank'>Generate Links</a><br><a href='/cdn/js/inv/genNews.js' target='_blank'>Generate News</a><br><a href='/cdn/js/inv/rjst.js' target='_blank'>The script used to generate this box!</a>").appendTo("#rjst-btn-div");
    });
} else {
    console.log("jQuery not found. Maybe put [name=rjst.js] in front of it?")
}
