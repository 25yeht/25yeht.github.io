if(document.getElementsByName("jquery")[0]) {
    console.log("required.js started!");
    console.log("Welcome home!");
    
    $(document).ready(function() {
        $("div").addClass("dev").attr("id", "dev-console").html(`
            <h2>Welcome to the <b>Developer Console!</b></h2>
            <br>
            <h2>Your <b>User Agent</b> is:</h2>
            <h3 id='dev-usr-agt'></h3>
        `).appendTo("body");
        $("#dev-usr-agt").text(window.navigator.userAgent);
        $("#dev-console").hide();
    });
} else {
    console.log("jQuery not found! Maybe try adding the script as the first?");
}
