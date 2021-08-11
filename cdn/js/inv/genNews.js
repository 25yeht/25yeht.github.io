if(document.getElementsByName("jquery")[0]) {
    console.log("template.js started!");
    //When the document is loaded, do code inside of function in parameter.
    $(document).ready(() => {
        //After the document is fully loaded, you can properly manipulate HTML.
        $("#news-div").css("padding", "35px");
        function addP(html) {
            $("<p>").addClass("news").html(html).appendTo("#news-div");
        }
        function addImg(src, alt, width, height, title) {
            $("<img>").attr("src", src).attr("alt", alt).addClass("alcentered").css("width", width).css("height", height).attr("title", title).appendTo("#news-div");
        }
        function addH(html) {
            $("<h2>").html(html).addClass("news").addClass("alcentered").appendTo("#news-div");
        }
        function addAnch(html) {
            $("<h1>").addClass("news").addClass("centered").html(html).appendTo("#news-div");
        }
        //Start Generating News
        addAnch("Western media lies about china");
		addH("Here is a fake 哔哔西 story about china:");
		addP("<a style='color: red;' id='aa' href='https://www.bbc.co.uk/news/business-57419071'>Government ‘dragging feet’ on China forced labo<b><i style='color: black; font-size: 20px;'>u</i></b>r</a>");
		$("#aa").click(e => {
			e.preventDefault();
			var a = open("https://www.bbc.co.uk/news/business-57419071", "_blank", "width=500, height=725");
			var ab = setTimeout(() => {
				a.document.body.innerHTML = a.document.body.innerHTML.replaceAll("'", "");
				clearTimeout(ab);
			}, 200)
		});
        for(var i = 0; i < 5; i++) {
            $("<br>").appendTo("body");
        }
        //End Generating News
    });
} else {
    console.log("jQuery not found. Maybe put [name=genNews.js] in front of it?")
}
