if(document.getElementsByName("jquery")[0]) {
    console.log("genLinks.js started!");
    $(document).ready(function() {
        console.log("Document is ready!");
        function addLink(displayName, url) {
            if(window.location.pathname.charAt(window.location.pathname.length - 1) == "/" && url == window.location.pathname) {
                var $currentLink = $("<span>").addClass("link").text(displayName).appendTo("#links");
            } else if (window.location.pathname.charAt(window.location.pathname.length - 1) !== "/" && url + "/" == window.location.pathname) {
                var $currentLink = $("<span>").addClass("link").text(displayName).appendTo("#links");
            } else {
                var $currentLink = $("<a>").attr("href", url).addClass("link").text(displayName).appendTo("#links");
            }
        }
        //Add the links here addLink(Text Displayed, Real URL);
        addLink("Home", "/");
        addLink("Afficient Video", "/fun/afficient/");
        addLink("Quiz!", "/fun/quiz/");
        });
} else {
    console.log("jQuery not found!")
}
