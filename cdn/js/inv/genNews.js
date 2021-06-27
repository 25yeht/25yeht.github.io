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
        addAnch("Man missing, last seen poking bomb");
        addImg("https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png", "Image of the man", "30%", null);
        addP("Image of the man");
        addH("DE EXCHAXT STOXRY")
        addP("<br><br>So, basicly, the man went to a bomb shop and bought a few bombs. After he got home, he decided to blow it up, but he didn't have dynamite, so he decided to poke around, and he blew it up.<br>DE END LOLLLLLLLLLLLL");
        for(var i = 0; i < 5; i++) {
            $("<br>").appendTo("body");
        }
        //End Generating News
    });
} else {
    console.log("jQuery not found. Maybe put [name=genNews.js] in front of it?")
}
