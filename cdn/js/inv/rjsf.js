if(document.getElementsByName("jquery")[0]) {
    console.log("template.js started!");
    //When the document is loaded, do code inside of function in parameter.
    $(document).ready(function() {
        //After the document is fully loaded, you can properly manipulate HTML.
        $("[name=type").on("click", function() {
			$("[type=submit]").attr("disabled", false);
		});
		$("#what-type").on("submit", function(e) {
			e.preventDefault();
			var val = $("#sel:checked").val();
			var valText = $("#opt-sel").val();
			var val2 = $("#enter:checked").val();
			var val2Text = $("#pathname").val();
			if(val) {
				var xhr = new XMLHttpRequest();
				xhr.open("GET", valText, true);
				xhr.onload = function() {
					if(xhr.status == 404) {
						alert("Script not found! URL: " + xhr.responseURL);
					} else {
						try {
							eval(xhr.responseText);
						} catch(error) {
							alert("Script Error! " + error);
						}
					}
				};
				xhr.send();
			} else {
				var xhr = new XMLHttpRequest();
				xhr.open("GET", val2Text, true);
				xhr.onload = function() {
					if(xhr.status == 404) {
						alert("Script not found! URL: " + xhr.responseURL);
					} else {
						try {
							eval(xhr.responseText);
						} catch(error) {
							alert("Script Error! " + error);
						}
					}
				}
				xhr.send();
			}
		});
    });
} else {
    console.log("jQuery not found. Maybe put [name=template.js] in front of it?")
}
