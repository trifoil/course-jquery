$(function(){
    console.log("nigga")

    let stars = 0;

    $(".star").click(function(){
        
        stars = $(this).attr("data-value");
        //console.log(stars);

        for (i=0; i<stars; i++){
            // on trouve l'enfant de la classe stars qui a la data-value == i, puis on lui donne la classe ok
            let j = parseInt(i)+1;
            $(".stars").find('[data-value="'+j+'"]').addClass("ok");
        }
        for (i=stars;i<5;i++){
            let j = parseInt(i)+1;
            console.log(j);
            $(".stars").find('[data-value="'+j+'"]').removeClass("ok");
        }
    })

    if(1){
        $("#save").removeAttr("disabled");
        //$("#save").attr()
    }

    $("#save").click(function(){
        
        console.log("saved");
    })

    $(".comment").click(function(){
        $(this).remove();
    })

})


// attr() ou removeAttr()