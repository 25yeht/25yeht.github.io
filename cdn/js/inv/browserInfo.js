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
        };
    });
} else {
    console.log("jQuery not found. Maybe put [name=browserInfo.js] in front of it?")
}
