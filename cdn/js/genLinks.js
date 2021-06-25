if(document.getElementsByName("jquery")[0]) {
    console.log("genLinks.js started!");
    $(document).ready(function() {
        console.log("Document is ready!");
        function addLink(displayName, url) {
            $("<a>").attr("href", url).addClass("link").text(displayName).appendTo("#links");
        }
        //Add the links here addLink(Text Displayed, Real URL);
        addLink("Home", "/");
        addLink("Afficient Video", "/fun/afficient/");
        addLink("w3schools Embed", "/fun/embeds/w3schools/");

        });
} else {
    console.log("jQuery not found!")
}