if(document.getElementsByName("jquery")[0]) {
    console.log("cf.js started!");
    //When the document is loaded, do code inside of function in parameter.
    $(document).ready(() => {
        //After the document is fully loaded, you can properly manipulate HTML.
        function previewFile() {
			var preview = document.querySelector('img');
			var file = document.querySelector('input[type=file]').files[0];
			var reader = new FileReader();

			reader.addEventListener("load", function () {
				// convert image file to base64 string
				preview.src = reader.result;
				preview.style.borderRadius = "12px";
			}, false);

			if (file) {
				reader.readAsDataURL(file);
			}
		}
		$("#prev").click(() => {
			previewFile();
		});
    });
} else {
    console.log("jQuery not found. Maybe put [name=cf.js] in front of it?")
}
