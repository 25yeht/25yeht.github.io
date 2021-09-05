var isOnline = true;
addEventListener("online", function() {
	isOnline = true;
});
addEventListener("offline", function() {
	isOnline = false;
});
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
				}).appendTo("#links2");
            } else if (window.location.pathname.charAt(window.location.pathname.length - 1) !== "/" && url + "/" == window.location.pathname || isLink == false) {
                var $currentLink = $("<span>").addClass("link").text(displayName).css({
					"-webkit-user-drag": "none",
					"-moz-user-drag": "none",
					"-ms-user-drag": "none",
					"-o-user-drag": "none",
					"user-drag": "none",
					"user-select": "none"
				}).appendTo("#links2");
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
					if(isOnline) {
						location.href = url;
					}
				}).appendTo("#links2");
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
				if(isOnline) {
					location.href = url;
				}
			}).appendTo("#links-2");
		}
        //Add the links here addLink(Text Displayed, Real URL);
        addExtLink("README", "/README.md");
		addLink("Run JS from a link", "/fun/run-js-from-link/");
		addLink("25Browser", "/fun/25browser/");
		addLink("Display an Image", "/fun/display-img/");
		addLink("Loop a song!", "/fun/loop-song/");
		addLink("Easy Notepad", "/fun/easy-notepad");
		addLink("Interactive 7-Minute Workout", "/fun/workout-activity/");
		addLink("Random Roblox Ads", "/fun/roblox-ads");

		$("a").css({
			userSelect: "none",
			"-webkit-user-drag": "none",
			"-o-user-drag": "none",
			"-moz-user-drag": "none",
			userDrag: "none"
		});
        });
} else {
    console.log("jQuery not found!");
}
