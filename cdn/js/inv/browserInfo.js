if(document.getElementsByName("jquery")[0]) {
    console.log("template.js started!");
    //When the document is loaded, do code inside of function in parameter.
    $(document).ready(function() {
        //After the document is fully loaded, you can properly manipulate HTML.
        function detectMob() {
            const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
			/iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];

        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
        }
        $("#usr-agt").text(window.navigator.userAgent);
        if(detectMob() === true) {
            $("#is-mb").text("You are on a mobile device.");
        } else {
            $("#is-mb").text("You are not on a mobile device.")
        }
        window.onoffline = (event) => {
        $("#offline-stat").text("You are now offline.");
        $("#try-try-1").text("Try turning your internet connection on and see what happens...");
        };
        window.ononline = (event) => {
            $("#offline-stat").text("You are now online");
            $("<audio>").attr("id", "ding").attr("src", "/cdn/audio/ding-sound-effect_1.mp3").attr("autoplay", true).appendTo("body");
            window.setTimeout(function() {
                $("#ding").remove();
                window.clearTimeout(this);
            }, 3000);
            $("#try-try-1").text("Try turning your internet connection off and see what happens...");
        };
        function getOS() {
            if(window.navigator.userAgent.includes("Macintosh")) {
                return "MacOS";
            } else if(window.navigator.userAgent.includes("iPhone")) {
                return "iPhone iOS";
            } else if(window.navigator.userAgent.includes("Android")) {
                return "Android OS";
            } else if(window.navigator.userAgent.includes("CrOS")) {
                return "Chrome OS";
            } else if(window.navigator.userAgent.includes("iPad")) {
                return "iPad OS";
            } else if(window.navigator.userAgent.includes("Windows NT 10.0")) {
                return("Windows 10")
            } else if(window.navigator.userAgent.includes("Windows")) {
                return "Microsoft Windows";
            } else if(window.navigator.userAgent.includes("Linux")) {
		return "Linux";
	    } else {
                return "Unspecified OS";
            }
        }
        $("#dvc").text(getOS())
        
    });
} else {
    console.log("jQuery not found. Maybe put [name=browserInfo.js] in front of it?")
}
