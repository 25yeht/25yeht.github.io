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
        addAnch("Today's News is propaganda: Elderly women scratches her book");
        addImg("https://www.mozilla.org/media/img/home/2021/gary.f79b62eae19a.png", "Image of the women scratching her book", "30%", null);
        addP("Granny scratches her book<br><em>Source: <a href='https://www.mozilla.org/media/img/home/2021/gary.f79b62eae19a.png' target='blank'>Mozilla Media</a></em>");
        $("<br>").appendTo("body");
        addP("<br><br><em>Ahh, I just love scratching books</em> - Granny");
        $("<br>").appendTo("body");
        addP("This woman just <strong>LOVES</strong> scratching her books. She even got fined $1000000.00 at the local library for property damage and valdalism! :D<br>And, instead of paying the fine, the library actully paid her the $1000000.00!!!<br>Thanks for reading!!! <strong>BYE BYE!!! :D</strong>");
        for(var i = 0; i < 5; i++) {
            $("<br>").appendTo("body");
        }
        //End Generating News
    });
} else {
    console.log("jQuery not found. Maybe put [name=genNews.js] in front of it?")
}
