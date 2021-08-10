if(document.getElementsByName("jquery")[0]) {
    console.log("genLinks.js started!");
    $(document).ready(function() {
        console.log("Document is ready!");
        function addLink(displayName, url, isLink) {
            if(window.location.pathname.charAt(window.location.pathname.length - 1) == "/" && url == window.location.pathname) {
                var $currentLink = $("<span>").addClass("link").text(displayName).appendTo("#links2");
            } else if (window.location.pathname.charAt(window.location.pathname.length - 1) !== "/" && url + "/" == window.location.pathname || isLink == false) {
                var $currentLink = $("<span>").addClass("link").text(displayName).appendTo("#links2");
            } else {
                var $currentLink = $("<a>").attr("href", url).addClass("link").text(displayName).appendTo("#links2");
            }
        }
        function addExtLink(displayName, url) {
            var $currentLink = $("<a>").attr("href", url).attr("target", "_blank").addClass("link").text(displayName).appendTo("#links2");
		}
        //Add the links here addLink(Text Displayed, Real URL);
        addExtLink("README", "/README.md");
		addLink("Run JS from a link", "/fun/run-js-from-link/");
		addLink("25Browser", "/fun/25browser/");
		addLink("Display an Image", "/fun/display-img/");
		addLink("Create a playlist", "/fun/make-playlist/");
        });
} else {
    console.log("jQuery not found!")
}
