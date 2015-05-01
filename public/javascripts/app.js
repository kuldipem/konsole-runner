$(document).ready(function() {

    hljs.initHighlightingOnLoad();

    $("html").on('keyup', function(event) {
        if (event.which === 13) {
            $("#fire").click();
        }
    });

    // console output
    $("#fire").on("click", function() {
        $login_name = "joe";
        $cmd = $("#cmd").val();
        $output = $("#screen");


        if ($cmd === "") {
            alert("Command is empty.");
            return false;
        }

        // if command is "clear" or  "cls" than clear screen
        if($cmd==="clear" || $cmd==="cls"){
            $("#clear").click();
            $("#cmd").val(''); // clear command input
            return false;
        }

        $.ajax({
            url: "http://localhost:7777/users/cmd",
            type: "POST",
            data: {
                name: $login_name,
                cmd: $cmd
            },
            success: function(data) {
                $output.append($("#cmd").val() + "\n");
                $output.append(data + "\n");
                $("#cmd").val(''); // clear command input
            }
        }).done(function(data) {

        });

    });



     $("#clear").on("click", function(){
     		$("#screen").text("");
     });

});