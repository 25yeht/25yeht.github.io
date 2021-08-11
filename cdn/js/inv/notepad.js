if(document.getElementsByName("jquery")[0]) {
    console.log("template.js started!");
    //When the document is loaded, do code inside of function in parameter.
    $(document).ready(() => {
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
		enableTab("easy-notepad");
        if(localStorage) {
			if(localStorage.getItem("notepad-save") && typeof localStorage.getItem("notepad-save") == "string") {
				try {
					$("#easy-notepad").val(localStorage.getItem("notepad-save"));
				} catch(err) {
					alert("There was an error in the code! Message: " + err)
				}
			} else if(localStorage.getItem("notepad-save") && typeof localStorage.getItem("notepad-save") != "string") {
				$("#easy-notepad").val("An invalid data type was stored in the notepad storage. Here is the value: \n\n\n" + localStorage.getItem("notepad-save"));
			} else if(!localStorage.getItem("notepad-save")) {
				$("#notepad").val("My cool note!\n\n\nThis notepad autosaves so fast, you'll never lose any information!");
			}
			var inteval = setInterval(() => {
				localStorage.setItem("notepad-save", $("#easy-notepad").val());
			}, 15);
		} else {
			$("<h1 class='err-msg'>Sorry, but your browser does not suppord data storing.</h1>").appendTo("body");
		}
    });
} else {
    console.log("jQuery not found. Maybe put [name=template.js] in front of it?");
}
