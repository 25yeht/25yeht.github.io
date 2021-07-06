if(document.getElementsByName("jquery")[0]) {
    console.log("template.js started!");
    //When the document is loaded, do code inside of function in parameter.
    $(document).ready(function() {
        //After the document is fully loaded, you can properly manipulate HTML.
        $("#news-div").css("padding", "35px");
        function addP(html) {
            $("<p>").addClass("news").html(html).appendTo("#news-div");
        }
        function addImg(src, alt, width, height) {
            $("<img>").attr("src", src).attr("alt", alt).addClass("alcentered").css("width", width).css("height", height).appendTo("#news-div");
        }
        function addH(html) {
            $("<h2>").html(html).addClass("news").addClass("alcentered").appendTo("#news-div");
        }
        function addAnch(html) {
            $("<h1>").addClass("news").addClass("centered").html(html).appendTo("#news-div");
        }
        //Start Generating News
        addAnch("The Times Hires Novelists to Write Their Paper.");
		addP("The Times for some reason hires novelists to write Chinese propaganda.");
		addP("<a style='color: purple; text-decoration: underline;' href='https://www.thetimes.co.uk/article/china-state-tv-channel-cgtn-enlists-uk-student-influencers-dw9v5sbnc' target='_blank'>See The Propaganda</a>");
		addH("What the propaganda says:");
		addP("The propaganda says that china is launching an evil program and paying people to do it.");
		addH("The truth:");
		addP("CGTN is just recruiting talented people to report the news.")
        for(var i = 0; i < 5; i++) {
            $("<br>").appendTo("body");
        }
        //End Generating News
    });
} else {
    console.log("jQuery not found. Maybe put [name=genNews.js] in front of it?")
}
