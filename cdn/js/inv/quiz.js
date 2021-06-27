$(document).ready(function() {
    $("#quiz-form").on("submit", function(e) {
        e.preventDefault();
        if($("#qf-1-s").val() == "2005") {
            $("#qf-1-r").css("color", "green");
            $("#qf-1-r").text("Correct!");
        } else if($("#qf-1-s").val() == "default") {
            $("#qf-1-r").css("color", "red");
            $("#qf-1-r").text("Please select an answer.");
        } else {
            $("#qf-1-r").css("color", "red");
            $("#qf-1-r").text("Incorrect, please try again.");
        }
        if($("#qf-2").val() == 12) {
            $("#qf-2-r").css("color", "green");
            $("#qf-2-r").text("Correct!")
        } else if($("#qf-2").val().includes("12") || $("#qf-2").val() == "11" || $("#qf-2").val() == "13") {
            $("#qf-2-r").css("color", "red");
            $("#qf-2-r").text("Incorrect, you've got a typo.");
        } else {
            $("#qf-2-r").css("color", "red");
            $("#qf-2-r").text("Incorrect, please try again."); 
        }
        if($("#qf-1-s").val() == "2005" && $("#qf-2").val() == "12") {
            $("#r").css("color", "green");
            $("#r").text("Correct!");
        } else if($("#qf-2").val() == "") {
            $("#qf-2-r").css("color", "red");
            $("#r").css("color", "red");
            $("#qf-2-r").text("Please enter a number.");
            $("#r").html("<br><span class='err-msg'>Incorrect, please try again.</span><br><span id='r-2' style='color: black'><strong><em>Hint For Question 2:</em></strong> If the people drowned, they don't disappear, which means that all of the people are still in the pool.<br><br><strong><em>Hint For Question 1:</em></strong> Ahh. The good old days when Roblox was created in the early 2000s.</span>");
            $("#r-2")[0].scrollIntoView();
        } else {
            $("#r").css("color", "red");
            $("#r").html("<br><span class='err-msg'>Incorrect, please try again.</span><br><span id='r-2' style='color: black'><strong><em>Hint For Question 2:</em></strong> If the people drowned, they don't disappear, which means that all of the people are still in the pool.<br><br><strong><em>Hint For Question 1:</em></strong> Ahh. The good old days when Roblox was created in the early 2000s.</span>");
            $("#r-2")[0].scrollIntoView()
        }
        });
        $("#qf-1-s").on("click", function() {
            $("[value=default]").attr("disabled", true);
        });

        $("#yw").hide();
        $("#submit-btn").on("click", function() {
            $("#yw").hide();
            if($("#qf-1-s").val() == "2005" && $("#qf-2").val() == "12") {
                console.log("Correct!");
                console.log($("#qf-1-s").val());
                console.log($("#qf-2").val())
                $("<audio>").attr("src", "/cdn/audio/ding-sound-effect_1.mp3").attr("id", "cur-aud");
                var daesTimout = winodw.setTimeout(function() {
                    $("#cur-aud").remove();
                    window.clearTimout(daesTimout);
                }, 3000);
                $("#yw").hide();
                $("#yw").slideDown();
            } else {
                console.log("Incorrect.");
                console.log($("#qf-1-s").val());
                console.log($("#qf-2").val())
            }
        });
});
