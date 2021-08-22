if(document.getElementsByName("jquery")[0]) {
    console.log("genLinks.js started!");
    $(document).ready(function() {
        console.log("Document is ready!");
        function addLink(displayName, url, isLink) {
            if(window.location.pathname.charAt(window.location.pathname.length - 1) == "/" && url == window.location.pathname) {
                var $currentLink = $("<span>").addClass("link").text(displayName).css({
					"-webkit-user-drag": "none",
					"-moz-user-drag": "none",
					"-ms-user-drag": "none",
					"-o-user-drag": "none",
					"user-drag": "none",
					"user-select": "none"
				}).appendTo("#links");
            } else if (window.location.pathname.charAt(window.location.pathname.length - 1) !== "/" && url + "/" == window.location.pathname || isLink == false) {
                var $currentLink = $("<span>").addClass("link").text(displayName).css({
					"-webkit-user-drag": "none",
					"-moz-user-drag": "none",
					"-ms-user-drag": "none",
					"-o-user-drag": "none",
					"user-drag": "none",
					"user-select": "none"
				}).appendTo("#links");
            } else {
                var $currentLink = $("<span>").attr("href", url).addClass("link").text(displayName).appendTo("#links").css({
					"-webkit-user-drag": "none",
					"-moz-user-drag": "none",
					"-ms-user-drag": "none",
					"-o-user-drag": "none",
					"user-drag": "none",
					"user-select": "none",
					"cursor": "pointer"
				}).click(_ => {
					location.href = url;
				}).appendTo("#links");
            }
        }
        function addExtLink(displayName, url) {
            var $currentLink = $("<span>").attr("href", url).attr("target", "_blank").addClass("link").text(displayName).css({
				"-webkit-user-drag": "none",
				"-moz-user-drag": "none",
				"-ms-user-drag": "none",
				"-o-user-drag": "none",
				"user-drag": "none",
				"user-select": "none",
				"cursor": "pointer"
			}).click(_ => {
				location.href = url;
			}).appendTo("#links");
		}
		function alsp(displayName, hostname) {
			var $currentLink = $("<span>").attr("href", "https://" + hostname + window.location.pathname + "?switch=true").addClass("link").text(displayName).css({
				"-webkit-user-drag": "none",
				"-moz-user-drag": "none",
				"-ms-user-drag": "none",
				"-o-user-drag": "none",
				"user-drag": "none",
				"user-select": "none",
				"cursor": "pointer"
			}).click(_ => {
				location.href = "https://" + hostname + location.pathname + "?switch=true";
			}).appendTo("#links");
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

		$("a").css({
			userSelect: "none",
			"-webkit-user-drag": "none",
			"-o-user-drag": "none",
			"-moz-user-drag": "none",
			userDrag: "none"
		});
		if(!document.title.toLowerCase().includes("404 not found")) {
			alsp("25yeht Stable", "25yeht.github.io");
		} else {
			addLink("25yeht Stable", "https://25yeht.github.io");
		}
        addLink("This site is under development.", null, false);
        });
} else {
    console.log("jQuery not found!")
}
