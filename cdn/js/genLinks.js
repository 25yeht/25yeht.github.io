if(document.getElementsByName("jquery")[0]) {
    console.log("genLinks.js started!");
    $(document).ready(function() {
        console.log("Document is ready!");
        function addLink(displayName, url, isLink) {
            if(window.location.pathname.charAt(window.location.pathname.length - 1) == "/" && url == window.location.pathname) {
                var $currentLink = $("<span>").addClass("link").text(displayName).appendTo("#links");
            } else if (window.location.pathname.charAt(window.location.pathname.length - 1) !== "/" && url + "/" == window.location.pathname || isLink == false) {
                var $currentLink = $("<span>").addClass("link").text(displayName).appendTo("#links");
            } else {
                var $currentLink = $("<a>").attr("href", url).addClass("link").text(displayName).appendTo("#links");
            }
        }
        function addExtLink(displayName, url) {
            var $currentLink = $("<a>").attr("href", url).attr("target", "_blank").addClass("link").text(displayName).appendTo("#links");
	}
	function alsp(displayName, hostname) {
		var $currentLink = $("<a>").attr("href", "https://" + hostname + window.location.pathname + "?switch=true").addClass("link").text(displayName).appendTo("#links");
	}
        //Add the links here addLink(Text Displayed, Real URL);
        addLink("Home", "/");
        addLink("Afficient Video", "/fun/afficient/");
        addLink("Quiz!", "/fun/quiz/");
        addLink("A View Of My Website Design", "/fun/webpage-design/");
        addLink("News", "/news/");
        addLink("Browser Information", "/fun/browser-info/");
        addLink("Run JS on the web", "/fun/run-js-on-web");
        addLink("Info", "/info/");
	addLink("More Links", "/links/");
        alsp("25yeht Beta", "25yehtgithubio.a25yeht.repl.co");
        addLink("This site is under development.", null, false);
        });
} else {
    console.log("jQuery not found!")
}
