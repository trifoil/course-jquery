$(function () {
    console.log("nigga")
    $("#save").attr("disabled", "disabled");

    let stars = 0;
    let pseudo = $('#pseudo').val();
    let commentaire = $('#commentaire').val();
    console.log("pseudo : " + pseudo)
    console.log("commentaire : " + commentaire)


    $(".star").click(function () {

        stars = $(this).attr("data-value");
        //console.log(stars);

        for (i = 0; i < stars; i++) {
            // on trouve l'enfant de la classe stars qui a la data-value == i, puis on lui donne la classe ok
            let j = parseInt(i) + 1;
            $(".stars").find('[data-value="' + j + '"]').addClass("ok");
        }
        for (i = stars; i < 5; i++) {
            let j = parseInt(i) + 1;
            console.log(j);
            $(".stars").find('[data-value="' + j + '"]').removeClass("ok");
        }

        if (stars != 0 && pseudo != "" && commentaire != "") {
            $("#save").removeAttr("disabled");
            //$("#save").attr()
        }
        else {
            $("#save").attr("disabled", "disabled");
        }
    })

    $('#pseudo').on('input', function () {
        pseudo = $('#pseudo').val()
        console.log("valeur : " + pseudo)

        if (stars != 0 && pseudo != "" && commentaire != "") {
            $("#save").removeAttr("disabled");
            //$("#save").attr()
        }
        else {
            $("#save").attr("disabled", "disabled");
        }

    })

    $("#commentaire").on('input', function () {
        commentaire = $(this).val()
        console.log("commentaire : " + commentaire)

        if (stars != 0 && pseudo != "" && commentaire != "") {
            $("#save").removeAttr("disabled");
            //$("#save").attr()
        }
        else {
            $("#save").attr("disabled", "disabled");
        }
    })




    $("#save").click(function () {
        $("#comments-container").prepend("<div class=\"comment\"><div class=\"comment-header\"><span class=\"pseudo\">" + pseudo + "</span><span class=\"note\">" + stars + "/5</span></div><p>" + commentaire + "</p></div>")
        stars = 0;
        pseudo = "";
        commentaire = "";
        $("#pseudo").val("");
        $("#commentaire").val("");
        $(".star").removeClass("ok");
        console.log("saved");
    })

    $(".comment").click(function () {
        $(this).remove();
    })

})


// attr() ou removeAttr()
// .attr("disabled", "disabled") ou .prop("disabled", true).